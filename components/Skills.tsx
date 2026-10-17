// src/components/Skills.tsx
import { Monitor, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor size={20} />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: ["Node.js", "REST APIs", "Authentication", "Server-Side Development"],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench size={20} />,
    skills: ["Git", "GitHub", "VS Code", "pnpm", "Docker", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-midnight-border/50 bg-midnight-soft/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-wider text-electric-bright uppercase">
            Technical Skills
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with.
          </h3>
          <p className="mt-4 text-gray-400">
            A curated list of the technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <div 
              key={i} 
              className="rounded-2xl border border-midnight-border bg-midnight p-6 transition-all hover:border-electric/40"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-midnight-border pb-4">
                <div className="text-electric-bright">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-gray-100">{category.title}</h4>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-electric/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}