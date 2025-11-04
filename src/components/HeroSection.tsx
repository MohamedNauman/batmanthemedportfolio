import { useEffect, useState } from 'react';

export function HeroSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000); // Update every minute instead of every second
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center visible pb-0 snap-start`}
      style={{ marginBottom: '0px' }}
    >
  {/* Seamless blend with unified overlay */}

      {/* Main content */}
  <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full pt-28 md:pt-32 fade-in">
        {/* Top classification tag */}
        <div className="mb-12 relative z-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass border border-primary/20">
            <div className="w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
            <span className="text-xs text-primary tracking-[0.25em]" style={{ fontFamily: 'var(--font-mono)' }}>
              LIVE SURVEILLANCE
            </span>
            <div className="w-px h-4 bg-primary/30" />
            <span className="text-xs text-gray-500 tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
              ACCESS GRANTED
            </span>
          </div>
        </div>

        {/* Main title with enhanced Batman glow effect */}
        <div className="mb-8 relative z-30 signal-reveal">
          <h1 className="text-8xl md:text-[12rem] mb-2 tracking-tight gotham-glow" style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9, textShadow: '0 0 60px rgba(192, 192, 192, 0.3), 0 0 120px rgba(192, 192, 192, 0.2), 0 0 200px rgba(192, 192, 192, 0.1)' }}>
            <span className="block text-white">
              MOHAMED
            </span>
            <span className="block text-primary" style={{ textShadow: '0 0 40px rgba(192, 192, 192, 0.5), 0 0 80px rgba(192, 192, 192, 0.3)' }}>
              NAUMAN
            </span>
          </h1>
        </div>

        {/* Subtitle with cleaner design */}
        <div className="mb-12 max-w-4xl mx-auto relative z-20">
          <div className="glass-strong rounded-sm px-8 py-6 inline-block">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="text-xs text-primary/60 tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)' }}>
                OPERATIVE DESIGNATION
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            <p className="text-xl md:text-2xl text-gray-200 tracking-wide mb-2" style={{ fontFamily: 'var(--font-subheading)', fontWeight: 500 }}>
              DATA SCIENCE SPECIALIST  AI & ML OPERATIVE
            </p>
            <p className="text-sm text-gray-400 tracking-wide" style={{ fontFamily: 'var(--font-body)' }}>
              Generative AI Researcher | Final Year ISE | Mysuru
            </p>
          </div>
        </div>

        {/* Stats with premium cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16 max-w-3xl mx-auto relative z-20">
          {[
            { label: 'OPERATIONS', value: '04+', color: 'from-blue-500/20 to-blue-500/5' },
            { label: 'PRECISION', value: '95%', color: 'from-green-500/20 to-green-500/5' },
            { label: 'CERTIFICATIONS', value: '12+', color: 'from-purple-500/20 to-purple-500/5' },
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`glass-strong p-6 rounded-sm relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl text-primary mb-2 group-hover:scale-110 transition-transform duration-200" style={{ fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>{stat.label}</div>
                </div>

                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/20 group-hover:border-primary/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/20 group-hover:border-primary/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Timestamp display */}
        <div className="mb-12 relative z-20">
          <div className="glass px-6 py-4 inline-block">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs text-primary/60">TIMESTAMP:</span>
              <span className="text-primary/80 text-sm">{time.toLocaleTimeString()}</span>
              <span className="text-gray-600">|</span>
              <span className="text-primary/80 text-sm">{time.toLocaleDateString()}</span>
            </div>
            <div className="text-xs text-gray-600 mt-1 text-center">COORDINATES: 12.2958°N, 76.6394°E • MYSURU, KARNATAKA</div>
          </div>
        </div>

        {/* CTA buttons with Batman-themed design */}
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap relative z-20">
          <button className="group px-10 py-5 bg-primary text-black border border-primary hover:bg-transparent hover:text-primary batman-hover relative overflow-hidden rounded-sm" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative z-10 tracking-wider" style={{ fontFamily: 'var(--font-subheading)', fontWeight: 700 }}>VIEW OPERATIONS</span>
          </button>

          <button className="group glass-strong px-10 py-5 border border-primary/40 text-primary hover:border-primary hover:bg-primary/10 batman-hover rounded-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="tracking-wider" style={{ fontFamily: 'var(--font-subheading)', fontWeight: 700 }}>MAKE CONTACT</span>
          </button>
        </div>

        {/* Compact scroll indicator (no timestamp overlay) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-3">
            <div className="text-xs text-primary/60 tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)' }}>SCROLL</div>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
