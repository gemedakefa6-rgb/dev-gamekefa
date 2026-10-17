// src/components/Contact.tsx
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-midnight-border/50">
      
      {/* Background Glow */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/5 blur-3xl" 
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        
        <h2 className="text-sm font-semibold tracking-wider text-electric-bright uppercase mb-4">
          Get In Touch
        </h2>
        
        <h3 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
          Let's build something <span className="text-gradient">amazing</span> together.
        </h3>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-400 mb-10">
          I am currently {site.availability.toLowerCase()}. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </p>

        {/* Email CTA Button */}
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex items-center gap-2 rounded-md bg-electric px-8 py-4 text-base font-medium text-white shadow-glow-sm transition-all hover:bg-electric-bright hover:shadow-glow"
        >
          <Mail size={18} />
          Say Hello
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>

        {/* Social Links */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-electric-bright"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full border border-midnight-border bg-midnight-card transition-colors group-hover:border-electric/50">
              <Github size={20} />
            </div>
            <span className="text-xs font-medium">GitHub</span>
          </a>
          
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-electric-bright"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full border border-midnight-border bg-midnight-card transition-colors group-hover:border-electric/50">
              <Linkedin size={20} />
            </div>
            <span className="text-xs font-medium">LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}