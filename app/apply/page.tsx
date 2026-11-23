// app/apply/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function ApplyPage() {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login?redirect=/apply');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) return <p className="p-8">Loading…</p>;
  if (!user) return null;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-serif text-[#14213D]">
        Welcome, {user.name || user.whatsappNumber}
      </h1>
      <p className="text-[#475472] mt-2">
        Signed in via {user.whatsappNumber ? 'WhatsApp' : 'email'}.
      </p>
      {/* your apply form goes here */}
    </main>
  );
}