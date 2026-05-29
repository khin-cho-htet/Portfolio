
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  { title: "Google Project Management", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/specialization/certificate/G3HE34LOFCMB" },
  { title: "Business Management & Administration", issuer: "Strategy First University", link: "https://drive.google.com/file/d/1OzH6YLSXecMRp9ii5q0bm7PHqQ26ZLzd/view" },
  { title: "Career Essentials in Business Analysis", issuer: "Microsoft/LinkedIn", link: "https://www.linkedin.com/learning/certificates/d428812178257c3fb70b0487fc60c11c34094edf3d017308d54f622b7ea5052a" },
  { title: "Agile Project Management", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/verify/1A93S3YI83N7" }
];

export function Certifications() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center space-y-4 stagger-item">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="block stagger-item" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Card className="bg-card border-border hover:border-accent/40 transition-all group overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold font-headline leading-tight">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                  <div className="text-accent text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Verify Certificate <ExternalLink className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
