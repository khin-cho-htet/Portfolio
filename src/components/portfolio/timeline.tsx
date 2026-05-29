import { Calendar, MapPin } from 'lucide-react';
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
    <section className="relative overflow-hidden border-t border-[hsl(var(--border-soft))] bg-background px-6 py-28">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[hsl(var(--accent-soft)/0.22)] to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <ScrollReveal delay={100} className="mb-24 space-y-4 text-left">
          <div className="text-base font-semibold text-[hsl(var(--accent-soft))] md:text-lg">
            Experience
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-5xl">
            Professional experience
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-[hsl(var(--text-muted))]">
            A snapshot of the roles where I translated business needs into delivery plans, product decisions, and production systems.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-[1px] bg-[hsl(var(--grid-line))] md:left-[10%]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              return (
                <div key={idx} className="relative items-start gap-8 pl-12 md:grid md:grid-cols-12 md:pl-0">
                  <div className="absolute left-[11px] top-1.5 z-10 -ml-1.5 flex h-3.5 w-3.5 items-center justify-center border border-[hsl(var(--accent-soft))] bg-background md:left-[10%]">
                    <div className="h-1.5 w-1.5 bg-[hsl(var(--accent-soft))]" />
                  </div>

                  <div className="hidden pt-1.5 md:col-span-2 md:block">
                    <span className="block w-24 rounded-full border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.7)] px-3 py-1.5 text-center text-sm font-medium text-[hsl(var(--text-muted))]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="md:col-span-10">
                    <ScrollReveal
                      delay={idx * 120}
                      className="group relative rounded-none border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel))] p-6 transition-all duration-300 hover:border-[hsl(var(--accent-soft)/0.45)] md:p-8"
                    >
                      <div className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-[hsl(var(--border-strong))]" />
                      <div className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-[hsl(var(--border-strong))]" />
                      <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-[hsl(var(--border-strong))]" />
                      <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-[hsl(var(--border-strong))]" />

                      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[hsl(var(--border-soft))] pb-4 text-sm text-[hsl(var(--text-faint))]">
                        <div className="flex items-center gap-1.5">
                          <span className="font-medium text-[hsl(var(--accent-soft))] md:hidden">{exp.period}</span>
                          <span className="font-semibold text-[hsl(var(--accent-soft))]">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[hsl(var(--accent-soft))]" /> {exp.period}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[hsl(var(--text-faint))]" /> {exp.location}</span>
                        </div>
                      </div>

                      <h4 className="mb-6 font-headline text-3xl font-bold tracking-tight text-foreground">
                        {exp.role}
                      </h4>

                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 text-base leading-8 text-[hsl(var(--text-soft))]">
                            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[hsl(var(--accent-soft))]" />
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
