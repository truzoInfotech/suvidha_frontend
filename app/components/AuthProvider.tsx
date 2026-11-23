// components/AuthProvider.tsx
'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { authApi } from '@/lib/api';

export interface AuthUser {
  id: string;
  whatsappNumber?: string;
  email?: string;
  username?: string;
  name?: string;
  role?: string;
  city?: string;
  pricingTier?: string;
  registrationFee?: number;
}

interface AuthCtx {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;

  login: (email: string, password: string) => Promise<void>;
  signup: (body: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;

  sendWhatsAppOTP: (
    whatsappNumber: string
  ) => Promise<{ success: boolean; error?: string }>;
  verifyWhatsAppOTP: (
    whatsappNumber: string,
    otpCode: string
  ) => Promise<{
    success: boolean;
    requiresRegistration?: boolean;
    tempToken?: string;
    error?: string;
  }>;
  completeWhatsAppRegistration: (
    tempToken: string,
    name: string,
    username?: string
  ) => Promise<{ success: boolean; error?: string }>;

  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>({} as AuthCtx);

const TOKEN_KEY = 'suvidha_token';
const USER_KEY = 'suvidha_user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const saveAuth = (t: string, u: AuthUser) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(TOKEN_KEY, t);
      localStorage.setItem(USER_KEY, JSON.stringify(u));
    }
    setToken(t);
    setUser(u);
  };

  const clearAuth = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
    setToken(null);
    setUser(null);
  };

  const refresh = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const t = localStorage.getItem(TOKEN_KEY);
    if (!t) {
      clearAuth();
      return;
    }
    try {
      const res = await authApi.verify(t);
      if (res.valid) {
        saveAuth(t, res.user);
      } else {
        clearAuth();
      }
    } catch {
      clearAuth();
    }
  }, []);

  useEffect(() => {
    (async () => {
      await refresh();
      setLoading(false);
    })();
  }, [refresh]);

  const login = async (email: string, password: string) => {
    const res = await authApi.login(email, password);
    saveAuth(res.token, res.user);
  };

  const signup = async (body: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await authApi.signup(body);
    saveAuth(res.token, res.user);
  };

  const sendWhatsAppOTP = async (whatsappNumber: string) => {
    try {
      await authApi.whatsappSendOtp(whatsappNumber);
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Failed to send OTP' };
    }
  };

  const verifyWhatsAppOTP = async (
    whatsappNumber: string,
    otpCode: string
  ) => {
    try {
      const res = await authApi.whatsappVerifyOtp(whatsappNumber, otpCode);
      if (!res.requiresRegistration && res.token && res.user) {
        saveAuth(res.token, res.user);
      }
      return {
        success: true,
        requiresRegistration: res.requiresRegistration,
        tempToken: res.tempToken,
      };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Invalid OTP' };
    }
  };

  const completeWhatsAppRegistration = async (
    tempToken: string,
    name: string,
    username?: string
  ) => {
    try {
      const res = await authApi.whatsappCompleteRegistration(
        tempToken,
        name,
        username
      );
      saveAuth(res.token, res.user);
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Registration failed' };
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      clearAuth();
    }
  };

  return (
    <Ctx.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token,
        login,
        signup,
        sendWhatsAppOTP,
        verifyWhatsAppOTP,
        completeWhatsAppRegistration,
        logout,
        refresh,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);