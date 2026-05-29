import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from './scroll-reveal';
import { Database, CheckSquare } from 'lucide-react';

const skills = [
  { category: "Methodology", items: ["Agile", "Scrum", "Sprint Planning", "Backlog Grooming", "SDLC"], schema: "METHODOLOGY_SCHEMA" },
  { category: "Documentation", items: ["BRD", "FSD", "SRS", "Process Mapping", "Gap Analysis"], schema: "DOC_CONTROL" },
  { category: "Technical", items: ["Web Apps", "HTML", "CSS", "JavaScript", "Python", "React"], schema: "DEV_CORE" },
  { category: "Systems", items: ["ERP", "CRM", "Inventory", "Accounting", "POS", "FinTech"], schema: "ENTERPRISE_SYS" },
  { category: "Testing", items: ["UAT", "Test Case Design", "Defect Tracking", "Functional Validation"], schema: "QA_VALIDATION" },
  { category: "Soft Skills", items: ["Stakeholder Mgmt", "Client Comm", "Training", "Project Mgmt"], schema: "HUMAN_OPERATIONS" }
];

export function Skills() {
  return (
    <section className="relative border-t border-[hsl(var(--border-soft))] bg-background px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-[35%] h-[1px] w-24 bg-[hsl(var(--grid-line))]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <ScrollReveal delay={100} className="mb-24 space-y-4 text-left">
          <div className="text-base font-semibold text-[hsl(var(--accent-soft))] md:text-lg">
            Skills
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-5xl">
            Core capabilities
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-[hsl(var(--text-muted))]">
            The methods, systems, and communication skills I rely on to turn strategy into delivery.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={true} staggerSpeed={80} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, idx) => (
            <div key={idx} className="group relative rounded-none border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel))] p-6 transition-all duration-300 hover:border-[hsl(var(--accent-soft)/0.28)]">
              <div className="absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-[hsl(var(--border-strong))]" />
              <div className="absolute right-0 top-0 h-1.5 w-1.5 border-r border-t border-[hsl(var(--border-strong))]" />

              <div className="mb-6 flex items-center justify-between border-b border-[hsl(var(--border-soft))] pb-3">
                <h4 className="flex items-center gap-2 font-headline text-xl font-bold tracking-tight text-foreground">
                  <Database className="h-4 w-4 text-[hsl(var(--accent-strong))]" />
                  {group.category}
                </h4>
                <span className="rounded-full border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.68)] px-3 py-1 text-xs font-medium text-[hsl(var(--text-faint))]">
                  {group.schema}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="flex cursor-default items-center gap-2 rounded-full border border-[hsl(var(--border-soft))] bg-background px-3.5 py-2 text-sm font-medium text-[hsl(var(--text-soft))] transition-all hover:border-[hsl(var(--accent-soft)/0.35)] hover:bg-[hsl(var(--surface-panel))]"
                  >
                    <CheckSquare className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--accent-soft))]" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
