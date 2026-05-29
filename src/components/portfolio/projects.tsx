import { Badge } from '@/components/ui/badge';
import { Landmark, ShieldCheck, Users, Monitor, Terminal } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const projectDomains = [
  {
    code: "SYS-01",
    title: "Financial Systems",
    items: ["Core Banking System", "Loan Origination (LOS)", "Customer Loan App", "Audit Ledger"],
    icon: Landmark,
    category: "BANKING TECH"
  },
  {
    code: "SYS-02",
    title: "Risk & Operations",
    items: ["Risk Assessment Engine", "Electronic Asset Management", "Call Center CRM"],
    icon: ShieldCheck,
    category: "ENTERPRISE RISK"
  },
  {
    code: "SYS-03",
    title: "Enterprise Solutions",
    items: ["HRM Software Stack", "Point of Sale (POS)", "Learning Management"],
    icon: Users,
    category: "BUSINESS ERP"
  },
  {
    code: "SYS-04",
    title: "Digital Platforms",
    items: ["Online Bookstore Portal", "Digital Content Engine", "Hotel Management"],
    icon: Monitor,
    category: "WEB PLATFORMS"
  }
];

export function Projects() {
  return (
    <section className="relative border-t border-[hsl(var(--border-soft))] bg-background px-6 py-28">
      <div className="pointer-events-none absolute inset-y-0 right-[20%] w-[1px] bg-[hsl(var(--grid-line))]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <ScrollReveal delay={100} className="mb-24 space-y-4 text-left">
          <div className="text-base font-semibold text-[hsl(var(--accent-soft))] md:text-lg">
            Project scope
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-5xl">
            Areas I work across
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-[hsl(var(--text-muted))]">
            Product and operational domains where I have mapped requirements, supported delivery, and improved adoption.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={true} staggerSpeed={120} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectDomains.map((domain, idx) => {
            const Icon = domain.icon;

            return (
              <div
                key={idx}
                className="group relative flex min-h-[380px] flex-col justify-between rounded-none border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel))] p-6 transition-all duration-300 hover:border-[hsl(var(--accent-strong)/0.35)]"
              >
                <div className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-[hsl(var(--border-strong))]" />
                <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-[hsl(var(--border-strong))]" />

                <div>
                  <div className="mb-10 flex items-start justify-between border-b border-[hsl(var(--border-soft))] pb-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-[hsl(var(--border-strong))] bg-background text-[hsl(var(--accent-soft))] transition-colors group-hover:border-[hsl(var(--accent-soft)/0.45)]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-semibold text-[hsl(var(--accent-soft))]">
                        {domain.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="mb-4 font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-[hsl(var(--accent-soft))]">
                    {domain.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-sm text-[hsl(var(--text-faint))]">
                    <Terminal className="h-3 w-3 text-[hsl(var(--accent-strong))]" />
                    <span>Key modules</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="rounded-full border border-[hsl(var(--border-soft))] bg-background px-3 py-1.5 text-sm font-medium text-[hsl(var(--text-soft))] transition-colors hover:border-[hsl(var(--accent-soft)/0.25)] hover:bg-[hsl(var(--surface-panel))]"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
