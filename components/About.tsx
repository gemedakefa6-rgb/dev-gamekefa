// src/components/About.tsx
import { Code2, Layout, Server, Database, Gauge, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={20} className="text-electric-bright" />,
    title: "Clean, Maintainable Code",
    description: "Writing readable, well-documented, and scalable code that is easy for teams to maintain.",
  },
  {
    icon: <Layout size={20} className="text-electric-bright" />,
    title: "Responsive UIs",
    description: "Building pixel-perfect, accessible interfaces that look great on every device.",
  },
  {
    icon: <Server size={20} className="text-electric-bright" />,
    title: "Backend & APIs",
    description: "Architecting robust server-side logic and designing RESTful APIs for seamless integration.",
  },
  {
    icon: <Database size={20} className="text-electric-bright" />,
    title: "Database Integration",
    description: "Designing schemas and integrating databases to ensure data integrity and speed.",
  },
  {
    icon: <Gauge size={20} className="text-electric-bright" />,
    title: "Performance & Accessibility",
    description: "Optimizing load times and ensuring applications are usable by everyone, regardless of ability.",
  },
  {
    icon: <BookOpen size={20} className="text-electric-bright" />,
    title: "Continuous Learning",
    description: "Constantly staying updated with the latest technologies and best practices in web development.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 border-t border-midnight-border/50">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-wider text-electric-bright uppercase">
            About Me
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building reliable digital solutions with 4 years of expertise.
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left side: Professional Narrative */}
          <div className="space-y-6 text-base leading-relaxed text-gray-400">
            <p>
              I am a passionate Full-Stack Web Developer with 4 years of experience 
              designing and building web applications from the ground up. My journey 
              has been driven by a deep curiosity for how things work and a commitment 
              to solving real-world problems through software.
            </p>
            <p>
              Over the years, I have specialized in creating seamless user experiences 
              on the frontend while engineering robust, scalable architectures on the backend. 
              I believe that great software is the result of clean architecture, thorough 
              testing, and an unwavering focus on the end user.
            </p>
            <p>
              Whether it is optimizing database queries, implementing secure authentication, 
              or fine-tuning CSS for perfect responsiveness, I approach every challenge with 
              a detail-oriented mindset. I thrive in environments where I can apply my technical 
              skills to deliver high-quality digital products.
            </p>
          </div>

          {/* Right side: Highlight Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <div 
                key={i} 
                className="rounded-xl border border-midnight-border bg-midnight-card/50 p-5 transition-colors hover:border-electric/30 hover:bg-midnight-card"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-electric/10 ring-1 ring-electric/20">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-sm font-semibold text-gray-100">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}