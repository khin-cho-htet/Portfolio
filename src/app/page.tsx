import { Hero } from '@/components/portfolio/hero';
import { Timeline } from '@/components/portfolio/timeline';
import { Projects } from '@/components/portfolio/projects';
import { Skills } from '@/components/portfolio/skills';
import { Certifications } from '@/components/portfolio/certifications';
import { ThemeToggle } from '@/components/theme-toggle';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function Home() {
  const currentYear = 2026;
  const headerLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Credentials' },
  ];

  return (
    <main className="relative min-h-screen bg-background blueprint-dots">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-page)/0.92)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-10">
          <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4 lg:flex-1">
            <div className="min-w-0 space-y-1.5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="truncate font-headline text-lg font-extrabold tracking-[-0.03em] text-foreground sm:text-xl">
                  Khin Cho Htet
                </span>
                <span className="hidden whitespace-nowrap rounded-full border border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel)/0.68)] px-3 py-1 text-xs font-medium text-[hsl(var(--text-muted))] md:inline-block">
                  Senior Business Analyst
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <a
                href="mailto:khinchohtet15@gmail.com"
                className="rounded-full border border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-panel)/0.7)] px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-[hsl(var(--accent-soft))] hover:bg-[hsl(var(--surface-panel))]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[hsl(var(--border-soft))] pt-3 lg:flex-1 lg:border-t-0 lg:pt-0">
            <nav className="-mx-1 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-1 pb-1 text-sm font-medium text-[hsl(var(--text-muted))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:pb-0">
              {headerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="shrink-0 rounded-full px-3 py-2 transition-colors hover:bg-[hsl(var(--surface-panel)/0.75)] hover:text-foreground lg:px-4"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
            <div className="shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div id="about">
        <Hero />
      </div>

      <div id="experience">
        <Timeline />
      </div>

      <Projects />

      <div id="skills">
        <Skills />
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <footer className="border-t border-[hsl(var(--border-soft))] bg-[hsl(var(--surface-panel))] px-8 py-24 font-sans text-[hsl(var(--text-muted))]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="font-headline text-3xl font-bold tracking-tight text-foreground">Khin Cho Htet</div>
              <p className="max-w-xs text-sm leading-relaxed text-[hsl(var(--text-muted))]">
                Empowering financial sectors and businesses through precise enterprise analysis and system implementations.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2.5 transition-colors hover:text-[hsl(var(--accent-strong))]"><Mail className="h-4 w-4 text-[hsl(var(--accent-soft))]" /> khinchohtet15@gmail.com</li>
                <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-[hsl(var(--accent-soft))]" /> Mandalay, Myanmar</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">Platforms</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-[hsl(var(--accent-strong))]">
                    <Globe className="h-4 w-4 text-[hsl(var(--accent-soft))]" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">Languages</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex max-w-[180px] justify-between"><span>English</span><span className="text-[hsl(var(--text-faint))]">Fluent</span></li>
                <li className="flex max-w-[180px] justify-between"><span>Burmese</span><span className="text-[hsl(var(--text-faint))]">Native</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 border-t border-[hsl(var(--border-soft))] pt-8 text-center text-sm text-[hsl(var(--text-faint))]">
            © {currentYear} Khin Cho Htet. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
