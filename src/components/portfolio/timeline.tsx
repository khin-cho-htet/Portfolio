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
      {/* Background blueprint aesthetics */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#9B86BD]/10 to-transparent" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <ScrollReveal delay={100} className="mb-24 text-left space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#9B86BD]">
            <span>[ Section.02 ]</span>
            <span>•</span>
            <span>Ledger History</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white uppercase tracking-tight">
            Professional Dossier
          </h3>
          <p className="font-mono text-xs text-white/40 tracking-wider">
            SYSTEM IMPLEMENTATION &amp; CORE ANALYSIS TIMELINE
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

                  {/* Monospace Code Label (Cols 1-2) */}
                  <div className="hidden md:block md:col-span-2 pt-1.5">
                    <span className="font-mono text-[10px] text-[#9B86BD] border border-[#9B86BD]/30 px-2 py-1 bg-[#9B86BD]/5 uppercase tracking-widest block text-center w-20">
                      [{exp.code}]
                    </span>
                  </div>

                  {/* Corporate Block (Cols 3-12) */}
                  <div className="md:col-span-10">
                    <ScrollReveal 
                      delay={idx * 120} 
                      className="bg-[#111319] border border-white/5 p-6 md:p-8 rounded-none hover:border-[#9B86BD]/30 transition-all duration-300 relative group"
                    >
                      {/* Precise top corner crosshairs for technical drafting feel */}
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20" />
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20" />
                      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20" />
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20" />

                      {/* Header containing meta details */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4 font-mono text-[10px] text-white/50 tracking-wider">
                        <div className="flex items-center gap-1.5">
                          <span className="md:hidden text-[#9B86BD] font-bold">[{exp.code}]</span>
                          <span className="uppercase text-[#C57BCC] font-bold">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#9B86BD]" /> {exp.period}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-white/30" /> {exp.location}</span>
                        </div>
                      </div>

                      {/* Role title */}
                      <h4 className="text-2xl font-headline font-bold text-white mb-6 uppercase tracking-tight">
                        {exp.role}
                      </h4>

                      {/* Summary ledger bullets */}
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-white/70 text-sm leading-relaxed flex gap-3">
                            <span className="text-[#9B86BD] font-mono text-xs select-none mt-1">//</span>
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
