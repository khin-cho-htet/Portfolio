import { Hero } from '@/components/portfolio/hero';
import { Timeline } from '@/components/portfolio/timeline';
import { Projects } from '@/components/portfolio/projects';
import { Skills } from '@/components/portfolio/skills';
import { Certifications } from '@/components/portfolio/certifications';
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
    <main className="relative bg-[#0c0d12] min-h-screen selection:bg-[#9B86BD]/20 blueprint-dots">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/6 bg-[#0c0d12]/92 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4 lg:flex-1">
            <div className="min-w-0 space-y-1.5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="truncate font-headline text-lg font-extrabold tracking-[-0.03em] text-white sm:text-xl">
                  Khin Cho Htet
                </span>
                <span className="hidden md:inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/65 whitespace-nowrap">
                  Senior Business Analyst
                </span>
              </div>
            </div>

            <a
              href="mailto:khinchohtet15@gmail.com"
              className="shrink-0 rounded-full border border-white/14 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-4 border-t border-white/6 pt-3 lg:flex-none lg:border-t-0 lg:pt-0">
            <nav className="-mx-1 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-1 pb-1 text-sm font-medium text-white/70 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:pb-0">
              {headerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="shrink-0 rounded-full px-3 py-2 transition-colors hover:bg-white/[0.05] hover:text-white lg:px-4"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Sections */}
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

      {/* Elegant minimalist footer */}
      <footer className="py-24 px-8 border-t border-white/5 bg-[#0d0e12] text-[#8e8ca2] font-sans">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="space-y-4">
              <div className="font-headline font-bold text-3xl text-white tracking-tight">Khin Cho Htet</div>
              <p className="text-sm text-[#8e8ca2] max-w-xs leading-relaxed">
                Empowering financial sectors and businesses through precise enterprise analysis and system implementations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2.5 hover:text-[#C57BCC] transition-colors"><Mail className="w-4 h-4 text-[#9B86BD]" /> khinchohtet15@gmail.com</li>
                <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-[#9B86BD]" /> Mandalay, Myanmar</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold text-white">Platforms</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C57BCC] flex items-center gap-2.5 transition-colors">
                    <Globe className="w-4 h-4 text-[#9B86BD]" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-semibold text-white">Languages</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between max-w-[180px]"><span>English</span><span className="text-white/60">Fluent</span></li>
                <li className="flex justify-between max-w-[180px]"><span>Burmese</span><span className="text-white/60">Native</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-white/30">
            © {currentYear} Khin Cho Htet. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
