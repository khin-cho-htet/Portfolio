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
    <section className="relative py-28 px-6 bg-[#0c0d12] border-t border-white/5">
      <div className="absolute inset-y-0 left-[25%] w-[1px] bg-white/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal delay={100} className="mb-24 text-left space-y-4">
          <div className="text-base font-semibold text-[#d4c6ea] md:text-lg">
            Credentials
          </div>
          <h3 className="font-headline text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">
            Credentials
          </h3>
          <p className="max-w-2xl text-lg leading-8 text-white/60">
            Professional certifications that support the delivery, analysis, and collaboration side of my work.
          </p>
        </ScrollReveal>

        {/* Credentials Grid */}
        <ScrollReveal stagger={true} staggerSpeed={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <a 
              key={idx} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              <Card className="relative flex min-h-[220px] flex-col items-start justify-between overflow-hidden rounded-[1.75rem] border-white/5 bg-[#111319] p-6 shadow-none transition-all group-hover:border-[#C57BCC]/30">
                
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />

                <div className="flex justify-between items-start w-full">
                  <div className="w-10 h-10 border border-[#9B86BD]/20 bg-[#0c0d12] flex items-center justify-center text-[#9B86BD] group-hover:border-[#9B86BD]/50 transition-colors">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/50">
                    Verified
                  </span>
                </div>

                <div className="space-y-2 mt-6 w-full">
                  <h4 className="font-headline text-xl font-bold leading-tight text-white tracking-tight transition-colors group-hover:text-[#9B86BD]">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-white/50">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 flex w-full items-center justify-between border-t border-white/5 pt-4 text-sm text-white/50 transition-colors group-hover:text-white">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[#C57BCC]" /> View certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Card>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
