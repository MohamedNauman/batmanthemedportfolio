import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { BatmanBackground } from './components/BatmanBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative snap-y snap-proximity" style={{ scrollBehavior: 'smooth', scrollPaddingTop: '80px' }}>
      <BatmanBackground />
      <div className="relative z-0">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>

      {/* Subtle vignette overlay for background visibility */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/2 via-transparent to-black/2" />
      </div>
    </div>
  );
}
