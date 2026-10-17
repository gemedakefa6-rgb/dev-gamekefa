// src/components/Projects.tsx
import { ExternalLink, Github, Code2 } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 border-t border-midnight-border/50">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-wider text-electric-bright uppercase">
            Featured Projects
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real-world applications I have built.
          </h3>
          <p className="mt-4 text-gray-400">
            A selection of personal and independent projects showcasing my full-stack capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-midnight-border bg-midnight-card/50 transition-all hover:border-electric/40 hover:bg-midnight-card"
            >
              {/* Project Preview (Placeholder Graphic) */}
              <div className="relative aspect-video overflow-hidden bg-midnight-soft border-b border-midnight-border flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-fade opacity-50" />
                <Code2 size={40} className="text-electric/20 group-hover:text-electric/40 transition-colors duration-300 group-hover:scale-110" />
                
                {project.isPlaceholder && (
                  <span className="absolute top-3 right-3 rounded-md bg-midnight border border-midnight-border px-2 py-1 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Sample Project
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-lg font-bold text-gray-100 group-hover:text-electric-bright transition-colors">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-gray-400 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded-md bg-electric/10 border border-electric/20 px-2 py-1 text-[11px] font-medium text-electric-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-4 border-t border-midnight-border pt-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}