// app/register/complete/page.tsx
'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';

function CompleteInner() {
  const { completeWhatsAppRegistration } = useAuth();
  const router = useRouter();
  const params = useSearchParams();

  const tempToken = params.get('tempToken') || '';
  const phone = params.get('phone') || '';
  const redirect = params.get('redirect') || '/apply';

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const r = await completeWhatsAppRegistration(tempToken, name, username);
    if (r.success) {
      router.push(redirect);
    } else {
      setErr(r.error || 'Registration failed');
    }
    setBusy(false);
  }

  if (!tempToken) {
    return (
      <main className="min-h-screen bg-[#F3F5F8] flex items-center justify-center px-4">
        <div className="bg-white p-6 rounded border border-[#D3DAE4] max-w-[420px] text-center">
          <p className="text-[14px] text-[#8C1C1C]">
            Session expired. Please{' '}
            <a href="/register" className="underline font-medium">
              start over
            </a>
            .
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F3F5F8] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[440px] bg-white rounded-md border border-[#D3DAE4] p-6 sm:p-8">
        <h1 className="font-serif font-semibold text-[28px] text-[#14213D] mb-1">
          Almost done
        </h1>
        <p className="text-[14px] text-[#475472] mb-6">
          Verified: +91 {phone}. Just tell us your name.
        </p>

        {err && (
          <div className="mb-4 p-3 rounded border border-[#E9A0A0] bg-[#FBEAEA] text-[13px] text-[#8C1C1C]">
            {err}
          </div>
        )}

        <form onSubmit={submit}>
          <label className="block mb-4">
            <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
              Full name *
            </span>
            <input
              type="text"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded border border-[#8793A8] text-[15px] focus:outline-none focus:border-[#0B3D74]"
            />
          </label>

          <label className="block mb-6">
            <span className="block text-[13px] font-medium text-[#14213D] mb-1.5">
              Username <span className="text-[#8793A8]">(optional)</span>
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2.5 rounded border border-[#8793A8] text-[15px] focus:outline-none focus:border-[#0B3D74]"
            />
          </label>

          <button
            type="submit"
            disabled={busy || name.trim().length < 2}
            className="w-full min-h-[48px] bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60"
          >
            {busy ? 'Creating account…' : 'Complete registration'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function CompletePage() {
  return (
    <Suspense fallback={null}>
      <CompleteInner />
    </Suspense>
  );
}