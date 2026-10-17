// src/components/Experience.tsx
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    period: "2022 - Present",
    title: "Full-Stack Web Developer",
    subtitle: "Independent Projects & Freelance",
    description: "Designed and deployed scalable full-stack applications. Focused on building responsive frontend interfaces and robust backend architectures.",
    achievements: [
      "Built and maintained 10+ web applications using Next.js and React.",
      "Designed relational and NoSQL databases for high-performance data retrieval.",
      "Implemented secure REST APIs and authentication flows.",
    ],
  },
  {
    period: "2020 - 2022",
    title: "Frontend Developer",
    subtitle: "Project-Based Experience",
    description: "Specialized in translating complex UI/UX designs into pixel-perfect, interactive web interfaces.",
    achievements: [
      "Developed responsive layouts using modern CSS and Tailwind.",
      "Optimized web performance, reducing load times significantly.",
      "Collaborated on API integration and state management.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-midnight-border/50 bg-midnight-soft/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-wider text-electric-bright uppercase">
            Experience
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My 4-Year Development Journey.
          </h3>
          <p className="mt-4 text-gray-400">
            A timeline of my professional growth, technical milestones, and key contributions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-midnight-border pl-8 ml-3 md:ml-6">
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 last:mb-0 relative">
              
              {/* Timeline Dot */}
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-midnight border-2 border-electric shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <span className="h-2 w-2 rounded-full bg-electric-bright" />
              </span>

              {/* Header */}
              <div className="flex flex-col mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-electric-bright mb-2">
                  <Calendar size={14} /> {item.period}
                </div>
                <h4 className="text-xl font-bold text-gray-100">{item.title}</h4>
                <div className="text-sm font-medium text-gray-400 flex items-center gap-1.5 mt-1">
                  <Briefcase size={14} /> {item.subtitle}
                </div>
              </div>

              {/* Body */}
              <p className="text-sm leading-relaxed text-gray-400 mb-4 max-w-2xl">
                {item.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={16} className="text-electric mt-0.5 shrink-0" />
                    <span>{achievement}</span>
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