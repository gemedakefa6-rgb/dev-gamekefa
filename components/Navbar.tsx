// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/80 backdrop-blur-md border-b border-midnight-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
          aria-label={`${site.name} home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-electric/10 ring-1 ring-electric/30 text-electric-bright">
            <span className="text-sm font-bold">&lt;/&gt;</span>
          </span>
          <span className="text-gray-100 group-hover:text-electric-bright transition-colors">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-gray-400 transition-colors hover:text-electric-bright"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-midnight-border text-gray-400 transition-colors hover:border-electric/50 hover:text-electric-bright"
          >
            <Github size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-midnight-border text-gray-400 transition-colors hover:border-electric/50 hover:text-electric-bright"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-md border border-midnight-border text-gray-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-midnight-border bg-midnight/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-midnight-card hover:text-electric-bright"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-3 px-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-md border border-midnight-border text-gray-400 hover:text-electric-bright"
              >
                <Github size={16} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-md border border-midnight-border text-gray-400 hover:text-electric-bright"
              >
                <Linkedin size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}