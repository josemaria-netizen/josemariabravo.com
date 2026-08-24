export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export const roles: Role[] = [
  {
    company: "Crosspoint",
    title: "Operations & Finance · Product & Data",
    period: "Jul 2025 – Present",
    location: "Mexico City (Hybrid)",
    summary:
      "Cross-border FX and money-transmission company. I own operations and finance while building the internal data, product, and compliance systems the business runs on.",
    bullets: [
      "Day-to-day operational contact for clients, the commercial team, liquidity providers, and correspondent banks — resolving trade and payment exceptions with accuracy and urgency.",
      "Built the production analytics dashboard from scratch (Next.js, Postgres, Vercel): gross margin in USD, corridor profitability, broker breakdowns, and MoM/QoQ/YoY KPIs leadership relies on.",
      "Designed and built a config-driven, risk-based AML/CFT monitoring engine (Python) with automatic alerting and review; authored the CNBV/UIF regulatory framework behind it.",
      "Shipped institutional web-app features (React/TypeScript) and created the company's governed knowledge base — 11 domains, with sensitivity tiers controlling what internal AI tools may disclose.",
      "Coding day-to-day in Python and SQL; heavy use of AI-assisted development to move from problem to shipped product quickly.",
    ],
  },
  {
    company: "ALCOBA, S.A.P.I. de C.V.",
    title: "Founder & General Manager",
    period: "2022 – Present",
    location: "Mexico City",
    summary: "Founded and run a real-estate management company end to end.",
    bullets: [
      "Own daily operations, finance, business development, and client acquisition across a ~14M MXN owned portfolio and 18 apartments under management for third-party owners.",
      "Developed the strategic plan and market analysis; identify acquisition and growth opportunities.",
      "Manage vendors and negotiate commercial terms; built the client pipeline from zero.",
    ],
  },
  {
    company: "PRÓXIMA",
    title: "Business Development Director · Senior Sales Associate",
    period: "2021 – 2022",
    location: "Mexico City",
    bullets: [
      "Recruited, trained, and led a lead-generation team (300 leads in two months).",
      "Drove business development and negotiated sponsorship deals across three states.",
      "Managed key-client relationships and stakeholder communication for new accounts.",
    ],
  },
  {
    company: "LEDLUX, S.A. de C.V.",
    title: "Project Supervisor",
    period: "2019 – 2021",
    location: "Mexico City",
    summary: "Renewable-energy firm.",
    bullets: [
      "Planned and executed solar-carport installations across six Mexican airports (Tijuana, Los Mochis, Bajío, La Paz, Mexicali, Hermosillo).",
      "Broke a complex, multi-site rollout into executable workstreams and coordinated on-site delivery.",
    ],
  },
  {
    company: "ICA Fluor",
    title: "Process Engineer",
    period: "2017 – 2019",
    location: "Mexico City",
    summary: "$1.2B engineering & construction firm.",
    bullets: [
      "Supported the design and implementation of a process-plant revamp at PEMEX's Tula refinery — direct Oil & Gas sector exposure.",
      "Structured, data-driven problem-solving in a large, regulated industrial environment.",
    ],
  },
];

export const education = [
  {
    school: "Universidad Anáhuac",
    degree: "B.B.A. in Business Management",
    period: "2023",
    note: "Prior Chemical Engineering coursework (2019 – 2021).",
  },
  {
    school: "Cornell University (eCornell)",
    degree: "Project Management Certificate",
    period: "2021",
  },
];
