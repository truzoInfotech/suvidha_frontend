// app/contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import { IconCheck } from '../components/icons';

const TOPICS = [
  'Marriage registration',
  'Track an existing application',
  'Fees or payments',
  'Grievance',
  'Something else',
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = 'Enter a valid email address.';
    if (phone.trim() && !/^[+\d][\d\s-]{6,}$/.test(phone.trim())) e.phone = 'Enter a valid phone number.';
    if (message.trim().length < 10) e.message = 'Tell us a bit more (at least 10 characters).';
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // Dummy submit — no backend
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-white rounded-md border border-[#D3DAE4] p-8 text-center">
        <div className="w-14 h-14 bg-[#E2F2E8] rounded-full flex items-center justify-center mx-auto mb-4">
          <IconCheck className="w-7 h-7 text-[#1C6E3F]" />
        </div>
        <h3 className="font-serif font-semibold text-[22px] leading-[28px] text-[#14213D] mb-2">
          Thanks — we&apos;ve got your message.
        </h3>
        <p className="text-[15px] leading-[24px] text-[#475472] max-w-[440px] mx-auto mb-6">
          This is a demo form, so nothing was actually sent. In the live product, a confirmation email would arrive within a few minutes and we would reply within one working day.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setName('');
            setEmail('');
            setPhone('');
            setTopic(TOPICS[0]);
            setMessage('');
            setErrors({});
          }}
          className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2 bg-[#0B3D74] text-white rounded font-medium text-[14px] hover:bg-[#092f5a] transition"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-white rounded-md border border-[#D3DAE4] p-6 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#8793A8] rounded text-[15px] text-[#14213D] placeholder:text-[#5F6B85] focus:outline-none focus:border-[#0B3D74] focus:ring-1 focus:ring-[#0B3D74]"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#8793A8] rounded text-[15px] text-[#14213D] placeholder:text-[#5F6B85] focus:outline-none focus:border-[#0B3D74] focus:ring-1 focus:ring-[#0B3D74]"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Phone (optional)" error={errors.phone}>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 ..."
            className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#8793A8] rounded text-[15px] text-[#14213D] placeholder:text-[#5F6B85] focus:outline-none focus:border-[#0B3D74] focus:ring-1 focus:ring-[#0B3D74]"
          />
        </Field>
        <Field label="Topic">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#8793A8] rounded text-[15px] text-[#14213D] focus:outline-none focus:border-[#0B3D74] focus:ring-1 focus:ring-[#0B3D74]"
          >
            {TOPICS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell us what you need help with, and include your reference number if you have one."
          className="w-full px-3 py-2 bg-white border border-[#8793A8] rounded text-[15px] text-[#14213D] placeholder:text-[#5F6B85] focus:outline-none focus:border-[#0B3D74] focus:ring-1 focus:ring-[#0B3D74] resize-y"
        />
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-[12.5px] leading-[18px] text-[#5F6B85] max-w-[420px]">
          This is a demo form — nothing is sent. For urgent help, call the helpline.
        </p>
        <button
          type="submit"
          className="min-h-[44px] px-6 py-2 bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.66px] font-semibold text-[#475472] mb-1.5">
        {label}
      </span>
      {children}
      {error && <span className="block mt-1 text-[12.5px] text-[#B42318]">{error}</span>}
    </label>
  );
}