'use client';

import Link from 'next/link';
import { useState, useEffect, ChangeEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

/* ============================================================
   INLINE ICONS (Matches Home Page)
   ============================================================ */
const IconChevronRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 4l4 4-4 4" />
  </svg>
);

const IconFile = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.57">
    <path d="M5 2.5h7l3 3v12H5z" />
    <path d="M12 2.5v3h3" />
  </svg>
);

const IconCheck = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="10" cy="10" r="8" />
    <path d="M6 10l2.5 2.5L14 7" />
  </svg>
);

const IconInfo = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="10" cy="10" r="8" />
    <line x1="10" y1="9" x2="10" y2="14" />
    <circle cx="10" cy="6.5" r="0.7" fill="currentColor" />
  </svg>
);

/* ============================================================
   TYPES & CONSTANTS
   ============================================================ */
type FormState = Record<string, any>;

const EMPTY_FORM: FormState = {
  groomId: '', groomPassport: '', groomBirthCertificateOrMarksheet: '',
  brideId: '', bridePassport: '', brideBirthCertificateOrMarksheet: '',
  marriageProofPhoto: '', marriageProofCoupleImage: '', marriageProofInvitation: '',
  religiousCertificateImage: '',
  witness1AadharFront: '', witness1AadharBack: '', witness1PanCardPhoto: '',
  witness2AadharFront: '', witness2AadharBack: '', witness2PanCardPhoto: '',
  signatureImageGroom: '', signatureImageBride: '', signatureImageWitness1: '', signatureImageWitness2: '',
};

/* ============================================================
   REUSABLE UI COMPONENTS
   ============================================================ */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8 p-6 md:p-8 bg-white rounded-md border border-[#D3DAE4] shadow-sm">
      <div className="flex items-center gap-3 mb-6 border-b border-[#F3F5F8] pb-4">
        <div className="w-1.5 h-6 bg-[#0B3D74] rounded-full" />
        <h2 className="font-serif font-semibold text-[22px] text-[#14213D]">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function Label({ children, info }: { children: ReactNode; info?: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <label className="block text-[13px] font-semibold text-[#475472] uppercase tracking-wide">
        {children}
      </label>
      {info && (
        <div className="group relative cursor-help text-[#8793A8] hover:text-[#0B3D74]">
          <IconInfo />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-[#14213D] text-white text-[11px] rounded shadow-lg z-10 text-center leading-snug">
            {info}
          </div>
        </div>
      )}
    </div>
  );
}

function FileUpload({
  label, info, value, onChange, multiple = false
}: {
  label: string; info?: string; value: string; onChange: (v: string) => void; multiple?: boolean;
}) {
  const [uploading, setUploading] = useState(false);

  const files: string[] = (() => {
    if (!value) return [];
    if (!multiple) return [value];
    try { return JSON.parse(value); } catch { return [value]; }
  })();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files || []);
    e.target.value = '';
    if (picked.length === 0) return;

    setUploading(true);
    try {
      const base64s = await Promise.all(
        picked.map((file) => new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        }))
      );

      if (multiple) {
        onChange(JSON.stringify([...files, ...base64s]));
      } else {
        onChange(base64s[0]);
      }
    } catch (err) {
      alert('Error processing file');
    } finally {
      setUploading(false);
    }
  };

  const removeAt = (idx: number) => {
    const next = files.filter((_, i) => i !== idx);
    onChange(next.length ? JSON.stringify(next) : '');
  };

  return (
    <div>
      <Label info={info}>{label}</Label>
      
      <div className="relative border-2 border-dashed border-[#D3DAE4] hover:border-[#8793A8] bg-[#F3F5F8] rounded-md p-4 transition-colors text-center">
        <input
          type="file"
          multiple={multiple}
          accept="image/*,.pdf"
          onChange={handleFileChange}
          disabled={uploading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="flex flex-col items-center gap-2 pointer-events-none">
          <IconFile className="w-6 h-6 text-[#8793A8]" />
          <span className="text-[13.5px] font-medium text-[#0B3D74]">
            {uploading ? 'Processing...' : 'Click to upload'}
          </span>
          <span className="text-[12px] text-[#5F6B85]">PDF or Images</span>
        </div>
      </div>

      {files.length > 0 && !uploading && (
        <ul className="mt-3 space-y-2">
          {files.map((_, idx) => (
            <li key={idx} className="flex items-center justify-between px-3 py-2 bg-[#E2F2E8] border border-[#1C6E3F]/20 rounded text-[13px]">
              <span className="flex items-center gap-2 text-[#1C6E3F] font-medium truncate">
                <IconCheck className="w-4 h-4 shrink-0" />
                File {idx + 1} attached
              </span>
              <button
                type="button"
                onClick={() => removeAt(idx)}
                className="text-[#8A1F1F] hover:text-red-700 font-bold px-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================ */
export default function AccountPage() {
  const router = useRouter();
  
  // ✅ USING YOUR AUTH HOOK
  const { token, isAuthenticated, loading: authLoading, logout } = useAuth();

  const [form, setForm] = useState<FormState>({ ...EMPTY_FORM });
  const [saving, setSaving] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // ✅ PROTECT ROUTE: If not logged in, push to login
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  const updateField = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      // TODO: Wire this up to your document.service.ts API call
      // await createDocument(cleanPayload(form), token);
      
      // Simulated API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || 'Error saving documents');
    } finally {
      setSaving(false);
    }
  };

  // Prevent UI flicker while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#F3F5F8] flex items-center justify-center">
        <div className="text-[#475472] font-medium animate-pulse">Loading account...</div>
      </div>
    );
  }

  // Don't render the form if not authenticated (useEffect will redirect)
  if (!isAuthenticated) return null;

  return (
    <main className="bg-[#F3F5F8] min-h-screen pb-20">
      
      {/* PAGE HEADER */}
      <div className="bg-white border-b border-[#D3DAE4]">
        <div className="mx-auto max-w-[1200px] px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] text-[#475472]">
            <Link href="/" className="hover:text-[#0B3D74]">Home</Link>
            <IconChevronRight className="w-3 h-3 text-[#8793A8]" />
            <Link href="/account" className="hover:text-[#0B3D74]">My Account</Link>
            <IconChevronRight className="w-3 h-3 text-[#8793A8]" />
            <span className="text-[#14213D] font-medium">Documents</span>
          </div>
          
          {/* ✅ WIRED TO YOUR LOGOUT FUNCTION */}
          <button 
            onClick={async () => {
              await logout();
              router.push('/');
            }}
            className="text-[13px] font-medium text-[#0B3D74] border border-[#8793A8] px-4 py-1.5 rounded hover:bg-[#F3F5F8] transition"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* MAIN FORM AREA */}
      <div className="mx-auto max-w-[880px] px-8 py-10">
        
        <div className="mb-8">
          <h1 className="font-serif font-semibold text-[36px] leading-tight text-[#14213D] mb-2">
            Upload Documents
          </h1>
          <p className="text-[16px] text-[#475472]">
            Provide the required documents for your marriage registration. You can save and update these at any time.
          </p>
        </div>

        <div className="flex gap-3 p-4 rounded-md bg-[#E5EDF7] border border-[#D3DAE4] mb-8">
          <IconInfo className="w-5 h-5 text-[#0B3D74] shrink-0 mt-0.5" />
          <p className="text-[14px] leading-[22px] text-[#14213D]">
            <strong>Private & Secure:</strong> Upload clear copies of all required documents. None of the fields are strictly required yet — submit only what you have available right now.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-md bg-[#FBE9E9] border border-[#E7B4B4] text-[14px] text-[#8A1F1F]">
            {error}
          </div>
        )}

        {isSubmitted ? (
          <div className="bg-white rounded-md border border-[#D3DAE4] p-10 text-center shadow-sm">
            <div className="w-20 h-20 bg-[#E2F2E8] rounded-full flex items-center justify-center mx-auto mb-6">
              <IconCheck className="w-10 h-10 text-[#1C6E3F]" />
            </div>
            <h2 className="font-serif font-semibold text-[28px] text-[#14213D] mb-3">
              Documents Submitted Successfully
            </h2>
            <p className="text-[15px] text-[#475472] max-w-[500px] mx-auto mb-8 leading-relaxed">
              Your application is now in the review phase. The Suvidha team will verify your documents and keep you updated on your dashboard.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 bg-[#0B3D74] text-white rounded font-medium text-[14px] hover:bg-[#092f5a] transition"
              >
                Edit Documents
              </button>
              <Link 
                href="/"
                className="px-6 py-2.5 bg-white text-[#0B3D74] border border-[#0B3D74] rounded font-medium text-[14px] hover:bg-[#F3F5F8] transition"
              >
                Go to Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Section title="Groom Documents">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload multiple label="Groom ID" info="Aadhaar Card, Voter ID, etc." value={form.groomId} onChange={(v) => updateField('groomId', v)} />
                <FileUpload multiple label="Groom Passport" value={form.groomPassport} onChange={(v) => updateField('groomPassport', v)} />
                <FileUpload multiple label="Groom Birth Certificate / Marksheet" info="Birth Certificate, 10th Marksheet, or both" value={form.groomBirthCertificateOrMarksheet} onChange={(v) => updateField('groomBirthCertificateOrMarksheet', v)} />
              </div>
            </Section>

            <Section title="Bride Documents">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload multiple label="Bride ID" info="Aadhaar Card, Voter ID, etc." value={form.brideId} onChange={(v) => updateField('brideId', v)} />
                <FileUpload multiple label="Bride Passport" value={form.bridePassport} onChange={(v) => updateField('bridePassport', v)} />
                <FileUpload multiple label="Bride Birth Certificate / Marksheet" info="Birth Certificate, 10th Marksheet, or both" value={form.brideBirthCertificateOrMarksheet} onChange={(v) => updateField('brideBirthCertificateOrMarksheet', v)} />
              </div>
            </Section>

            <Section title="Marriage Proof">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload label="Marriage Proof Photo" value={form.marriageProofPhoto} onChange={(v) => updateField('marriageProofPhoto', v)} />
                <FileUpload label="Couple Photo" value={form.marriageProofCoupleImage} onChange={(v) => updateField('marriageProofCoupleImage', v)} />
                <FileUpload label="Marriage Invitation Card" value={form.marriageProofInvitation} onChange={(v) => updateField('marriageProofInvitation', v)} />
              </div>
            </Section>

            <Section title="Religious Certificate (Optional)">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload label="Religious Certificate" info="If applicable (Sikh, Muslim, Christian, etc.)" value={form.religiousCertificateImage} onChange={(v) => updateField('religiousCertificateImage', v)} />
              </div>
            </Section>

            <Section title="Witness 1 Documents">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload label="Witness 1 Aadhar (Front)" value={form.witness1AadharFront} onChange={(v) => updateField('witness1AadharFront', v)} />
                <FileUpload label="Witness 1 Aadhar (Back)" value={form.witness1AadharBack} onChange={(v) => updateField('witness1AadharBack', v)} />
                <FileUpload label="Witness 1 PAN Card" value={form.witness1PanCardPhoto} onChange={(v) => updateField('witness1PanCardPhoto', v)} />
              </div>
            </Section>

            <Section title="Witness 2 Documents">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload label="Witness 2 Aadhar (Front)" value={form.witness2AadharFront} onChange={(v) => updateField('witness2AadharFront', v)} />
                <FileUpload label="Witness 2 Aadhar (Back)" value={form.witness2AadharBack} onChange={(v) => updateField('witness2AadharBack', v)} />
                <FileUpload label="Witness 2 PAN Card" value={form.witness2PanCardPhoto} onChange={(v) => updateField('witness2PanCardPhoto', v)} />
              </div>
            </Section>

            <Section title="Signatures">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload label="Groom Signature" value={form.signatureImageGroom} onChange={(v) => updateField('signatureImageGroom', v)} />
                <FileUpload label="Bride Signature" value={form.signatureImageBride} onChange={(v) => updateField('signatureImageBride', v)} />
                <FileUpload label="Witness 1 Signature" value={form.signatureImageWitness1} onChange={(v) => updateField('signatureImageWitness1', v)} />
                <FileUpload label="Witness 2 Signature" value={form.signatureImageWitness2} onChange={(v) => updateField('signatureImageWitness2', v)} />
              </div>
            </Section>

            <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-[#D3DAE4]">
              <Link href="/" className="px-6 py-3 font-medium text-[14px] text-[#475472] hover:text-[#14213D] transition">
                Cancel
              </Link>
              <button 
                type="submit"
                disabled={saving}
                className="px-8 py-3 bg-[#0B3D74] text-white rounded font-medium text-[15px] hover:bg-[#092f5a] transition disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {saving ? 'Saving...' : 'Submit Documents'}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}