// app/login/page.tsx
'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../components/AuthProvider';

type Mode = 'whatsapp' | 'email';

function LoginInner() {
  const { login, sendWhatsAppOTP, verifyWhatsAppOTP } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  
  // ✅ CHANGED: Default redirect is now '/account'
  const redirect = params.get('redirect') || '/account';

  const [mode, setMode] = useState<Mode>('whatsapp');

  const [waStep, setWaStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [waBusy, setWaBusy] = useState(false);
  const [waErr, setWaErr] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emBusy, setEmBusy] = useState(false);
  const [emErr, setEmErr] = useState<string | null>(null);

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setWaErr(null);
    setWaBusy(true);
    const result = await sendWhatsAppOTP(phone);
    if (result.success) {
      setWaStep('otp');
    } else {
      setWaErr(result.error || 'Failed to send OTP');
    }
    setWaBusy(false);
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setWaErr(null);
    setWaBusy(true);
    const result = await verifyWhatsAppOTP(phone, otp);
    if (result.success) {
      if (result.requiresRegistration) {
        router.push(
          `/register/complete?tempToken=${encodeURIComponent(
            result.tempToken || ''
          )}&phone=${encodeURIComponent(phone)}&redirect=${encodeURIComponent(
            redirect
          )}`
        );
      } else {
        router.push(redirect);
      }
    } else {
      setWaErr(result.error || 'Invalid OTP');
    }
    setWaBusy(false);
  }

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setEmErr(null);
    setEmBusy(true);
    try {
      await login(email, password);
      router.push(redirect);
    } catch (e: any) {
      setEmErr(e?.message || 'Login failed');
    } finally {
      setEmBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F3F5F8] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[440px] bg-white rounded-md border border-[#D3DAE4] p-6 sm:p-8">
        <h1 className="font-serif font-semibold text-[28px] text-[#14213D] mb-1">
          Sign in
        </h1>
        <p className="text-[14px] text-[#475472] mb-6">
          Access your application.
        </p>

        <div className="flex mb-6 border border-[#D3DAE4] rounded overflow-hidden">
          <button
            type="button"
            onClick={() => setMode('whatsapp')}
            className={`flex-1 py-2.5 text-[13.5px] font-medium transition ${
              mode === 'whatsapp'
                ? 'bg-[#0B3D74] text-white'
                : 'bg-white text-[#475472] hover:bg-[#F3F5F8]'
            }`}
          >
            WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setMode('email')}
            className={`flex-1 py-2.5 text-[13.5px] font-medium transition ${
              mode === 'email'
                ? 'bg-[#0B3D74] text-white'
                : 'bg-white text-[#475472] hover:bg-[#F3F5F8]'
            }`}
          >
            Email
          </button>
        </div>

        {mode === 'whatsapp' && (
          <>
            {waErr && (
              <div className="mb-4 p-3 rounded border border-[#E9A0A0] bg-[#FBEAEA] text-[13px] text-[#8C1C1C]">
                {waErr}
              </div>
            )}

            {waStep === 'phone' ? (
              <form onSubmit={handleSendOtp}>
                <label className="block mb-4">
                  <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
                    WhatsApp number
                  </span>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-[#8793A8] bg-[#F3F5F8] text-[14px] text-[#475472]">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="\d{10}"
                      maxLength={10}
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, ''))
                      }
                      className="flex-1 px-3 py-2.5 rounded-r border border-[#8793A8] text-[15px] focus:outline-none focus:border-[#0B3D74]"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  disabled={waBusy || phone.length !== 10}
                  className="w-full min-h-[48px] bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60"
                >
                  {waBusy ? 'Sending…' : 'Send code on WhatsApp'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <label className="block mb-4">
                  <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
                    6-digit code
                  </span>
                  <input
                    inputMode="numeric"
                    pattern="\d{6}"
                    maxLength={6}
                    required
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ''))
                    }
                    className="w-full px-3 py-2.5 rounded border border-[#8793A8] text-[20px] tracking-[0.5em] text-center focus:outline-none focus:border-[#0B3D74]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={waBusy || otp.length !== 6}
                  className="w-full min-h-[48px] bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60"
                >
                  {waBusy ? 'Verifying…' : 'Verify and sign in'}
                </button>

                <div className="mt-3 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setWaStep('phone')}
                    className="text-[13px] text-[#475472] hover:underline"
                  >
                    ← Change number
                  </button>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={waBusy}
                    className="text-[13px] text-[#0B3D74] font-medium hover:underline disabled:opacity-60"
                  >
                    Resend code
                  </button>
                </div>
              </form>
            )}
          </>
        )}

        {mode === 'email' && (
          <form onSubmit={handleEmailLogin}>
            {emErr && (
              <div className="mb-4 p-3 rounded border border-[#E9A0A0] bg-[#FBEAEA] text-[13px] text-[#8C1C1C]">
                {emErr}
              </div>
            )}

            <label className="block mb-4">
              <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded border border-[#8793A8] text-[15px] focus:outline-none focus:border-[#0B3D74]"
              />
            </label>

            <label className="block mb-6">
              <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
                Password
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 rounded border border-[#8793A8] text-[15px] focus:outline-none focus:border-[#0B3D74]"
              />
            </label>

            <button
              type="submit"
              disabled={emBusy}
              className="w-full min-h-[48px] bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60"
            >
              {emBusy ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        )}

        <p className="mt-6 text-[13.5px] text-[#475472] text-center">
          Don&apos;t have an account?{' '}
          <Link
            href={`/register?redirect=${encodeURIComponent(redirect)}`}
            className="text-[#0B3D74] font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginInner />
    </Suspense>
  );
}