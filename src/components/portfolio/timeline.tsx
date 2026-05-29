
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Senior Business Analyst",
    company: "Alliance Microfinance Myanmar",
    location: "Mandalay, Myanmar",
    period: "June 2024 - Present",
    description: [
      "Acted as the single point of contact between business users, internal IT teams, and international software vendors",
      "Analyzed customer and internal user needs and proposed ERP-based solutions aligned with business processes",
      "Managed the end-to-end project lifecycle using Agile methodology and Scrum framework",
      "Coordinated User Acceptance Testing (UAT) and ensured smooth adoption through training"
    ]
  },
  {
    role: "Business Analyst",
    company: "Digital Base Software Company Limited",
    location: "Yangon, Myanmar",
    period: "Nov 2022 - May 2024",
    description: [
      "Conducted pre-sales requirement discovery meetings and gathered post-sales business requirements",
      "Prepared project contracts, BRD, and implementation schedules",
      "Created test cases and led UAT sessions with internal teams and end users",
      "Provided post go-live support and addressed user issues"
    ]
  },
  {
    role: "Junior Web Developer",
    company: "Nexcode Software Company Limited",
    location: "Yangon, Myanmar",
    period: "Nov 2021 - Dec 2022",
    description: [
      "Translated business requirements into functional system features",
      "Supported implementation of user-facing modules using HTML, CSS, and JavaScript",
      "Designed and developed CMS-based websites for client needs"
    ]
  }
];

export function Timeline() {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="mb-16 text-center space-y-4 stagger-item">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Professional Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 stagger-item" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
                {/* Desktop Left: Period & Location */}
                <div className="hidden md:block text-right pt-2">
                  <span className="text-primary font-bold font-headline block">{exp.period}</span>
                  <span className="text-muted-foreground text-sm">{exp.location}</span>
                </div>

                {/* Center Circle & Line */}
                <div className="absolute left-0 md:static flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 w-px bg-border min-h-[100px]" />
                </div>

                {/* Content */}
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                  <div className="md:hidden text-primary font-bold font-headline mb-1 text-sm">{exp.period}</div>
                  <h3 className="text-xl font-bold font-headline mb-1">{exp.role}</h3>
                  <p className="text-accent font-medium mb-4 text-sm">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
