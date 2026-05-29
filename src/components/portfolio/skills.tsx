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
    <section className="py-28 px-6 bg-[#0c0d12] border-t border-white/5 relative">
      <div className="absolute top-[35%] left-0 w-24 h-[1px] bg-white/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal delay={100} className="mb-24 text-left space-y-4">
          <div className="text-base font-semibold text-[#d4c6ea] md:text-lg">
            Skills
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Core capabilities
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            The methods, systems, and communication skills I rely on to turn strategy into delivery.
          </p>
        </ScrollReveal>

        {/* Matrix Ledger Grid */}
        <ScrollReveal stagger={true} staggerSpeed={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-[#111319] border border-white/5 p-6 rounded-none hover:border-[#9B86BD]/20 transition-all duration-300 relative group">
              
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/10" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/10" />
              
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                <h4 className="flex items-center gap-2 font-headline text-xl font-bold text-white tracking-tight">
                  <Database className="w-4 h-4 text-[#C57BCC]" />
                  {group.category}
                </h4>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/50">
                  {group.schema}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="flex cursor-default items-center gap-2 rounded-full border border-white/7 bg-[#0c0d12] px-3.5 py-2 text-sm font-medium text-white/80 transition-all hover:border-[#9B86BD]/30 hover:bg-[#111319]"
                  >
                    <CheckSquare className="h-3.5 w-3.5 shrink-0 text-[#9B86BD]" />
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
