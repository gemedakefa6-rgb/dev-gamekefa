// src/components/Hero.tsx
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-midnight-border bg-midnight-card/60 px-3 py-1.5 text-xs text-gray-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-bright opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-bright" />
            </span>
            {site.availability}
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Digital <span className="text-gradient">Experiences</span>{" "}
            That Make an Impact.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin size={13} /> {site.location}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-electric px-5 py-3 text-sm font-medium text-white shadow-glow-sm transition-all hover:bg-electric-bright hover:shadow-glow"
            >
              View My Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-midnight-border bg-midnight-card/60 px-5 py-3 text-sm font-medium text-gray-200 transition-colors hover:border-electric/50 hover:text-electric-bright"
            >
              <Mail size={16} />
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5 text-sm text-gray-500">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-electric-bright"
            >
              <Github size={16} /> GitHub
            </a>
            <span className="h-4 w-px bg-midnight-border" aria-hidden />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-electric-bright"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-3xl bg-electric/10 blur-3xl"
      />

      <div className="overflow-hidden rounded-xl border border-midnight-border bg-midnight-card/80 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-midnight-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-gray-500">gemeda.ts</span>
          <Sparkles size={14} className="ml-auto text-electric-bright" />
        </div>

        <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
          <code className="font-mono">
            <Line n="1">
              <span className="text-purple-400">type</span>{" "}
              <span className="text-yellow-300">Developer</span>{" "}
              <span className="text-gray-400">=</span> {"{"}
            </Line>
            <Line n="2">
              {"  "}
              <span className="text-electric-soft">name</span>
              <span className="text-gray-400">:</span>{" "}
              <span className="text-green-300">&quot;Gemeda Kefa&quot;</span>
              <span className="text-gray-400">;</span>
            </Line>
            <Line n="3">
              {"  "}
              <span className="text-electric-soft">role</span>
              <span className="text-gray-400">:</span>{" "}
              <span className="text-green-300">&quot;Full-Stack&quot;</span>
              <span className="text-gray-400">;</span>
            </Line>
            <Line n="4">
              {"  "}
              <span className="text-electric-soft">experience</span>
              <span className="text-gray-400">:</span>{" "}
              <span className="text-orange-300">4</span>
              <span className="text-gray-400">;</span>
            </Line>
            <Line n="5">
              {"  "}
              <span className="text-electric-soft">stack</span>
              <span className="text-gray-400">:</span> [
              <span className="text-green-300">
                &quot;Next.js&quot;, &quot;TypeScript&quot;
              </span>
              ];
            </Line>
            <Line n="6">{"}"};</Line>
            <Line n="7"> </Line>
            <Line n="8">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-electric-bright">impact</span>{" "}
              <span className="text-gray-400">=</span>{" "}
              <span className="text-purple-400">await</span>{" "}
              <span className="text-yellow-300">build</span>(
              <span className="text-electric-soft">gemeda</span>);
            </Line>
          </code>
        </pre>

        <div className="flex items-center justify-between border-t border-midnight-border px-4 py-2.5 text-[11px] text-gray-500">
          <span>TypeScript</span>
          <span className="text-electric-bright">● compiled</span>
        </div>
      </div>
    </div>
  );
}

function Line({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="mr-4 w-6 select-none text-right text-gray-600">
        {n}
      </span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
}