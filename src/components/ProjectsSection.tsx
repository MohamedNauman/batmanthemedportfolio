import { useRef, useState, useEffect } from 'react';
import { scrollHandler } from '../utils/scrollHandler';

const projects = [
  {
    id: '01',
    title: 'TerraScopeAI',
    category: 'Global Intelligence',
    description: 'Advanced AI-based global risk forecasting system utilizing machine learning algorithms, SHAP explainability frameworks, and policy simulation protocols to model environmental and societal futures with unprecedented accuracy.',
    tech: ['Machine Learning', 'SHAP', 'Python', 'Data Analysis', 'Predictive Models'],
    date: 'Jul 2025 - Aug 2025',
    impact: '95% Accuracy',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: '02',
    title: 'Skin Cancer Detection',
    category: 'Medical AI',
    description: 'AI-powered melanoma detection system deploying deep learning neural networks to classify 9 distinct types of skin lesions from dermatoscopic imagery achieving 95%+ operational accuracy in clinical validation.',
    tech: ['TensorFlow', 'Computer Vision', 'Deep Learning', 'CNN', 'Healthcare AI'],
    date: 'May 2024 - Jun 2024',
    impact: '95%+ Accuracy',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: '03',
    title: 'RAG Chatbot',
    category: 'Generative AI',
    description: 'Intelligent document-based interrogation system using Retrieval-Augmented Generation powered by Ollama\'s local LLMs (Gemma). Supports multi-format document ingestion including PDF, DOCX, and PPTX with semantic search capabilities.',
    tech: ['LangChain', 'FAISS', 'Ollama', 'Gradio', 'RAG', 'Vector DB'],
    date: 'Jul 2025 - Aug 2025',
    impact: 'Enterprise Ready',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: '04',
    title: 'Movie Recommendation',
    category: 'NLP & ML',
    description: 'Advanced recommendation engine utilizing BERT embeddings and cosine similarity algorithms to predict user preferences. Features intelligent content filtering deployed via interactive Streamlit interface.',
    tech: ['BERT', 'NLP', 'Python', 'Streamlit', 'Embeddings'],
    date: 'Oct 2024 - Dec 2024',
    impact: 'Real-time Inference',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="projects"
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
              02
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>

          <h2
            className="text-6xl md:text-8xl mb-6 text-white tracking-tight slide-in-right animate-delay-200"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}
          >
            PROJECT PORTFOLIO
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg slide-in-up animate-delay-300" style={{ fontFamily: 'var(--font-body)' }}>
            Cutting-edge AI and machine learning projects solving real-world challenges
          </p>
  </div>

        {/* Projects grid */}
        <div className={`grid md:grid-cols-2 gap-6 ${isVisible ? 'animate' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group fade-in ${index < 4 ? `animate-delay-${200 + index * 100}` : ''} slide-in-up batman-hover`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="glass-strong p-8 rounded-sm h-full flex flex-col relative overflow-hidden">
                {/* Gradient overlay on hover - enhanced Batman style */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100`}
                  style={{
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    willChange: 'opacity, filter',
                  }}
                />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div 
                      className="text-5xl text-primary/30 group-hover:text-primary/50 transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.id}
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-xs text-primary/60 mb-1"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {project.category}
                      </div>
                      <div 
                        className="text-xs text-gray-600"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {project.date}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3
                    className="text-3xl text-white mb-4 group-hover:text-primary gotham-glow transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                    {project.description}
                  </p>

                  {/* Impact badge */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span 
                        className="text-xs text-green-400"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-3">
                    <div 
                      className="text-xs text-gray-600"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      TECHNOLOGIES:
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs bg-black/50 text-primary/80 border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all rounded-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{tech}</span>
                        ))}
                      </div>
                  </div>

                  {/* View button */}
                  <div className="mt-8 pt-6 border-t border-gray-800/50">
                    <button className="flex items-center gap-2 text-sm text-primary hover:text-white transition-colors group/btn" style={{ fontFamily: 'var(--font-subheading)', fontWeight: 600 }}>
                      <span>VIEW PROJECT</span>
                      <span className={hoveredIndex === index ? 'ml-2 transform translate-x-2 transition-transform duration-300' : 'ml-2 transition-transform duration-300'}>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center fade-in animate-delay-800 ${isVisible ? 'animate' : ''}`}>
          <div className="glass-strong inline-block px-8 py-4 rounded-sm">
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              More projects available on{' '}
              <a href="https://github.com/MohamedNauman" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors underline">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
