'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authApi } from '@/lib/api';
import { useAuth } from '../components/AuthProvider';

export default function LoginPage() {
  const router = useRouter();
  const { refresh } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await authApi.login({ email, password });
      await refresh();
      router.push('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#F3F5F8] py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-md border border-[#D3DAE4] p-8">
        <h1 className="font-serif font-semibold text-[28px] leading-tight text-[#14213D] mb-1">
          Welcome back
        </h1>
        <p className="text-[14px] text-[#475472] mb-6">
          Sign in to track your applications.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded bg-[#FBE9E9] border border-[#E7B4B4] text-[13.5px] text-[#8A1F1F]">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-[#14213D] mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 bg-white border border-[#D3DAE4] rounded text-[14px] text-[#14213D] focus:outline-none focus:border-[#0B3D74]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-[#14213D] mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 bg-white border border-[#D3DAE4] rounded text-[14px] text-[#14213D] focus:outline-none focus:border-[#0B3D74]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0B3D74] text-white rounded font-medium text-[14px] hover:bg-[#092f5a] transition disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-center text-[13.5px] text-[#475472]">
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="text-[#0B3D74] font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}