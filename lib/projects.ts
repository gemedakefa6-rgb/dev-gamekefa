// src/lib/projects.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "university-management",
    title: "University Management System",
    description: "A comprehensive web application designed to streamline academic and administrative tasks for students, faculty, and administrators.",
    features: [
      "Role-based access control",
      "Student enrollment & grading",
      "Course scheduling engine",
      "Automated fee management",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/university-system", // TODO: Replace
    liveUrl: "#", // TODO: Replace
    isPlaceholder: true,
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Web Application",
    description: "A full-stack online store featuring a seamless shopping experience, secure checkout flow, and a powerful admin dashboard.",
    features: [
      "Stripe payment integration",
      "Dynamic cart & inventory",
      "User authentication & profiles",
      "Admin order management",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    githubUrl: "https://github.com/your-username/ecommerce-app", // TODO: Replace
    liveUrl: "#", // TODO: Replace
    isPlaceholder: true,
  },
  {
    id: "task-dashboard",
    title: "Task Management Dashboard",
    description: "A collaborative productivity tool that helps teams organize, track, and manage their daily workflows with real-time updates.",
    features: [
      "Drag-and-drop kanban board",
      "Real-time task updates",
      "Team collaboration tools",
      "Progress analytics & reporting",
    ],
    tech: ["Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/task-dashboard", // TODO: Replace
    liveUrl: "#", // TODO: Replace
    isPlaceholder: true,
  },
];