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
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#9B86BD]">
            <span>[ Section.04 ]</span>
            <span>•</span>
            <span>Technical Capabilities</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white uppercase tracking-tight">
            Skill Directory
          </h3>
          <p className="font-mono text-xs text-white/40 tracking-wider">
            SYSTEM ENGINEERING &amp; BUSINESS ARCHITECTURE OPERATING DIRECTORY
          </p>
        </ScrollReveal>

        {/* Matrix Ledger Grid */}
        <ScrollReveal stagger={true} staggerSpeed={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-[#111319] border border-white/5 p-6 rounded-none hover:border-[#9B86BD]/20 transition-all duration-300 relative group">
              
              {/* Drafting crosshairs */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/10" />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/10" />
              
              {/* Category Schema Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                <h4 className="text-sm font-headline font-bold uppercase text-white tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#C57BCC]" />
                  {group.category}
                </h4>
                <span className="font-mono text-[8px] text-[#9B86BD]/60 bg-[#9B86BD]/5 px-2 py-0.5 border border-[#9B86BD]/10 tracking-widest uppercase">
                  {group.schema}
                </span>
              </div>

              {/* Tag Grid */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="px-3 py-1.5 bg-[#0c0d12] hover:bg-[#111319] border border-white/5 text-white/80 font-mono text-[10px] uppercase tracking-wider rounded-none cursor-default transition-all flex items-center gap-1.5 hover:border-[#9B86BD]/30"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-[#9B86BD] shrink-0" />
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
