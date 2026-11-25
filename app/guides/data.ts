// app/guides/data.ts
export type Guide = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: 'hindu-marriage-act-or-special-marriage-act',
    tag: 'Marriage',
    title: 'Hindu Marriage Act or Special Marriage Act: which one applies to you?',
    excerpt:
      'Two laws, two very different processes. Here is how to tell which one you register under, and what each one means in practice.',
    date: '28 Sep 2026',
    readTime: '6 min read',
    body: [
      'If you are planning to register your marriage in India, one of the first questions you will face is which law applies to you. The two most common routes are the Hindu Marriage Act, 1955 and the Special Marriage Act, 1954. They sound similar, but the process, the documents and the timeline can be very different.',
      'The Hindu Marriage Act applies to Hindus, Buddhists, Jains and Sikhs. Under this Act, you register the marriage with the local marriage registrar where the marriage took place or where either party has resided for at least six months. The process is usually faster, and there is no mandatory public notice period.',
      'The Special Marriage Act is a secular law. It applies to any two people, regardless of religion, who want to register their marriage under a civil code. This Act requires a 30-day public notice at the registrar\'s office, during which anyone can object on specific legal grounds. Because of the notice period, the timeline is longer.',
      'In practice, most couples who married under Hindu rites register under the Hindu Marriage Act because it is faster and requires fewer steps. Couples who are interfaith, or who married without religious ceremony, usually register under the Special Marriage Act.',
      'The documents required are broadly similar: age proof, address proof, photographs, and in the case of the Hindu Marriage Act, proof of the wedding ceremony such as a wedding invitation or photographs. Both routes require witnesses — usually two — to sign the application.',
      'If you are unsure which route applies to you, the safest approach is to speak to us before filing. Filing under the wrong Act is one of the most common reasons applications are rejected, and it costs weeks to correct.',
    ],
  },
  {
    slug: 'documents-needed-for-marriage-registration',
    tag: 'Documents',
    title: 'Documents you need for marriage registration: a complete checklist',
    excerpt:
      'Age proof, address proof, affidavits, photos and witnesses. What registrars usually ask for, and the mistakes that cause rejections.',
    date: '30 Sep 2026',
    readTime: '4 min read',
    body: [
      'Document requirements for marriage registration vary slightly from state to state, but the core list is consistent across most registrars in India. Here is what you will usually need.',
      'For both applicants: a birth certificate or Class 10 marksheet as age proof (the legal minimum is 21 for men and 18 for women); an Aadhaar card or passport as address proof; and four to six passport-sized photographs.',
      'For the wedding: a wedding invitation card, or photographs from the ceremony, or a certificate from the priest who solemnised it. Registrars accept one or more of these depending on the state.',
      'Affidavits: most registrars ask for a signed affidavit from each applicant, declaring age, marital status (never married, widowed, or divorced) and consent to the marriage. Some states also ask for an affidavit from the witnesses.',
      'Witnesses: two witnesses are required for the Hindu Marriage Act; three for the Special Marriage Act. Witnesses must bring their own ID proof and be present at the appointment.',
      'Common mistakes we see: name spelling mismatches between Aadhaar and the wedding invitation; expired address proof; witnesses not carrying their own ID; and affidavits signed on plain paper instead of stamp paper where required. All of these cause delays that are easy to avoid.',
      'If you send us your documents before filing, we check each one against your specific registrar\'s requirements so you do not get turned away at the appointment.',
    ],
  },
  {
    slug: 'special-marriage-act-30-day-notice',
    tag: 'Know your rights',
    title: 'The 30-day notice under the Special Marriage Act, explained',
    excerpt:
      'What the notice period is, where it is displayed, who can object and on what grounds, and what happens after 30 days.',
    date: '2 Oct 2026',
    readTime: '5 min read',
    body: [
      'If you are registering your marriage under the Special Marriage Act, 1954, the 30-day notice period is the step most people find confusing. Here is what actually happens.',
      'When you file your application, the marriage officer records it in a public register and displays a notice on the office noticeboard for 30 days. The notice lists your names and the date you intend to marry.',
      'The purpose of the notice is to allow anyone with a legal objection to raise it. Under Section 7 of the Act, an objection can be made only on specific grounds: that the marriage would violate one of the conditions in Section 4 of the Act, such as age, existing marriage, or prohibited relationship.',
      'In practice, objections are rare. Most applications go through without any objection. If an objection is filed, the marriage officer investigates and decides whether to proceed or reject the application. You have the right to be heard during that process.',
      'After 30 days, if no objection is received, the marriage is solemnised at the registrar\'s office. Both parties and three witnesses must be present. The certificate is usually issued the same day or within a few working days.',
      'One clarification: the 30-day notice is not a cooling-off period. You can use the time to prepare documents and arrange witnesses. The actual registration appointment happens after the notice period ends.',
    ],
  },
  {
    slug: 'how-to-tell-if-your-documents-will-be-rejected',
    tag: 'Documents',
    title: 'How to tell if your documents will be rejected before you file',
    excerpt:
      'Five of the most common reasons marriage registration applications are rejected, and how to catch them before you submit.',
    date: '4 Oct 2026',
    readTime: '3 min read',
    body: [
      'Most rejected marriage registration applications fail for one of five reasons. All of them are avoidable if you check before you file.',
      'One: name mismatches. Your name on Aadhaar, on the wedding invitation and on the affidavit must be identical. Even a missing middle initial can cause a rejection.',
      'Two: expired address proof. If your Aadhaar has an old address, or your rent agreement has expired, the registrar may reject the application. Carry two address proofs if you are unsure.',
      'Three: missing witness IDs. Both witnesses must bring their own photo ID. It is common for one witness to forget, which delays the whole appointment.',
      'Four: affidavits on the wrong paper. Some states require affidavits on stamp paper of a specific value. Plain-paper affidavits are rejected.',
      'Five: photographs that do not meet the specification. Registrars often require a specific size, background, or number of photographs. Check the checklist for your specific office.',
      'The simplest fix is a pre-check: send us your documents before your appointment and we will tell you exactly what needs fixing. It takes ten minutes and saves weeks of delay.',
    ],
  },
  {
    slug: 'what-suvidha-does-and-does-not-do',
    tag: 'About Suvidha',
    title: 'What Suvidha does, and what it does not do',
    excerpt:
      'A private service provider is not a government office. Here is exactly where our work ends and the registrar\'s work begins.',
    date: '6 Oct 2026',
    readTime: '4 min read',
    body: [
      'Suvidha is a private service provider. We help you prepare and file government applications, but we are not a government office and we cannot approve or reject an application.',
      'What we do: fill forms, draft affidavits, check documents before filing, book registrar appointments, track your application and keep you updated by SMS and WhatsApp.',
      'What we do not do: we cannot reduce government fees, speed up the registrar\'s decisions, or guarantee that an application will be approved. Only the competent authority — for example, the marriage registrar — can do that.',
      'What you can always do yourself: every service page links to the official government portal, and you can always file directly with the registrar and pay only the government fee. Our service fee is for the preparation work.',
      'If you ever receive a call asking for an OTP, a PIN or a payment on a link that is not suvidha.services, it is not from us. We never ask for OTPs or bank PINs on a call.',
      'If you have a question about what we do or do not do, write to us at info@suvidha.services and we will reply within one working day.',
    ],
  },
  {
    slug: 'marriage-registration-fees-explained',
    tag: 'Fees & payments',
    title: 'Marriage registration fees: what you pay, and to whom',
    excerpt:
      'Government fee, service fee, GST — here is the full breakdown, in plain language.',
    date: '6 Oct 2026',
    readTime: '3 min read',
    body: [
      'Marriage registration involves two separate payments. Understanding both makes the process much less confusing.',
      'The government fee is set by your state and paid to the registrar. It varies from state to state and is usually between ₹100 and ₹1,000. You get a government receipt for this amount.',
      'Our service fee is what Suvidha charges for the work: forms, affidavits, document checks, appointment booking and tracking. It is shown before you pay, and it is separate from the government fee.',
      'GST is charged on our service fee at 18%. It is not charged on the government fee.',
      'You can always choose to file directly with the registrar and pay only the government fee. Our service fee is optional, and we say so on every service page.',
      'If you have questions about a specific amount, write to us with your state and the service you are applying for, and we will send you the exact breakdown.',
    ],
  },
];