// app/register/page.tsx
'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../components/AuthProvider';

function RegisterInner() {
  const { sendWhatsAppOTP, verifyWhatsAppOTP } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get('redirect') || '/apply';

  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await sendWhatsAppOTP(phone);
    if (r.success) setStep('otp');
    else setErr(r.error || 'Failed to send OTP');
    setBusy(false);
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await verifyWhatsAppOTP(phone, otp);
    if (r.success) {
      if (r.requiresRegistration) {
        router.push(
          `/register/complete?tempToken=${encodeURIComponent(
            r.tempToken || ''
          )}&phone=${encodeURIComponent(phone)}&redirect=${encodeURIComponent(
            redirect
          )}`
        );
      } else {
        router.push(redirect);
      }
    } else {
      setErr(r.error || 'Invalid OTP');
    }
    setBusy(false);
  }

  return (
    <main className="min-h-screen bg-[#F3F5F8] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[440px] bg-white rounded-md border border-[#D3DAE4] p-6 sm:p-8">
        <h1 className="font-serif font-semibold text-[28px] text-[#14213D] mb-1">
          Create an account
        </h1>
        <p className="text-[14px] text-[#475472] mb-6">
          We&apos;ll verify your WhatsApp number. Takes 30 seconds.
        </p>

        {err && (
          <div className="mb-4 p-3 rounded border border-[#E9A0A0] bg-[#FBEAEA] text-[13px] text-[#8C1C1C]">
            {err}
          </div>
        )}

        {step === 'phone' ? (
          <form onSubmit={handleSend}>
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
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-3 py-2.5 rounded-r border border-[#8793A8] text-[15px] focus:outline-none focus:border-[#0B3D74]"
                />
              </div>
            </label>

            <button
              type="submit"
              disabled={busy || phone.length !== 10}
              className="w-full min-h-[48px] bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60"
            >
              {busy ? 'Sending…' : 'Send code on WhatsApp'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify}>
            <label className="block mb-4">
              <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
                Enter 6-digit code sent to +91 {phone}
              </span>
              <input
                inputMode="numeric"
                pattern="\d{6}"
                maxLength={6}
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                className="w-full px-3 py-2.5 rounded border border-[#8793A8] text-[20px] tracking-[0.5em] text-center focus:outline-none focus:border-[#0B3D74]"
              />
            </label>

            <button
              type="submit"
              disabled={busy || otp.length !== 6}
              className="w-full min-h-[48px] bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60"
            >
              {busy ? 'Verifying…' : 'Verify and continue'}
            </button>

            <div className="mt-3 flex justify-between">
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="text-[13px] text-[#475472] hover:underline"
              >
                ← Change number
              </button>
              <button
                type="button"
                onClick={handleSend}
                disabled={busy}
                className="text-[13px] text-[#0B3D74] font-medium hover:underline disabled:opacity-60"
              >
                Resend code
              </button>
            </div>
          </form>
        )}

        <p className="mt-6 text-[13.5px] text-[#475472] text-center">
          Already registered?{' '}
          <Link
            href={`/login?redirect=${encodeURIComponent(redirect)}`}
            className="text-[#0B3D74] font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterInner />
    </Suspense>
  );
}