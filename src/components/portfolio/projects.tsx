
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, ShieldCheck, Landmark, Monitor, Users, ShoppingCart } from 'lucide-react';

const projectDomains = [
  {
    title: "Financial Systems",
    items: ["Core Banking System", "Loan Origination System (LOS)", "Customer-Facing Loan App", "Audit Management"],
    icon: Landmark,
    color: "text-blue-400"
  },
  {
    title: "Risk & Operations",
    items: ["Risk Management System", "Electronic Asset Management", "Call Center Management"],
    icon: ShieldCheck,
    color: "text-purple-400"
  },
  {
    title: "Enterprise Solutions",
    items: ["HRM Software", "Point of Sale (POS)", "Learning Management System"],
    icon: Users,
    color: "text-green-400"
  },
  {
    title: "Digital Platforms",
    items: ["Online Bookstore Platform", "Digital Content Platform", "Hotel Management"],
    icon: Monitor,
    color: "text-orange-400"
  }
];

export function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center space-y-4 stagger-item">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Domain Expertise</h2>
          <p className="text-muted-foreground">Specialized knowledge in diverse enterprise and financial sectors.</p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectDomains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <Card key={idx} className="bg-card border-border hover:border-primary/40 transition-all stagger-item h-full" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${domain.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-headline text-lg">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 text-xs font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
