// lib/api.ts

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export class ApiError extends Error {
  status: number;
  body: any;
  constructor(status: number, message: string, body?: any) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

export async function apiFetch<T = any>(
  path: string,
  options: RequestInit & { token?: string | null } = {}
): Promise<T> {
  const { token, headers, ...rest } = options;

  const res = await fetch(`${API_URL}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers || {}),
    },
    credentials: 'include',
  });

  const text = await res.text();
  let data: any = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text };
  }

  if (!res.ok) {
    const msg =
      data?.message || data?.error || `Request failed (${res.status})`;
    throw new ApiError(res.status, msg, data);
  }

  return data as T;
}

/* ---------------- Auth API ---------------- */

export const authApi = {
  // WhatsApp OTP flow
  whatsappSendOtp: (whatsappNumber: string) =>
    apiFetch<{ success: true; message: string }>('/whatsapp-auth/send-otp', {
      method: 'POST',
      body: JSON.stringify({ whatsappNumber }),
    }),

  whatsappResendOtp: (whatsappNumber: string) =>
    apiFetch<{ success: true; message: string }>('/whatsapp-auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({ whatsappNumber }),
    }),

  whatsappVerifyOtp: (whatsappNumber: string, otpCode: string) =>
    apiFetch<{
      success: true;
      requiresRegistration: boolean;
      token?: string;
      tempToken?: string;
      whatsappNumber?: string;
      user?: any;
    }>('/whatsapp-auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ whatsappNumber, otpCode }),
    }),

  whatsappCompleteRegistration: (
    tempToken: string,
    name: string,
    username?: string
  ) =>
    apiFetch<{ success: true; token: string; user: any }>(
      '/whatsapp-auth/complete-registration',
      {
        method: 'POST',
        body: JSON.stringify({ tempToken, name, username }),
      }
    ),

  // Email/password
  login: (email: string, password: string) =>
    apiFetch<{ success: true; token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  signup: (body: { name: string; email: string; password: string }) =>
    apiFetch<{ success: true; token: string; user: any }>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  verify: (token: string) =>
    apiFetch<{ valid: boolean; user: any }>('/auth/verify', { token }),

  me: (token: string) =>
    apiFetch<{ success: true; user: any }>('/auth/me', { token }),

  logout: () =>
    apiFetch<{ success: true }>('/auth/logout', { method: 'POST' }),
};