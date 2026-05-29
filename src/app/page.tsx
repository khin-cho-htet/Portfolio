
import { Hero } from '@/components/portfolio/hero';
import { Timeline } from '@/components/portfolio/timeline';
import { Projects } from '@/components/portfolio/projects';
import { Skills } from '@/components/portfolio/skills';
import { Certifications } from '@/components/portfolio/certifications';
import { AIChat } from '@/components/portfolio/ai-chat';
import { Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-headline font-bold text-2xl tracking-tighter">
            KHIN<span className="text-primary">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="mailto:khinchohtet15@gmail.com" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
              Get in touch
            </a>
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

      <footer className="py-20 px-6 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="font-headline font-bold text-2xl">KHIN CHO HTET</div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Empowering businesses through data-driven analysis and ERP excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> khinchohtet15@gmail.com</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +959 789841900</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mandalay, Myanmar</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary">Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://linkedin.com/in/khin-cho-htet/" className="hover:text-primary flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><a href="https://www.panoramyanmar.com/" className="hover:text-primary flex items-center gap-2"><Globe className="w-4 h-4" /> Panorama Myanmar</a></li>
                <li><a href="https://www.sarphat.com/" className="hover:text-primary flex items-center gap-2"><Globe className="w-4 h-4" /> Sarphat</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary">Languages</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>English: Fluent</li>
                <li>Burmese: Native</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Khin Cho Htet. All rights reserved.
          </div>
        </div>
      </footer>

      <AIChat />
    </main>
  );
}
