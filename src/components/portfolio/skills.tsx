
import { Badge } from '@/components/ui/badge';

const skills = [
  { category: "Methodology", items: ["Agile", "Scrum", "Sprint Planning", "Backlog Grooming", "SDLC"] },
  { category: "Documentation", items: ["BRD", "FSD", "SRS", "Process Mapping", "Gap Analysis"] },
  { category: "Technical", items: ["Web Apps", "HTML", "CSS", "JavaScript", "Python", "React"] },
  { category: "Systems", items: ["ERP", "CRM", "Inventory", "Accounting", "POS", "FinTech"] },
  { category: "Testing", items: ["UAT", "Test Case Design", "Defect Tracking", "Functional Validation"] },
  { category: "Soft Skills", items: ["Stakeholder Management", "Client Communication", "Training", "Project Management"] }
];

export function Skills() {
  return (
    <section className="py-24 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center space-y-4 stagger-item">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Skills & Proficiencies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, idx) => (
            <div key={idx} className="space-y-4 stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary font-headline">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <div key={i} className="group relative">
                    <Badge variant="outline" className="px-4 py-2 border-primary/20 bg-background hover:bg-primary hover:text-white transition-all cursor-default text-sm">
                      {skill}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
