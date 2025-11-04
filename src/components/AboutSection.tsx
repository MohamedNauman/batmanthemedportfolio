import { useRef, useState, useEffect } from 'react';
import { scrollHandler } from '../utils/scrollHandler';

export function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
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
  <section id="about" ref={ref} className={`-mt-8 pt-0 pb-32 px-6 relative ${isVisible ? 'visible' : ''} snap-start`}>
    {/* Seamless blend with unified overlay */}

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6 slide-in-left animate-delay-100">
            <div
              className="text-xs text-primary/60 tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              01
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>

          <h2
            className="text-6xl md:text-8xl mb-6 text-white tracking-tight slide-in-right animate-delay-200"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}
          >
            ABOUT ME
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg slide-in-up animate-delay-300" style={{ fontFamily: 'var(--font-body)' }}>
            Data Science specialist with expertise in AI, Machine Learning, and Generative AI systems
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left column - Main bio */}
          <div className="lg:col-span-3 space-y-8">
            {/* Bio content with glass effect */}
            <div className={`glass-strong p-10 rounded-sm relative overflow-hidden group slide-in-left animate-delay-400 ${isVisible ? 'animate' : ''}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-6 text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
                <p className="text-lg leading-relaxed slide-in-up animate-delay-500">
                  I'm a <span className="text-primary font-medium gotham-glow">final-year Information Science & Engineering student</span> at
                  Vidya Vikas Institute of Engineering & Technology, Mysore, specializing in cutting-edge
                  <span className="text-primary font-medium gotham-glow"> Data Science, Machine Learning, and Generative AI</span> technologies.
                </p>

                <p className="text-base leading-relaxed text-gray-400 slide-in-up animate-delay-600">
                  My expertise lies in developing <span className="text-primary gotham-glow">AI-powered solutions</span> that leverage
                  advanced machine learning algorithms, deep learning architectures, and state-of-the-art language models.
                  I'm proficient in deploying scalable systems using <span className="text-primary gotham-glow">TensorFlow, PyTorch, LangChain</span>,
                  and cloud infrastructure.
                </p>

                <p className="text-base leading-relaxed text-gray-400 slide-in-up animate-delay-700">
                  I specialize in <span className="text-primary gotham-glow">Retrieval-Augmented Generation (RAG)</span> systems,
                  computer vision applications, and building intelligent document analysis platforms that transform
                  how organizations interact with data.
                </p>
              </div>
            </div>

            {/* Skills preview tags */}
            <div className={`flex flex-wrap gap-3 slide-in-up animate-delay-800 ${isVisible ? 'animate' : ''}`}>
              {[
                'Machine Learning',
                'Deep Learning',
                'Generative AI',
                'TensorFlow',
                'LangChain',
                'RAG Systems',
                'Computer Vision',
                'NLP',
              ].map((skill, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 glass border border-primary/30 hover:border-primary/60 hover:bg-primary/10 batman-hover rounded-sm slide-in-up"
                  style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                >
                  <span
                    className="text-sm text-primary"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Stats and info cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats cards */}
            <div className={`grid grid-cols-2 gap-4 slide-in-right animate-delay-400 ${isVisible ? 'animate' : ''}`}>
              {[
                { value: '04+', label: 'Projects', color: 'from-blue-500/20' },
                { value: '12+', label: 'Certifications', color: 'from-purple-500/20' },
                { value: '95%', label: 'Accuracy', color: 'from-green-500/20' },
                { value: '100%', label: 'Dedication', color: 'from-red-500/20' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-strong p-6 text-center rounded-sm relative overflow-hidden group transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 slide-in-up"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div
                      className="text-4xl text-primary mb-2"
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
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="glass-strong p-8 rounded-sm space-y-5">
              <div 
                className="text-xs text-primary/60 tracking-[0.2em] mb-6"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                CURRENT STATUS
              </div>
              
              {[
                { label: 'Role', value: 'AI/ML Specialist' },
                { label: 'Focus', value: 'Generative AI & RAG' },
                { label: 'Status', value: 'Final Year Student', badge: true },
                { label: 'Location', value: 'Mysuru, Karnataka' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-800/50 last:border-0">
                  <span 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                  </span>
                  <span 
                    className={`text-sm ${item.badge ? 'text-green-400' : 'text-primary'}`}
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Clearance badge */}
            <div className={`glass border-2 border-primary/40 p-8 text-center rounded-sm relative overflow-hidden group transform transition-all duration-200 hover:scale-102 hover:-translate-y-1 ${isVisible ? 'animate' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div 
                  className="text-xs text-primary/60 mb-3 tracking-[0.2em]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  AVAILABLE FOR
                </div>
                <div 
                  className="text-3xl text-primary mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  COLLABORATION
                </div>
                <div 
                  className="text-xs text-gray-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Open to AI/ML opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
