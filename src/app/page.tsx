import { Hero } from '@/components/portfolio/hero';
import { Timeline } from '@/components/portfolio/timeline';
import { Projects } from '@/components/portfolio/projects';
import { Skills } from '@/components/portfolio/skills';
import { Certifications } from '@/components/portfolio/certifications';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function Home() {
  const currentYear = 2026;

  return (
    <main className="relative bg-[#0c0d12] min-h-screen selection:bg-[#9B86BD]/20 blueprint-dots">
      {/* Sleek, Top-Aligned Structural Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0c0d12]/80 backdrop-blur-md px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          {/* Logo / Personal Brand */}
          <div className="flex items-center gap-3">
            <span className="font-headline font-bold text-lg tracking-tight text-white uppercase">
              Khin Cho Htet
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-[#9B86BD] border border-[#9B86BD]/20 px-2 py-0.5 uppercase tracking-widest bg-[#9B86BD]/5">
              [ SENIOR BA // ENTERPRISE SYSTEMS ]
            </span>
          </div>

          {/* Real-time details for niche editorial design */}
          <div className="hidden lg:flex items-center gap-2 font-mono text-[9px] text-white/40 tracking-wider">
            <span>MANDALAY, MYANMAR</span>
            <span className="text-white/20">•</span>
            <span>21° 58&apos; N // 96° 05&apos; E</span>
          </div>
          
          {/* Precise Monospace Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-[10px] text-white/60 uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-1 group">
              <span className="text-[#9B86BD]">01//</span>about
            </a>
            <a href="#experience" className="hover:text-white transition-colors flex items-center gap-1 group">
              <span className="text-[#9B86BD]">02//</span>experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors flex items-center gap-1 group">
              <span className="text-[#9B86BD]">03//</span>skills
            </a>
            <a href="#certifications" className="hover:text-white transition-colors flex items-center gap-1 group">
              <span className="text-[#9B86BD]">04//</span>credentials
            </a>
          </nav>
          
          {/* Action Button */}
          <div className="flex items-center">
            <a 
              href="mailto:khinchohtet15@gmail.com" 
              className="px-5 py-2 border border-[#9B86BD] hover:bg-[#9B86BD]/10 text-white font-mono text-[10px] uppercase tracking-wider transition-all duration-300"
            >
              Get in Touch
            </a>
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
              <div className="font-headline font-bold text-2xl text-white uppercase tracking-tight">Khin Cho Htet</div>
              <p className="text-xs text-[#8e8ca2] max-w-xs leading-relaxed">
                Empowering financial sectors and businesses through precise enterprise analysis and system implementations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-mono font-bold uppercase tracking-widest text-[10px] text-white">Contact</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2.5 hover:text-[#C57BCC] transition-colors"><Mail className="w-4 h-4 text-[#9B86BD]" /> khinchohtet15@gmail.com</li>
                <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-[#9B86BD]" /> Mandalay, Myanmar</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono font-bold uppercase tracking-widest text-[10px] text-white">Platforms</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://linkedin.com/in/khin-cho-htet/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C57BCC] flex items-center gap-2.5 transition-colors">
                    <Globe className="w-4 h-4 text-[#9B86BD]" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.sarphat.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C57BCC] flex items-center gap-2.5 transition-colors">
                    <Globe className="w-4 h-4 text-[#9B86BD]" /> Sarphat
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono font-bold uppercase tracking-widest text-[10px] text-white">Languages</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between max-w-[180px]"><span>English</span><span className="text-white/60">Fluent</span></li>
                <li className="flex justify-between max-w-[180px]"><span>Burmese</span><span className="text-white/60">Native</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] tracking-widest uppercase text-white/20 font-mono">
            © {currentYear} Khin Cho Htet. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
