// All content comes from Faisal's CV. Edit this file to update the site.
export const P = {
  name: "Faisal Raza",
  initials: "FR",
  role: "Accountant & Bookkeeper",
  tagline: "Accounting, sales and operations professional",
  email: "faisalraza24434@gmail.com",
  phone: "03044407060",
  phoneHref: "tel:+923044407060",
  location: "Lahore, Pakistan",
  photo: "/faisal.png",
  cv: "/Faisal_Raza_CV.pdf", // replace public/Faisal_Raza_CV.pdf to update your CV
  summary:
    "Accounting, bookkeeping, sales and operations professional with 8+ years of combined experience across accounting support, recordkeeping, sales coordination and office management.",
  objective: "Open to Accountant, Bookkeeper and Accounts Support roles, including remote and work-from-home accounting.",
  socials: [] as { label: string; href: string }[], // add e.g. { label: "LinkedIn", href: "https://..." }
};

export const specialties = ["Bookkeeping", "Accounts payable & receivable", "Bank reconciliation", "SAP Business One", "Zoho Books", "Hisab PK", "Excel reporting", "Sales coordination"];

export const experience = [
  { role: "Internal Auditor and Accountant", org: "Bookkeeping Outsource, Lahore", when: "Jun 2025 – Present",
    points: ["Support accounting and bookkeeping work for individuals and business clients.", "Assist with financial reporting, ledger accounting, bank reconciliation and organized recordkeeping."] },
  { role: "Accounts Executive", org: "Miles Textiles Pvt, Sundar Industrial Estate", when: "6 months",
    points: ["Managed day-to-day bookkeeping and maintained accurate records.", "Prepared bank and account reconciliations, investigated discrepancies and supported financial reporting.", "Handled AP/AR, invoice processing and payment follow-ups.", "Supported internal and external audits through organized documentation."] },
  { role: "Sr. Sales Marketing Executive", org: "Prepac Engineering Pvt Ltd, Attari Industrial, Lahore", when: "May 2022 – Jun 2024",
    points: ["Used SAP Business One for sales quotations, orders and invoices.", "Reconciled customer and supplier accounts, monitored payments and resolved discrepancies.", "Handled business queries by email and phone, supporting repeat business."] },
  { role: "Sr. Sales Marketing Coordinator", org: "Parley Cosmetics (Khyber Chemical), Lahore", when: "Jul 2019 – May 2020",
    points: ["Led sales coordination using ERP systems and advanced spreadsheets.", "Coordinated with ZSM, ASM, SM and SO through calls and meetings.", "Monitored target achievement and prepared reports."] },
  { role: "Computer Office Management and Teacher", org: "Town Public High School, Lahore", when: "Mar 2014 – Jul 2020",
    points: ["Operated and maintained school computer systems and equipment.", "Managed student data, attendance records and examination results.", "Provided technical support and maintained data security and backups."] },
];

export const education = [
  { title: "B.Com", place: "University of the Punjab", when: "2017" },
  { title: "I.Com", place: "BISE Lahore", when: "2012" },
  { title: "Digital Marketing & Freelancing", place: "DigiSkills, Virtual University", when: "2024" },
];
export const training = ["Computer Application & Database Management", "Computer Office Management"];

export const skills = [
  { cat: "Accounting", icon: "calc", items: ["Bookkeeping & financial recordkeeping", "Accounts payable / receivable", "Sales & purchase invoices", "Bank and account reconciliation", "Ledger maintenance & payment follow-ups"] },
  { cat: "Systems & tools", icon: "db", items: ["SAP Business One", "Zoho Books", "Hisab PK", "MS Office & Excel", "ERP systems"] },
  { cat: "Reporting", icon: "sheet", items: ["Monthly summaries", "Excel reporting", "Documentation & audit support"] },
  { cat: "Sales & operations", icon: "users", items: ["Sales coordination", "Customer communication", "Data entry & office operations"] },
];

export const works = [
  { title: "Small Business Accounting & Bookkeeping System", cat: "Mock case study", big: true,
    desc: "An independent practice project, not client work. A structured Excel / Google Sheets workflow tracking daily sales, purchases, expenses, receivables and payables.",
    tags: ["Excel", "Google Sheets", "AP/AR"] },
  { title: "Status tracking", cat: "Mock case study", desc: "Customer, invoice, payment and order statuses mapped so outstanding items are easy to follow up.", tags: ["Receivables"] },
  { title: "Monthly reporting view", cat: "Mock case study", desc: "Activity totals, unpaid balances, reconciliation notes and operational updates in one summary.", tags: ["Reporting"] },
  { title: "Records to follow-ups", cat: "Mock case study", desc: "A simple process linking business records, customer follow-ups and management summaries for small shops and traders.", tags: ["Process"] },
];

export const stats = [
  { n: 8, suffix: "+", label: "Years of combined experience" },
  { n: 5, suffix: "", label: "Organizations worked with" },
  { n: 4, suffix: "", label: "Accounting tools: SAP B1, Zoho Books, Hisab PK, Excel" },
  { n: 3, suffix: "", label: "Degrees and certificates" },
];

export const nav = ["Home", "About", "Experience", "Education", "Skills", "Portfolio", "Contact"];
