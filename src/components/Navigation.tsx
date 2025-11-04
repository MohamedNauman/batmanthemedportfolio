import { useState, useEffect } from 'react';
import { scrollHandler } from '../utils/scrollHandler';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = (scrollY: number) => {
      setScrolled(scrollY > 50);

      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    scrollHandler.addListener(handleScroll);
    return () => scrollHandler.removeListener(handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'PROFILE' },
    { id: 'projects', label: 'WORK' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className={`mx-auto transition-all duration-300 ${
        scrolled ? 'max-w-full px-6' : 'max-w-7xl px-6'
      }`}>
        <div className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled ? 'glass-strong rounded-sm' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-colors duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-primary tracking-wider gotham-glow"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  MN
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className="text-sm text-primary tracking-wider leading-none gotham-glow"
                style={{ fontFamily: 'var(--font-subheading)', fontWeight: 600 }}
              >
                MOHAMED NAUMAN
              </div>
              <div
                className="text-xs text-gray-500 mt-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                AI/ML SPECIALIST
              </div>
            </div>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-1 glass rounded-sm p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 batman-hover text-xs rounded-sm ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 gotham-glow'
                    : 'text-gray-400 hover:text-primary hover:bg-primary/5'
                }`}
                style={{ fontFamily: 'var(--font-subheading)', fontWeight: 600, letterSpacing: '0.1em' }}
              >
                {item.label}
                {activeSection === item.id && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary transition-all duration-300 gotham-glow"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 glass px-4 py-2.5 rounded-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span
                className="text-xs text-primary tracking-wider gotham-glow"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                AVAILABLE
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden glass p-3 rounded-sm transition-all duration-200"
            onClick={() => {
              // Toggle mobile menu (implement if needed)
            }}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-primary" />
              <span className="w-full h-0.5 bg-primary" />
              <span className="w-full h-0.5 bg-primary" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
