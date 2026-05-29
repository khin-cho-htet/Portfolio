import { Cpu, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const experiences = [
  {
    code: "EXP-01",
    role: "Senior Business Analyst",
    company: "Alliance Microfinance Myanmar",
    location: "Mandalay, Myanmar",
    period: "June 2024 - Present",
    description: [
      "Acted as the single point of contact between business users, internal IT teams, and international software vendors.",
      "Analyzed customer and internal user needs and proposed ERP-based solutions aligned with business processes.",
      "Managed the end-to-end project lifecycle using Agile methodology and Scrum framework.",
      "Coordinated User Acceptance Testing (UAT) and ensured smooth adoption through training."
    ]
  },
  {
    code: "EXP-02",
    role: "Business Analyst",
    company: "Digital Base Software Company Limited",
    location: "Yangon, Myanmar",
    period: "Nov 2022 - May 2024",
    description: [
      "Conducted pre-sales requirement discovery meetings and gathered post-sales business requirements.",
      "Prepared project contracts, BRD, and implementation schedules.",
      "Created test cases and led UAT sessions with internal teams and end users.",
      "Provided post go-live support and addressed user issues."
    ]
  },
  {
    code: "EXP-03",
    role: "Junior Web Developer",
    company: "Nexcode Software Company Limited",
    location: "Yangon, Myanmar",
    period: "Nov 2021 - Dec 2022",
    description: [
      "Translated business requirements into functional system features.",
      "Supported implementation of user-facing modules using HTML, CSS, and JavaScript.",
      "Designed and developed CMS-based websites for client needs."
    ]
  }
];

export function Timeline() {
  return (
    <section className="relative py-28 px-6 bg-[#0c0d12] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#9B86BD]/10 to-transparent" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <ScrollReveal delay={100} className="mb-24 text-left space-y-4">
          <div className="text-base font-semibold text-[#d4c6ea] md:text-lg">
            Experience
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Professional experience
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            A snapshot of the roles where I translated business needs into delivery plans, product decisions, and production systems.
          </p>
        </ScrollReveal>

        {/* Structured Column Layout */}
        <div className="relative">
          
          {/* Timeline center track for grid layout */}
          <div className="absolute left-4 md:left-[10%] top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              return (
                <div key={idx} className="relative pl-12 md:pl-0 md:grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left-side node indicator */}
                  <div className="absolute left-[11px] md:left-[10%] -ml-1.5 top-1.5 w-3.5 h-3.5 bg-[#0c0d12] border border-[#9B86BD] flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 bg-[#9B86BD]" />
                  </div>

                  <div className="hidden md:block md:col-span-2 pt-1.5">
                    <span className="block w-24 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-center text-sm font-medium text-white/65">
                      {exp.period}
                    </span>
                  </div>

                  {/* Corporate Block (Cols 3-12) */}
                  <div className="md:col-span-10">
                    <ScrollReveal 
                      delay={idx * 120} 
                      className="bg-[#111319] border border-white/5 p-6 md:p-8 rounded-none hover:border-[#9B86BD]/30 transition-all duration-300 relative group"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20" />
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20" />
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20" />
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20" />

                      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4 text-sm text-white/55">
                        <div className="flex items-center gap-1.5">
                          <span className="md:hidden font-medium text-[#d4c6ea]">{exp.period}</span>
                          <span className="font-semibold text-[#d4c6ea]">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#9B86BD]" /> {exp.period}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-white/30" /> {exp.location}</span>
                        </div>
                      </div>

                      <h4 className="mb-6 font-headline text-3xl font-bold tracking-tight text-white">
                        {exp.role}
                      </h4>

                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 text-base leading-8 text-white/72">
                            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#9B86BD]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollReveal>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
