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
    <section className="relative py-28 px-6 bg-[#0c0d12] border-t border-white/5">
      <div className="absolute inset-y-0 right-[20%] w-[1px] bg-white/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal delay={100} className="mb-24 text-left space-y-4">
          <div className="text-base font-semibold text-[#d4c6ea] md:text-lg">
            Project scope
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Areas I work across
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            Product and operational domains where I have mapped requirements, supported delivery, and improved adoption.
          </p>
        </ScrollReveal>

        {/* Modular Grid Layout */}
        <ScrollReveal stagger={true} staggerSpeed={120} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectDomains.map((domain, idx) => {
            const Icon = domain.icon;
            
            return (
              <div 
                key={idx} 
                className="bg-[#111319] border border-white/5 p-6 min-h-[380px] flex flex-col justify-between rounded-none hover:border-[#C57BCC]/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/10" />

                <div>
                  <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 border border-white/10 bg-[#0c0d12] flex items-center justify-center text-[#9B86BD] group-hover:border-[#9B86BD]/40 transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-semibold text-[#d4c6ea]">
                        {domain.category}
                      </span>
                    </div>
                  </div>

                  <h4 className="mb-4 font-headline text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#9B86BD]">
                    {domain.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-sm text-white/45">
                    <Terminal className="w-3 h-3 text-[#C57BCC]" />
                    <span>Key modules</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="rounded-full border border-white/7 bg-[#0c0d12] px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:border-[#9B86BD]/20 hover:bg-[#111319]"
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
