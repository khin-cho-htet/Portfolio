import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-khin');

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-primary font-headline text-xl tracking-wider stagger-item [animation-delay:0.1s]">BUSINESS ANALYST</h2>
            <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight stagger-item [animation-delay:0.2s]">
              Khin Cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Htet</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed stagger-item [animation-delay:0.3s]">
              Business Analyst with 3+ years of experience in ERP and software implementation projects across microfinance, banking, and multi-industry environments.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 stagger-item [animation-delay:0.4s]">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group">
              View Experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" asChild className="rounded-full border-primary/20 hover:border-primary/50 bg-secondary/30">
                <a href="mailto:khinchohtet15@gmail.com"><Mail className="w-4 h-4" /></a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full border-primary/20 hover:border-primary/50 bg-secondary/30">
                <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank"><Linkedin className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end stagger-item [animation-delay:0.5s]">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[550px] flex items-center justify-center">
            {/* Geometric Frames - Behind the Image */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl rotate-6 animate-float z-0" />
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full -rotate-6 animate-float [animation-delay:1s] z-0" />
            <div className="absolute inset-4 bg-secondary/40 backdrop-blur-sm rounded-2xl z-0" />
            
            {/* Masked Image Container */}
            <div className="relative w-full h-full p-2 z-10">
               <div className="w-full h-full relative overflow-hidden rounded-2xl mask-blob">
                <Image 
                  src={profileImage?.imageUrl || "https://picsum.photos/seed/khin_pro_v3/600/800"}
                  alt="Khin Cho Htet"
                  fill
                  className="object-cover object-top"
                  data-ai-hint="professional woman"
                  priority
                />
              </div>
            </div>
            
            {/* Stats Badge - Positioned to avoid clipping */}
            <div className="absolute -bottom-4 left-4 md:-bottom-6 md:left-0 bg-card border border-border p-5 rounded-xl shadow-2xl stagger-item [animation-delay:0.8s] z-30 min-w-[160px]">
              <div className="text-3xl font-bold font-headline text-primary">3+</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
