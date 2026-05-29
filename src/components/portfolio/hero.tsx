"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Globe, MapPin, Star } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import profilePic from '@/assets/profilepicture.png';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5.5rem)] items-start overflow-hidden bg-background px-6 pb-20 pt-[10.5rem] sm:pt-[11rem] md:pt-[12.5rem] lg:pt-28">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-[10%] top-0 w-[1px] bg-[hsl(var(--grid-line))]" />
        <div className="absolute bottom-0 left-[35%] top-0 w-[1px] bg-[hsl(var(--grid-line))]" />
        <div className="absolute bottom-0 left-[65%] top-0 w-[1px] bg-[hsl(var(--grid-line))]" />
        <div className="absolute bottom-0 left-[90%] top-0 w-[1px] bg-[hsl(var(--grid-line))]" />
        <div className="absolute left-0 right-0 top-[25%] h-[1px] bg-[hsl(var(--grid-line))]" />
        <div className="absolute left-0 right-0 top-[75%] h-[1px] bg-[hsl(var(--grid-line))]" />
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="space-y-8 text-left lg:col-span-7 lg:space-y-10">
          <ScrollReveal delay={100} className="space-y-5 lg:space-y-6">
            <p className="text-lg font-medium text-[hsl(var(--accent-soft))] sm:text-xl">
              Senior business analyst focused on ERP, banking, and operations
            </p>

            <div className="space-y-5">
              <h1 className="max-w-4xl font-headline text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Khin Cho Htet
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[hsl(var(--text-muted))] sm:text-xl">
                I translate business requirements into clear delivery plans, aligned teams, and dependable product outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="h-auto rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background shadow-none transition-all hover:bg-[hsl(var(--accent-soft))] hover:text-white"
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
              className="h-auto rounded-full border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-panel)/0.72)] px-5 py-3 text-base text-foreground hover:border-[hsl(var(--accent-soft))] hover:bg-[hsl(var(--surface-panel))]"
            >
              <a href="mailto:khinchohtet15@gmail.com" title="Email Connection" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>

            <Button
              variant="outline"
              asChild
              className="h-auto rounded-full border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-panel)/0.72)] px-5 py-3 text-base text-foreground hover:border-[hsl(var(--accent-soft))] hover:bg-[hsl(var(--surface-panel))]"
            >
              <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank" rel="noopener noreferrer" title="LinkedIn Directory" className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={300} className="border-t border-[hsl(var(--border-soft))] pt-8">
            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.75)] p-5 text-left">
                <span className="mb-2 block text-sm font-medium text-[hsl(var(--text-faint))]">Experience</span>
                <span className="text-3xl font-extrabold tracking-tight text-foreground">3+ years</span>
                <span className="mt-1 block text-sm text-[hsl(var(--text-muted))]">Leading analysis and delivery work</span>
              </div>
              <div className="rounded-3xl border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.75)] p-5 text-left">
                <span className="mb-2 block text-sm font-medium text-[hsl(var(--text-faint))]">Projects</span>
                <span className="text-3xl font-extrabold tracking-tight text-foreground">12+ delivered</span>
                <span className="mt-1 block text-sm text-[hsl(var(--text-muted))]">Across finance, ERP, and operations</span>
              </div>
              <div className="rounded-3xl border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.75)] p-5 text-left">
                <span className="mb-2 block text-sm font-medium text-[hsl(var(--text-faint))]">Focus</span>
                <span className="text-3xl font-extrabold tracking-tight text-foreground">3 sectors</span>
                <span className="mt-1 block text-sm text-[hsl(var(--text-muted))]">Banking, enterprise software, and web products</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={250} className="flex justify-center pt-6 md:pt-8 lg:col-span-5 lg:justify-end lg:pt-16 xl:pt-20">
          <div className="select-none space-y-4">
            <div className="group relative">
              <div className="pointer-events-none absolute inset-[-12px] rounded-[2.5rem] border border-[hsl(var(--border-soft))] transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              <div className="relative aspect-[4/5] w-[300px] overflow-hidden rounded-[2rem] border border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-panel))] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.18)] sm:w-[360px]">
                <div className="pointer-events-none absolute inset-0 z-10 m-4 rounded-[1.5rem] border border-[hsl(var(--border-soft))]" />

                <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-[hsl(var(--surface-page))] transition-all duration-700 ease-out">
                  <Image
                    src={profilePic}
                    alt="Khin Cho Htet portrait"
                    fill
                    sizes="(max-width: 640px) 300px, 360px"
                    className="scale-[1.02] object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 px-1">
              <div className="flex items-center gap-2 rounded-full border border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-panel)/0.92)] px-4 py-2 shadow-md backdrop-blur">
                <MapPin className="h-4 w-4 shrink-0 text-[hsl(var(--accent-strong))]" />
                <div>
                  <span className="block text-xs text-[hsl(var(--text-faint))]">Based in</span>
                  <span className="text-sm font-semibold text-foreground">Mandalay, Myanmar</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-panel)/0.92)] px-4 py-2 shadow-md backdrop-blur">
                <Star className="h-4 w-4 shrink-0 fill-[hsl(var(--accent-soft))] text-[hsl(var(--accent-soft))]" />
                <div>
                  <span className="block text-xs text-[hsl(var(--text-faint))]">Availability</span>
                  <span className="text-sm font-semibold text-foreground">Open to new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
