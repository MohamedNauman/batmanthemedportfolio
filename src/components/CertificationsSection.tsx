import { useRef, useState, useEffect } from 'react';
import { scrollHandler } from '../utils/scrollHandler';

const certifications = [
  {
    title: 'Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    date: 'Jul - Aug 2025',
    category: 'Generative AI',
    level: 'Advanced',
    color: 'from-green-500/20',
  },
  {
    title: 'Oracle Cloud AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Jul - Aug 2025',
    category: 'Cloud & AI',
    level: 'Professional',
    color: 'from-red-500/20',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'Aug 2025',
    category: 'Cloud Computing',
    level: 'Foundational',
    color: 'from-orange-500/20',
  },
  {
    title: 'Computer Vision',
    issuer: 'Kaggle',
    date: 'May 2025',
    category: 'Deep Learning',
    level: 'Intermediate',
    color: 'from-blue-500/20',
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'May 2025',
    category: 'Data Analytics',
    level: 'Professional',
    color: 'from-cyan-500/20',
  },
  {
    title: 'Intermediate Machine Learning',
    issuer: 'Kaggle',
    date: 'Jun 2025',
    category: 'Machine Learning',
    level: 'Intermediate',
    color: 'from-purple-500/20',
  },
  {
    title: 'Introduction to Deep Learning',
    issuer: 'Kaggle',
    date: 'Jun 2025',
    category: 'Deep Learning',
    level: 'Foundational',
    color: 'from-indigo-500/20',
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'Kaggle',
    date: 'May 2025',
    category: 'Machine Learning',
    level: 'Foundational',
    color: 'from-pink-500/20',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: 'Jul 2025',
    category: 'Generative AI',
    level: 'Foundational',
    color: 'from-yellow-500/20',
  },
  {
    title: 'Prompt Engineering for Generative AI',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2025',
    category: 'Generative AI',
    level: 'Intermediate',
    color: 'from-blue-500/20',
  },
  {
    title: 'Time Series Analysis',
    issuer: 'Kaggle',
    date: 'Jun 2025',
    category: 'Data Science',
    level: 'Intermediate',
    color: 'from-teal-500/20',
  },
  {
    title: 'Transformer Models and BERT',
    issuer: 'Google Cloud',
    date: 'Aug 2025',
    category: 'NLP',
    level: 'Advanced',
    color: 'from-violet-500/20',
  },
];

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = (scrollY: number) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const sectionHeight = rect.height;

      const progress = visibleHeight / sectionHeight;
      setScrollProgress(progress);

      // Trigger animations when section becomes visible
      if (progress > 0.1 && !isVisible) {
        setIsVisible(true);
      }
    };

    // Initial check
    handleScroll(window.scrollY);

    // Add scroll listener
    scrollHandler.addListener(handleScroll);

    return () => scrollHandler.removeListener(handleScroll);
  }, [isVisible]);

  // Trigger animations on initial load after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className={`-mt-8 py-32 px-6 relative snap-start ${isVisible ? 'visible' : ''}`}
    >
      {/* Unified vignette overlay provides consistent atmosphere */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20 fade-in animate-delay-100">
          <div className="flex items-center gap-4 mb-6 slide-in-left animate-delay-100">
            <div
              className="text-xs text-primary/60 tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              04
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>

          <h2
            className="text-6xl md:text-8xl mb-6 text-white tracking-tight slide-in-right animate-delay-200"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}
          >
            CERTIFICATIONS
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg slide-in-up animate-delay-300" style={{ fontFamily: 'var(--font-body)' }}>
            Industry-recognized credentials from leading technology organizations
          </p>
  </div>

        {/* Certifications grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 ${isVisible ? 'animate' : ''}`}>
          {certifications.map((cert, index) => (
            <div key={index} className={`group fade-in slide-in-up batman-hover ${
              index < 6 ? `animate-delay-${200 + index * 100}` : ''
            }`} style={{ animationDelay: `${0.4 + index * 0.05}s` }}>
              <div className="glass-strong p-6 rounded-sm h-full flex flex-col relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="px-3 py-1.5 bg-black/60 border border-primary/30 rounded-sm">
                      <span 
                        className="text-xs text-primary/80"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {cert.category}
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-sm">
                      <span 
                        className="text-xs text-primary"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {cert.level}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg text-white mb-4 leading-tight group-hover:text-primary gotham-glow transition-colors flex-1"
                    style={{ fontFamily: 'var(--font-subheading)', fontWeight: 600 }}
                  >
                    {cert.title}
                  </h3>

                  {/* Footer */}
                  <div className="space-y-2 pt-4 border-t border-gray-800/50">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm text-gray-400"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                      >
                        {cert.issuer}
                      </span>
                    </div>
                    <div 
                      className="text-xs text-gray-600"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {cert.date}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-primary/20 group-hover:border-primary/40 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className={`fade-in slide-in-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-strong p-12 rounded-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Certifications', value: '12+', icon: '◆' },
                { label: 'From NVIDIA', value: '01', icon: '◆' },
                { label: 'Cloud Platforms', value: '03', icon: '◆' },
                { label: 'AI/ML Focused', value: '08+', icon: '◆' },
              ].map((stat, index) => (
                <div key={index} className="text-center hover-lift transition-transform duration-200 slide-in-up" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                  <div
                    className="text-4xl text-primary mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-gray-500 tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
