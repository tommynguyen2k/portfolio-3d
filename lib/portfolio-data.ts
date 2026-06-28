export const PROFILE = {
  name: "Truong Nguyen",
  title: "Senior Frontend Developer",
  email: "truongnguyen1582000@gmail.com",
  phone: "+84 383 393 752",
  location: "Da Nang, Vietnam",
  links: {
    linkedin: "https://www.linkedin.com/in/tommynguyen2k/",
    github: "https://github.com/tommynguyen2k",
    website: "https://truongnguyen.cv/",
  },
  summary:
    "Results-driven Senior Frontend Developer with 5+ years building scalable, high-performance web applications using React, Next.js, Angular, Vue.js and TypeScript. Specialised in architecting reusable component libraries, leading frontend teams, and delivering accessible, optimised experiences for e-commerce, government and AI-driven enterprise products.",
  stats: [
    { n: "5+", l: "Years experience" },
    { n: "6+", l: "Enterprise projects" },
    { n: "3", l: "Frameworks mastered" },
    { n: "FE", l: "Team leader" },
  ],
};

export const EXPERIENCE = [
  {
    when: "Dec 2024 — Present",
    role: "Senior Frontend Developer",
    company: "SmartDev LLC",
    points: [
      "Architected multi-step submission workflows using Next.js 15 and JSON Forms.",
      "Schema-driven form entry with conditional logic and real-time previews — cut submission errors ~30%.",
      "Led FE architecture for internal finance tools; RBAC with Context API + JWT.",
      "On-premise deployment via Nginx reverse proxy + SSL with Azure integration.",
    ],
  },
  {
    when: "Dec 2023 — Dec 2024",
    role: "Frontend Developer — FE Leader",
    company: "EM AND AI",
    points: [
      "Led frontend for an AI Virtual Agent program using NLP and machine learning.",
      "Built drag-and-drop flow for script building to ensure consistency.",
      "Designed custom call-report charts with Chart.js; built a reusable component library.",
    ],
  },
  {
    when: "Mar 2021 — Dec 2023",
    role: "Frontend Developer",
    company: "RikkeiSoft",
    points: [
      "Delivered projects for international clients — 123RF (Malaysia), FMS (Singapore).",
      "Advanced image editing (cropping, filters, DPI) using Canvas.",
      "Established scalable folder structures, routing guards, Axios configs; mentored & ran code reviews.",
    ],
  },
];

export const PROJECTS = [
  { name: "Green Climate Fund (GCF)", desc: "Enterprise platform for climate finance proposal management — concept notes, funding proposals, budgets, impact metrics.", tech: ["Next.js 15", "JSON Forms", "React Hook Form", "Zod", "Redux", "shadcn/ui"] },
  { name: "Long Son Petrochemicals", desc: "Internal finance tool replacing Excel for material pricing and invoices, with RBAC and Azure deployment.", tech: ["ReactJS", "React-Query", "Context API", "Ant Design", "Tailwind", "Azure"] },
  { name: "Virtual Agent", desc: "AI program using NLP and machine learning to interact with users and provide customer service.", tech: ["Angular 2", "RxJS", "PrimeNG", "Chart.js"] },
  { name: "123RF", desc: "Stock media platform providing royalty-free images, videos and audio, with advanced Canvas image editing.", tech: ["ReactJS", "Context API", "Ant Design", "Canvas"] },
  { name: "FMS — Singapore", desc: "Government platform to manage resident data across high-rise buildings.", tech: ["ReactJS", "Context API", "Ant Design", "SCSS Modules"] },
];

export const SKILLS: Record<string, string[]> = {
  Core: ["JavaScript (ES6+)", "TypeScript", "React 18+", "Next.js", "Angular", "Vue.js"],
  "Styling & UI": ["Tailwind CSS", "Material UI", "Ant Design", "shadcn/ui"],
  "State & Data": ["Redux Toolkit", "Zustand", "React Query", "Context API"],
  "Backend & DB": ["Express.js", "Nest.js", "MongoDB", "PostgreSQL"],
  Tooling: ["Vite", "pnpm/yarn/npm", "Git / GitHub / GitLab", "GitHub Actions / CI-CD", "Jest / Vitest"],
  Leadership: ["Mentoring", "Team Leadership", "Code Reviews", "Technical Docs", "UI/UX Design"],
};
