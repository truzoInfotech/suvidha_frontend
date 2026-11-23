// app/logout/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await logout();
      router.push('/login');
    })();
  }, [logout, router]);

  return <p className="p-8 text-[#475472]">Signing out…</p>;
}