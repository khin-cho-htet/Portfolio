import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Globe, MapPin, Star, Cpu } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import profilePic from '@/assets/profilepicture.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[#0c0d12]">
      {/* Structural technical grid lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[35%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[65%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-white" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* ── Left Side: Editorial Typography Masthead (7 cols) ── */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <ScrollReveal delay={100} className="space-y-6">
            {/* Monospace System Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111319] border border-white/5 font-mono text-[9px] text-[#9B86BD] uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 animate-pulse" />
              <span>[ system.status: operational ]</span>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 block">
                Portfolio // Case Ledger
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-bold leading-[0.95] tracking-tight text-white uppercase">
                Khin Cho<br />
                <span className="text-[#9B86BD]">Htet</span>
              </h1>
              <p className="font-mono text-sm font-medium text-[#C57BCC] tracking-wider uppercase mt-2">
                // Senior Business Analyst
              </p>
            </div>

            <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed font-sans font-light">
              Bridging complex enterprise resource planning (ERP), core banking mechanisms, and software architectures. Specializing in translating high-level business complexities into structured technical schematics.
            </p>
          </ScrollReveal>

          {/* Action Row */}
          <ScrollReveal delay={200} className="flex flex-wrap items-center gap-4 font-mono">
            <Button
              size="lg"
              className="bg-[#9B86BD] text-black hover:bg-[#C57BCC] transition-all rounded-none px-6 py-5 text-xs font-semibold uppercase tracking-wider gap-2 shadow-none"
              asChild
            >
              <a href="#experience">
                Execute Dossier
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              asChild
              className="w-10 h-10 rounded-none border-white/10 hover:border-[#9B86BD] bg-transparent hover:bg-[#9B86BD]/10 text-white/70 hover:text-white transition-all"
            >
              <a href="mailto:khinchohtet15@gmail.com" title="Email Connection">
                <Mail className="w-4 h-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              asChild
              className="w-10 h-10 rounded-none border-white/10 hover:border-[#9B86BD] bg-transparent hover:bg-[#9B86BD]/10 text-white/70 hover:text-white transition-all"
            >
              <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank" rel="noopener noreferrer" title="LinkedIn Directory">
                <Globe className="w-4 h-4" />
              </a>
            </Button>
          </ScrollReveal>

          {/* Structured Monospace Statistics Sheet */}
          <ScrollReveal delay={300} className="pt-6 border-t border-white/5">
            <div className="grid grid-cols-3 gap-4 max-w-lg font-mono">
              <div className="bg-[#111319]/40 border border-white/5 p-4 text-left">
                <span className="text-white/40 text-[9px] block uppercase tracking-wider mb-1">Index // Experience</span>
                <span className="text-2xl font-bold text-[#9B86BD]">03+</span>
                <span className="text-[9px] text-white/60 block uppercase tracking-wider mt-0.5">Years Active</span>
              </div>
              <div className="bg-[#111319]/40 border border-white/5 p-4 text-left">
                <span className="text-white/40 text-[9px] block uppercase tracking-wider mb-1">Index // Projects</span>
                <span className="text-2xl font-bold text-[#9B86BD]">12+</span>
                <span className="text-[9px] text-white/60 block uppercase tracking-wider mt-0.5">Delivered</span>
              </div>
              <div className="bg-[#111319]/40 border border-white/5 p-4 text-left">
                <span className="text-white/40 text-[9px] block uppercase tracking-wider mb-1">Index // Sectors</span>
                <span className="text-2xl font-bold text-[#9B86BD]">03</span>
                <span className="text-[9px] text-white/60 block uppercase tracking-wider mt-0.5">Industries</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Right Side: Geometric Mask Image Block (5 cols) ── */}
        <ScrollReveal delay={250} className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group select-none">

            {/* Precise Solid Accent Border Frame Behind Image */}
            <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-[#9B86BD]/20 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

            {/* Main Portrait Container */}
            <div className="relative w-[280px] sm:w-[320px] aspect-[4/5] bg-[#111319] border border-white/10 p-2 overflow-hidden">
              
              {/* Inner geometric blueprint lines */}
              <div className="absolute inset-0 border border-[#9B86BD]/15 m-3 pointer-events-none z-10" />

              {/* Photo Container */}
              <div className="relative w-full h-full overflow-hidden transition-all duration-700 ease-out bg-[#0c0d12]">
                <Image
                  src={profilePic}
                  alt="Khin Cho Htet — Portrait"
                  fill
                  className="object-cover object-top scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>

            {/* Location Tag */}
            <div className="absolute -top-3 -left-3 flex items-center gap-2 bg-[#111319] border border-white/10 px-3 py-1.5 z-20 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#C57BCC] shrink-0" />
              <div>
                <span className="font-mono text-[9px] text-white/50 block uppercase tracking-widest">Stationed</span>
                <span className="font-mono text-[10px] text-white font-medium">Mandalay, MM</span>
              </div>
            </div>

            {/* Status Tag */}
            <div className="absolute -bottom-3 -right-3 flex items-center gap-2 bg-[#111319] border border-white/10 px-3 py-1.5 z-20 shadow-md">
              <Star className="w-3.5 h-3.5 text-[#9B86BD] fill-[#9B86BD] shrink-0" />
              <div>
                <span className="font-mono text-[9px] text-white/50 block uppercase tracking-widest">Availability</span>
                <span className="font-mono text-[10px] text-white font-medium">Active Command</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
