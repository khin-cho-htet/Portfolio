import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';

const certifications = [
  { 
    code: "CRT-01",
    title: "Google Project Management", 
    issuer: "Coursera Professional", 
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/G3HE34LOFCMB" 
  },
  { 
    code: "CRT-02",
    title: "Business Mgmt & Admin", 
    issuer: "Strategy First University", 
    link: "https://drive.google.com/file/d/1OzH6YLSXecMRp9ii5q0bm7PHqQ26ZLzd/view" 
  },
  { 
    code: "CRT-03",
    title: "Essentials in Business Analysis", 
    issuer: "Microsoft / LinkedIn", 
    link: "https://www.linkedin.com/learning/certificates/d428812178257c3fb70b0487fc60c11c34094edf3d017308d54f622b7ea5052a" 
  },
  { 
    code: "CRT-04",
    title: "Agile Project Management", 
    issuer: "Coursera Professional", 
    link: "https://www.coursera.org/account/accomplishments/verify/1A93S3YI83N7" 
  }
];

export function Certifications() {
  return (
    <section className="relative border-t border-[hsl(var(--border-soft))] bg-background px-6 py-28">
      <div className="pointer-events-none absolute inset-y-0 left-[25%] w-[1px] bg-[hsl(var(--grid-line))]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <ScrollReveal delay={100} className="mb-24 space-y-4 text-left">
          <div className="text-base font-semibold text-[hsl(var(--accent-soft))] md:text-lg">
            Credentials
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-foreground md:text-5xl">
            Credentials
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-[hsl(var(--text-muted))]">
            Professional certifications that support the delivery, analysis, and collaboration side of my work.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={true} staggerSpeed={100} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="relative flex min-h-[220px] flex-col items-start justify-between overflow-hidden rounded-[1.75rem] border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel))] p-6 shadow-none transition-all group-hover:border-[hsl(var(--accent-strong)/0.35)]">
                <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-[hsl(var(--border-strong))]" />
                <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[hsl(var(--border-strong))]" />

                <div className="flex w-full items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-[hsl(var(--accent-soft)/0.24)] bg-background text-[hsl(var(--accent-soft))] transition-colors group-hover:border-[hsl(var(--accent-soft)/0.5)]">
                    <Award className="h-5.5 w-5.5" />
                  </div>
                  <span className="rounded-full border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.68)] px-3 py-1 text-xs font-medium text-[hsl(var(--text-faint))]">
                    Verified
                  </span>
                </div>

                <div className="mt-6 w-full space-y-2">
                  <h4 className="font-headline text-xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-[hsl(var(--accent-soft))]">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-[hsl(var(--text-faint))]">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 flex w-full items-center justify-between border-t border-[hsl(var(--border-soft))] pt-4 text-sm text-[hsl(var(--text-faint))] transition-colors group-hover:text-foreground">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--accent-strong))]" /> View certificate</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Card>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
