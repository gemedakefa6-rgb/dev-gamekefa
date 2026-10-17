// src/components/Footer.tsx
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

// Inline Github icon
function Github({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-midnight-border bg-midnight-soft/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-md bg-electric/10 ring-1 ring-electric/30 text-electric-bright">
                <span className="text-sm font-bold">&lt;/&gt;</span>
              </span>
              <span className="text-gray-100">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              {site.title} · {site.experienceYears} years of building
              user-focused web applications.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-500 transition-colors hover:text-electric-bright"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Connect
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-electric-bright"
                >
                  <Mail size={14} /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-electric-bright"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-electric-bright"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom (Fixed the new Date() error here) */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-midnight-border pt-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, TypeScript & Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}