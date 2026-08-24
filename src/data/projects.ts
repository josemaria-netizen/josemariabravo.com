// Professional builds that live in private/company repositories.
// Described, not linked — client and confidential details stay out.
export interface ProfessionalBuild {
  title: string;
  context: string;
  description: string;
  outcome: string;
  stack: string[];
}

export const professionalBuilds: ProfessionalBuild[] = [
  {
    title: "FX operations & margin analytics dashboard",
    context: "Cross-border payments company",
    description:
      "Production analytics platform leadership runs on: USD gross margin, corridor profitability, broker breakdowns, and MoM/QoQ/YoY KPIs. Built from scratch and deployed to production.",
    outcome:
      "In production as leadership's daily source of truth for margin and corridor decisions.",
    stack: ["Next.js", "PostgreSQL", "Vercel"],
  },
  {
    title: "Risk-based AML/CFT monitoring engine",
    context: "Regulated money transmitter (CNBV/UIF)",
    description:
      "Config-driven transaction-monitoring engine with a risk-based client model, automatic alerting, and analyst review flow. I also authored the regulatory framework behind it.",
    outcome:
      "Runs the transaction-monitoring program of a CNBV-regulated money transmitter.",
    stack: ["Python", "Event-sourced design"],
  },
  {
    title: "Governed company knowledge base",
    context: "Internal AI enablement",
    description:
      "An 11-domain operational knowledge base with sensitivity tiers that control what internal AI tools may disclose — SOPs, regulatory obligations, and institutional memory as versioned markdown.",
    outcome:
      "Became the company's operations manual, published to staff and governing internal AI disclosure.",
    stack: ["Markdown", "AI governance", "Google Workspace publishing"],
  },
  {
    title: "ALCOBA — real-estate management company",
    context: "Founder & General Manager",
    description:
      "Not a code project: a company I founded and run end to end — ~14M MXN owned portfolio plus 18 apartments under management for third-party owners.",
    outcome:
      "Operating since 2022; the third-party management book was built from zero.",
    stack: ["Operations", "Finance", "Business development"],
  },
];
