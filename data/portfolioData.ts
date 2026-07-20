export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Open Source";
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accentGradient: string;
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: number; // 0-100
    icon: string;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Work" | "Education";
  description: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const personalData = {
  name: "Rituraj Srivastava",
  role: "Full Stack Developer & UI/UX Craftsman",
  typewriterRoles: [
    "Full Stack Web Architect",
    "Next.js & React Specialist",
    "Glassmorphism UI Designer",
    "Node.js & Cloud Developer",
    "Open Source Contributor",
  ],
  tagline:
    "Architecting ultra-fast, visually captivating web apps with modern web tech, glassmorphic aesthetics, and seamless user experiences.",
  bio: `I am a passionate Full Stack Developer with 3+ years of hands-on experience designing and delivering scalable web applications, sleek user interfaces, and robust backend microservices. I specialize in Next.js, React, TypeScript, Node.js, and modern CSS frameworks like Tailwind CSS.

Driven by design excellence and performance engineering, I turn complex problems into clean, high-impact digital experiences. Whether crafting a glassmorphic design system or optimizing database queries, I prioritize speed, accessibility, and user delight.`,
  location: "New Delhi / Remote",
  email: "riturajswaroop@gmail.com",
  phone: "6386636383",
  availability: "Available for Full-time Roles & Projects",
  socialLinks: {
    github: "https://github.com/riturajswaroop",
    linkedin: "https://linkedin.com/in/riturajswaroop",
    twitter: "https://twitter.com/riturajswaroop",
    email: "mailto:riturajswaroop@gmail.com",
  },
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Tech Stacks", value: "15+" },
    { label: "Code Commits", value: "1.2k+" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Excellence",
    items: [
      { name: "React.js", level: 95, icon: "Code2", badge: "Expert" },
      { name: "Next.js 14/15", level: 92, icon: "Layers", badge: "Expert" },
      { name: "TypeScript", level: 90, icon: "FileCode2", badge: "Advanced" },
      { name: "Tailwind CSS", level: 96, icon: "Palette", badge: "Expert" },
      { name: "Framer Motion", level: 88, icon: "Sparkles", badge: "Advanced" },
      { name: "HTML5 / CSS3", level: 98, icon: "Globe", badge: "Master" },
      { name: "Redux / Zustand", level: 85, icon: "Boxes", badge: "Advanced" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", level: 90, icon: "Server", badge: "Expert" },
      { name: "Express.js", level: 88, icon: "Cpu", badge: "Advanced" },
      { name: "REST APIs & GraphQL", level: 92, icon: "Workflow", badge: "Expert" },
      { name: "Python / FastAPI", level: 78, icon: "Code", badge: "Intermediate" },
      { name: "WebSockets / Socket.io", level: 84, icon: "Radio", badge: "Advanced" },
      { name: "JWT & NextAuth", level: 89, icon: "ShieldCheck", badge: "Advanced" },
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", level: 88, icon: "Database", badge: "Advanced" },
      { name: "MongoDB", level: 85, icon: "HardDrive", badge: "Advanced" },
      { name: "Redis", level: 82, icon: "Zap", badge: "Intermediate" },
      { name: "Prisma ORM", level: 90, icon: "Binary", badge: "Expert" },
      { name: "Firebase / Supabase", level: 86, icon: "Flame", badge: "Advanced" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", level: 94, icon: "GitBranch", badge: "Expert" },
      { name: "Docker", level: 80, icon: "Container", badge: "Intermediate" },
      { name: "AWS (S3, EC2)", level: 75, icon: "Cloud", badge: "Intermediate" },
      { name: "Vercel / Netlify", level: 95, icon: "Rocket", badge: "Expert" },
      { name: "Jest & Cypress", level: 82, icon: "CheckCircle2", badge: "Intermediate" },
      { name: "Postman / Swagger", level: 90, icon: "Terminal", badge: "Advanced" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "nexus-ai",
    title: "Nexus AI Workspace",
    subtitle: "AI-Powered Intelligence & Code Workspace",
    description:
      "A next-generation AI assistant workspace featuring multi-modal conversations, real-time code analysis, doc parsing, and dark glassmorphism UI.",
    category: "Full Stack",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenAI API", "Prisma", "PostgreSQL"],
    liveUrl: "https://nexus-ai-workspace.vercel.app",
    githubUrl: "https://github.com/riturajswaroop/nexus-ai-workspace",
    featured: true,
    accentGradient: "from-orange-500 to-red-600",
    metrics: "10k+ Active Users",
  },
  {
    id: "paysphere",
    title: "PaySphere Fintech",
    subtitle: "Payment Gateway & Analytics Dashboard",
    description:
      "A ultra-fast financial dashboard for managing multi-currency merchant accounts, real-time transaction graphs, and automated payout scheduling.",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "Redis", "Recharts"],
    liveUrl: "https://paysphere-fintech.vercel.app",
    githubUrl: "https://github.com/riturajswaroop/paysphere-fintech",
    featured: true,
    accentGradient: "from-purple-500 to-indigo-600",
    metrics: "$2M+ Processed",
  },
  {
    id: "devmetrics",
    title: "DevMetrics SaaS",
    subtitle: "Realtime Server & Application Monitoring",
    description:
      "Distributed telemetry tool monitoring server health, error stacktraces, microservice latency, and memory spikes with instant alert webhooks.",
    category: "Backend",
    tags: ["TypeScript", "Next.js", "Docker", "WebSockets", "InfluxDB", "Tailwind"],
    liveUrl: "https://devmetrics-telemetry.vercel.app",
    githubUrl: "https://github.com/riturajswaroop/devmetrics-saas",
    featured: true,
    accentGradient: "from-blue-500 to-teal-500",
    metrics: "99.99% Uptime Tracked",
  },
  {
    id: "glasscraft-ui",
    title: "GlassCraft Component Library",
    subtitle: "Modern Frosted Glass Design System",
    description:
      "An open-source React component library providing accessible, customizable glassmorphic components, blur presets, and dark mode variants.",
    category: "Frontend",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion", "Storybook"],
    liveUrl: "https://glasscraft-ui.vercel.app",
    githubUrl: "https://github.com/riturajswaroop/glasscraft-ui",
    featured: false,
    accentGradient: "from-amber-500 to-pink-600",
    metrics: "500+ GitHub Stars",
  },
  {
    id: "cloudsync",
    title: "CloudSync Vault",
    subtitle: "Encrypted Cloud File Sharing Platform",
    description:
      "Secure end-to-end encrypted file sharing app with expiring link controls, instant previewing for 50+ file types, and drag-and-drop uploads.",
    category: "Full Stack",
    tags: ["Next.js", "AWS S3", "GraphQL", "Tailwind CSS", "Zustand"],
    liveUrl: "https://cloudsync-vault.vercel.app",
    githubUrl: "https://github.com/riturajswaroop/cloudsync-vault",
    featured: false,
    accentGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "shoppulse",
    title: "ShopPulse Platform",
    subtitle: "High-Performance Headless E-Commerce",
    description:
      "Modular e-commerce store with sub-second page loads, instant search filtering, cart state management, and integrated Stripe Checkout.",
    category: "Frontend",
    tags: ["Next.js", "Stripe API", "Tailwind CSS", "Zustand", "PostgreSQL"],
    liveUrl: "https://shoppulse-store.vercel.app",
    githubUrl: "https://github.com/riturajswaroop/shoppulse-platform",
    featured: false,
    accentGradient: "from-emerald-500 to-teal-600",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    location: "New Delhi, IN",
    period: "2024 — Present",
    type: "Work",
    description: [
      "Led development of core enterprise web applications using Next.js 14 App Router and TypeScript.",
      "Architected backend microservices using Node.js and PostgreSQL, improving query performance by 40%.",
      "Mentored junior developers and instituted code review standards across a team of 8 engineers.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS"],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "CodeCraft Labs",
    location: "Remote",
    period: "2023 — 2024",
    type: "Work",
    description: [
      "Designed and developed client-facing SaaS dashboards with complex real-time charts and data tables.",
      "Integrated third-party APIs (Stripe, OpenAI, SendGrid) and set up automated CI/CD pipelines on Vercel.",
      "Collaborated closely with product designers to implement pixel-perfect, responsive Glassmorphic layouts.",
    ],
    skills: ["React", "Express.js", "MongoDB", "Redux", "Tailwind CSS", "Docker"],
  },
  {
    id: "exp-3",
    role: "Frontend Engineer Intern",
    company: "WebPulse Studio",
    location: "Noida, IN",
    period: "2022 — 2023",
    type: "Work",
    description: [
      "Built responsive, accessible web pages using HTML5, CSS3, JavaScript (ES6+), and React.",
      "Optimized Web Vitals score from 68 to 94 through lazy loading images, code splitting, and asset compression.",
    ],
    skills: ["JavaScript", "React", "CSS3 / Sass", "Git", "Figma"],
  },
  {
    id: "exp-4",
    role: "B.Tech in Computer Science & Engineering",
    company: "APJ Abdul Kalam Technical University",
    location: "Uttar Pradesh, IN",
    period: "2020 — 2024",
    type: "Education",
    description: [
      "Graduated with First Class Honors (8.6 CGPA).",
      "Focused on Data Structures, Algorithms, Database Management Systems, and Software Engineering.",
      "Served as Vice President of the College Technical & Coding Club.",
    ],
    skills: ["Data Structures", "Algorithms", "DBMS", "Software Engineering", "OOP"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Rituraj transformed our web application with unbelievable speed and design flair. His eye for modern aesthetics and deep technical knowledge made our project an absolute triumph.",
    author: "Aarav Sharma",
    role: "Product Lead",
    company: "TechNova Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "test-2",
    quote:
      "Working with Rituraj was effortless. He delivers clean, well-tested code and turned complex requirements into an intuitive, beautiful glassmorphism interface.",
    author: "Priya Patel",
    role: "Co-Founder & CEO",
    company: "DevPulse Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];
