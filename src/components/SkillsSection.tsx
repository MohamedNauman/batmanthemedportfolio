import { useRef, useState, useEffect } from 'react';
import { scrollHandler } from '../utils/scrollHandler';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', level: 92 },
      { name: 'Deep Learning', level: 90 },
      { name: 'Generative AI', level: 88 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Natural Language Processing', level: 87 },
    ],
    color: 'from-blue-500/30',
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'TensorFlow / Keras', level: 90 },
      { name: 'LangChain & RAG', level: 88 },
      { name: 'Large Language Models', level: 86 },
      { name: 'BERT & Transformers', level: 85 },
      { name: 'XGBoost / SHAP', level: 82 },
    ],
    color: 'from-purple-500/30',
  },
  {
    title: 'Development',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL & Databases', level: 85 },
      { name: 'AWS / Cloud Platforms', level: 80 },
      { name: 'Git / Version Control', level: 88 },
      { name: 'Streamlit / Gradio', level: 87 },
    ],
    color: 'from-green-500/30',
  },
  {
    title: 'Data Science',
    skills: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Tableau / Power BI', level: 83 },
      { name: 'Time Series Analysis', level: 82 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Statistical Analysis', level: 88 },
    ],
    color: 'from-orange-500/30',
  },
];

const additionalSkills = [
  'Supervised Learning',
  'Unsupervised Learning',
  'Reinforcement Learning',
  'CNNs',
  'Encoder-Decoder',
  'Prompt Engineering',
  'Vector Stores',
  'Ollama',
  'Hugging Face',
  'Cohere',
  'Oracle Cloud',
  'HTML5',
];

export function SkillsSection() {
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
    <section id="skills" ref={ref} className={`-mt-8 py-32 px-6 relative snap-start ${isVisible ? 'visible' : ''}`}>
      {/* Unified vignette overlay provides consistent atmosphere */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`mb-20 ${isVisible ? 'animate' : ''}`}
        >
          <div className="flex items-center gap-4 mb-6 slide-in-left animate-delay-100">
            <div
              className="text-xs text-primary/60 tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              03
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>

          <h2
            className="text-6xl md:text-8xl mb-6 text-white tracking-tight slide-in-right animate-delay-200"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}
          >
            SKILLS & EXPERTISE
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg slide-in-up animate-delay-300" style={{ fontFamily: 'var(--font-body)' }}>
            Technical proficiencies across AI, ML, and modern development stack
          </p>
        </div>

        {/* Skills grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate' : ''}`}>
          {skillCategories.map((category, categoryIndex) => {
            const cardDelay = categoryIndex * 0.1;
            return (
              <div
                key={categoryIndex}
                className="group slide-in-up batman-hover"
                style={{
                  animationDelay: `${0.4 + categoryIndex * 0.1}s`
                }}
              >
                <div className="glass-strong p-7 rounded-sm h-full relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/20 group-hover:border-primary/40 transition-colors" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/20 group-hover:border-primary/40 transition-colors" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8 pb-6 border-b border-gray-800/50">
                      <h3
                        className="text-lg text-white group-hover:text-primary gotham-glow transition-colors"
                        style={{ fontFamily: 'var(--font-subheading)', fontWeight: 600 }}
                      >
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Skills */}
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => {
                        const delay = categoryIndex * 0.1 + skillIndex * 0.1;
                        return (
                          <div key={skillIndex}>
                            <div className="flex justify-between mb-3">
                              <span 
                                className="text-sm text-gray-300" 
                                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                              >
                                {skill.name}
                              </span>
                              <span 
                                className="text-sm text-primary"
                                style={{ fontFamily: 'var(--font-mono)' }}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            
                            <div className="h-1.5 bg-black/80 rounded-full overflow-hidden relative">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-primary/60 relative rounded-full"
                                style={{
                                  width: isVisible ? `${skill.level}%` : '0%',
                                  transition: `width 1.5s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional skills */}
        <div
          className={`glass-strong p-10 rounded-sm slide-in-up ${isVisible ? 'animate' : ''}`}
          style={{
            animationDelay: '0.8s'
          }}
        >
          <div className="flex items-center gap-4 mb-8 slide-in-left animate-delay-100">
            <h3
              className="text-2xl text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ADDITIONAL CAPABILITIES
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-2.5 bg-black/60 border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all rounded-sm slide-in-up"
                style={{
                  animationDelay: `${0.9 + index * 0.05}s`
                }}
              >
                <span
                  className="text-sm text-gray-300"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
