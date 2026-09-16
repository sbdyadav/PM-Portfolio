export type CompanyKey = "udaan" | "zepto" | "medikabazaar" | "eatclub";

export type Company = {
  key: CompanyKey;
  name: string;
  sector: string;
  role: string;
  dates: string;
  bullets: string[];
  logo: string;
  /** cap height in px, per the handoff */
  cap: number;
};

export const companies: Company[] = [
  {
    key: "udaan",
    name: "Udaan",
    sector: "Udaan.com · B2B marketplace · Bangalore",
    role: "Program Lead, Logistics & Trust",
    dates: "Jul 2021 — Feb 2024",
    bullets: [
      "Found last-mile fraud behind ₹2.5Cr/month in RTO losses by analysing 2M+ shipment records.",
      "Built the business case for tamper-proof tracking, proved it in pilot, rolled it out across 14 warehouses.",
      "Monthly RTO losses fell from ₹2.5Cr to ₹30L — ₹2.2Cr a month recovered.",
    ],
    logo: "/logos/udaan.png",
    cap: 20,
  },
  {
    key: "zepto",
    name: "Zepto",
    sector: "Zepto · Quick commerce · Gurgaon",
    role: "Process Excellence Manager, Product Operations",
    dates: "Jul 2024 — Jan 2025",
    bullets: [
      "Led end-to-end WMS rollout across 50 dark stores; order accuracy 97.2% to 98.8%, picker productivity up 18%.",
      "Drove adoption across 200+ users through UAT and workflow validation without disrupting live orders.",
      "Rollout playbooks took 18 new dark stores to 100% Day-1 SLA.",
    ],
    logo: "/logos/zepto.png",
    cap: 18,
  },
  {
    key: "medikabazaar",
    name: "Medikabazaar",
    sector: "Medikabazaar · Healthtech · Mumbai",
    role: "Program Manager, Product Marketplace",
    dates: "Jan 2025 — Jul 2026",
    bullets: [
      "Took a 0-to-1 ophthalmology category to ₹1.28Cr GMV by fixing seller financing, not supply.",
      "Onboarded 12 OEM partners and 200+ SKUs against a prioritised category roadmap.",
      "Shipped an AI lead-qualification workflow into CRM, cutting unqualified enquiries 80%.",
    ],
    logo: "/logos/medikabazaar.png",
    cap: 16,
  },
  {
    key: "eatclub",
    name: "EatClub",
    sector: "EatClub · D2C food commerce · Bangalore",
    role: "City Manager, Growth & Operations",
    dates: "Jan 2018 — Sep 2020",
    bullets: [
      "Scaled city revenue from ₹4Cr to ₹5Cr a month by launching a new brand across 33 outlets.",
      "Grew single-outlet revenue from ₹12L to ₹23L a month within six months.",
      "Automated demand forecasting across 33 outlets, cutting food wastage from 9% to 8% of revenue.",
    ],
    logo: "/logos/eatclub.png",
    cap: 24,
  },
];
