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
      {/* Background grids */}
      <div className="absolute inset-y-0 right-[20%] w-[1px] bg-white/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal delay={100} className="mb-24 text-left space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#9B86BD]">
            <span>[ Section.03 ]</span>
            <span>•</span>
            <span>Technical Scope</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white uppercase tracking-tight">
            Architecture Matrix
          </h3>
          <p className="font-mono text-xs text-white/40 tracking-wider">
            DOMAIN CLASSIFICATION AND ENTERPRISE SOLUTIONS DEPLOYED
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
                {/* Technical grid tick markers in card corner */}
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/10" />

                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 border border-white/10 bg-[#0c0d12] flex items-center justify-center text-[#9B86BD] group-hover:border-[#9B86BD]/40 transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[9px] text-[#9B86BD] block uppercase tracking-widest font-bold">
                        {domain.code}
                      </span>
                      <span className="font-mono text-[8px] text-white/30 block uppercase tracking-wider">
                        {domain.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#9B86BD] transition-colors">
                    {domain.title}
                  </h4>
                </div>

                {/* Tags Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 font-mono text-[8px] text-white/40 tracking-wider">
                    <Terminal className="w-3 h-3 text-[#C57BCC]" />
                    <span>SYSTEM CORE MODULES</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-[#0c0d12] hover:bg-[#111319] border border-white/5 hover:border-[#9B86BD]/20 text-white/80 px-2.5 py-1 text-[10px] font-mono font-normal rounded-none transition-colors"
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
