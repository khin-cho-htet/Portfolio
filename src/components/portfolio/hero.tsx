import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Globe, MapPin, Star } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import profilePic from '@/assets/profilepicture.png';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5.5rem)] items-start overflow-hidden bg-[#0c0d12] px-6 pb-20 pt-[10.5rem] sm:pt-[11rem] md:pt-[12.5rem] lg:pt-28">
      {/* Structural technical grid lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[35%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[65%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-white" />
        <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-white" />
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">

        {/* ── Left Side: Editorial Typography Masthead (7 cols) ── */}
        <div className="space-y-8 text-left lg:col-span-7 lg:space-y-10">
          <ScrollReveal delay={100} className="space-y-5 lg:space-y-6">
            <p className="text-lg font-medium text-[#d4c6ea] sm:text-xl">
              Senior business analyst focused on ERP, banking, and operations
            </p>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Khin Cho Htet
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                I translate business requirements into clear delivery plans, aligned teams, and dependable product outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-auto rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0c0d12] shadow-none transition-all hover:bg-[#efe8fb]"
              asChild
            >
              <a href="#experience">
                View experience
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
              className="h-auto rounded-full border-white/14 bg-white/[0.03] px-5 py-3 text-base text-white hover:border-white/25 hover:bg-white/[0.06]"
            >
              <a href="mailto:khinchohtet15@gmail.com" title="Email Connection" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
              className="h-auto rounded-full border-white/14 bg-white/[0.03] px-5 py-3 text-base text-white hover:border-white/25 hover:bg-white/[0.06]"
            >
              <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank" rel="noopener noreferrer" title="LinkedIn Directory" className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={300} className="border-t border-white/8 pt-8">
            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 text-left">
                <span className="mb-2 block text-sm font-medium text-white/55">Experience</span>
                <span className="text-3xl font-extrabold tracking-tight text-white">3+ years</span>
                <span className="mt-1 block text-sm text-white/60">Leading analysis and delivery work</span>
              </div>
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 text-left">
                <span className="mb-2 block text-sm font-medium text-white/55">Projects</span>
                <span className="text-3xl font-extrabold tracking-tight text-white">12+ delivered</span>
                <span className="mt-1 block text-sm text-white/60">Across finance, ERP, and operations</span>
              </div>
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 text-left">
                <span className="mb-2 block text-sm font-medium text-white/55">Focus</span>
                <span className="text-3xl font-extrabold tracking-tight text-white">3 sectors</span>
                <span className="mt-1 block text-sm text-white/60">Banking, enterprise software, and web products</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250} className="flex justify-center pt-6 md:pt-8 lg:col-span-5 lg:justify-end lg:pt-16 xl:pt-20">
          <div className="space-y-4 select-none">
            <div className="relative group">

              <div className="pointer-events-none absolute inset-[-12px] rounded-[2.5rem] border border-white/8 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              <div className="relative aspect-[4/5] w-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111319] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:w-[360px]">
              
                <div className="pointer-events-none absolute inset-0 z-10 m-4 rounded-[1.5rem] border border-white/8" />

                <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-[#0c0d12] transition-all duration-700 ease-out">
                  <Image
                    src={profilePic}
                    alt="Khin Cho Htet — Portrait"
                    fill
                    sizes="(max-width: 640px) 300px, 360px"
                    className="object-cover object-top scale-[1.02] transition-transform duration-700 ease-out hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 px-1">
              <div className="flex items-center gap-2 rounded-full border border-white/12 bg-[#111319]/92 px-4 py-2 shadow-md backdrop-blur">
                <MapPin className="h-4 w-4 shrink-0 text-[#C57BCC]" />
                <div>
                  <span className="block text-xs text-white/50">Based in</span>
                  <span className="text-sm font-semibold text-white">Mandalay, Myanmar</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/12 bg-[#111319]/92 px-4 py-2 shadow-md backdrop-blur">
                <Star className="h-4 w-4 shrink-0 fill-[#9B86BD] text-[#9B86BD]" />
                <div>
                  <span className="block text-xs text-white/50">Availability</span>
                  <span className="text-sm font-semibold text-white">Open to new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
