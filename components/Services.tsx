// src/components/Services.tsx
import { Code2, Layout, Server, Database, Wrench, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code2 size={24} className="text-electric-bright" />,
    title: "Full-Stack Development",
    description: "End-to-end web application development, from the initial architecture and database design to the final user interface.",
  },
  {
    icon: <Layout size={24} className="text-electric-bright" />,
    title: "Frontend UI Implementation",
    description: "Translating designs into pixel-perfect, responsive, and highly interactive React/Next.js interfaces.",
  },
  {
    icon: <Server size={24} className="text-electric-bright" />,
    title: "Backend & REST APIs",
    description: "Building secure, scalable server-side logic and designing RESTful APIs for seamless data flow.",
  },
  {
    icon: <Database size={24} className="text-electric-bright" />,
    title: "Database Integration",
    description: "Designing relational and NoSQL database schemas, optimizing queries, and ensuring data integrity.",
  },
  {
    icon: <Smartphone size={24} className="text-electric-bright" />,
    title: "Responsive Web Design",
    description: "Ensuring web applications look and function flawlessly across all devices, from mobile to large desktops.",
  },
  {
    icon: <Wrench size={24} className="text-electric-bright" />,
    title: "Maintenance & Optimization",
    description: "Auditing existing applications for performance bottlenecks, accessibility issues, and code quality improvements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 border-t border-midnight-border/50 bg-midnight-soft/30">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-wider text-electric-bright uppercase">
            Services
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How I can help your business.
          </h3>
          <p className="mt-4 text-gray-400">
            Providing comprehensive web development solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group rounded-2xl border border-midnight-border bg-midnight p-6 transition-all hover:border-electric/40 hover:bg-midnight-card"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-electric/10 ring-1 ring-electric/20 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h4 className="mb-2 text-lg font-semibold text-gray-100">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}