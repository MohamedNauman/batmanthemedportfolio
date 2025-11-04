import { useState, useRef, useEffect } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { 
        threshold: 0,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback: make contact visible if observer doesn't fire
  useEffect(() => {
    if (isVisible) return;
    const t = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(t);
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      // Send email using EmailJS service
      const serviceID = 'service_123456789';
      const templateID = 'template_123456789';
      const publicKey = 'your_public_key_here';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nauman2420@gmail.com',
      };

      // For now, use a simple mailto approach as fallback
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:nauman2420@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.open(mailtoLink, '_blank');

      alert('Message prepared! Your default email client has opened. Please send the email to complete the contact.');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error preparing message:', error);
      alert('Failed to prepare message. Please contact me directly at nauman2420@gmail.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
      <section id="contact" ref={sectionRef} className={`-mt-8 py-32 px-6 relative snap-start ${isVisible ? 'visible' : ''}`}>
  {/* Unified vignette overlay provides consistent atmosphere */}
      
  <div className="max-w-7xl mx-auto relative z-20">
        {/* Section header */}
        <div className="mb-20 text-center fade-in animate-delay-100">
          <div className="flex items-center justify-center gap-4 mb-6 slide-in-left animate-delay-100">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/20 to-primary/40" />
            <div className="text-xs text-primary/60 tracking-[0.3em]" style={{ fontFamily: 'var(--font-mono)' }}>05</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
          </div>

          <h2 className="text-6xl md:text-8xl mb-6 text-white tracking-tight slide-in-right animate-delay-200" style={{ fontFamily: 'var(--font-heading)', lineHeight: 0.9 }}>GET IN TOUCH</h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg slide-in-up animate-delay-300" style={{ fontFamily: 'var(--font-body)' }}>
            Let's collaborate on innovative AI/ML projects and opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="fade-in animate-delay-200 slide-in-left">
            <div className="glass-strong p-10 rounded-sm">
              <h3 className="text-2xl text-white mb-8 slide-in-up animate-delay-100 gotham-glow" style={{ fontFamily: 'var(--font-heading)' }}>SEND A MESSAGE</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-black/60 border border-primary/20 text-white focus:outline-none focus:border-primary/60 transition-all rounded-sm" placeholder="John Doe" style={{ fontFamily: 'var(--font-body)' }} />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 bg-black/60 border border-primary/20 text-white focus:outline-none focus:border-primary/60 transition-all rounded-sm" placeholder="john@example.com" style={{ fontFamily: 'var(--font-body)' }} />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-sm text-gray-400 mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-5 py-4 bg-black/60 border border-primary/20 text-white focus:outline-none focus:border-primary/60 transition-all resize-none rounded-sm" placeholder="Tell me about your project..." style={{ fontFamily: 'var(--font-body)' }} />
                </div>

                {/* Submit button */}
                <button type="submit" className="w-full py-5 bg-primary text-black border border-primary hover:bg-transparent hover:text-primary batman-hover relative overflow-hidden group rounded-sm cursor-pointer z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative z-10 tracking-wider" style={{ fontFamily: 'var(--font-subheading)', fontWeight: 700 }}>SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-6 fade-in animate-delay-400 slide-in-right">
            {/* Direct contact methods */}
            <div className="glass-strong p-10 rounded-sm space-y-6">
              <h3 className="text-2xl text-white mb-8 slide-in-up animate-delay-100 gotham-glow" style={{ fontFamily: 'var(--font-heading)' }}>CONTACT INFO</h3>
              
              {[{ label: 'Email', value: 'nauman2420@gmail.com', icon: '\u2709', link: 'mailto:nauman2420@gmail.com' }, { label: 'Phone', value: '+91 8073497195', icon: '\u2706', link: 'tel:+918073497195' }, { label: 'Location', value: 'Mysuru, Karnataka', icon: '\u2316' }].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  {item.link ? (
                    <a href={item.link} className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-black border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all rounded-sm">
                        <span className="text-primary text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-body)' }}>{item.label}</div>
                        <div className="text-base text-white group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-black border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/50 transition-all rounded-sm">
                        <span className="text-primary text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-body)' }}>{item.label}</div>
                        <div className="text-base text-white" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="glass-strong p-10 rounded-sm fade-in animate-delay-600 slide-in-up">
              <h3 className="text-2xl text-white mb-8 slide-in-up animate-delay-100" style={{ fontFamily: 'var(--font-heading)' }}>FIND ME ON</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[{ name: 'GitHub', url: 'https://github.com/MohamedNauman', icon: 'GH' }, { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-nauman-4a2045270', icon: 'IN' }].map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="aspect-square bg-black border-2 border-primary/30 flex flex-col items-center justify-center text-primary hover:bg-primary hover:text-black hover:border-primary batman-hover group rounded-sm">
                    <span className="text-3xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{social.icon}</span>
                    <span className="text-xs tracking-wider" style={{ fontFamily: 'var(--font-subheading)', fontWeight: 600 }}>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="glass border-2 border-green-500/40 p-8 text-center rounded-sm relative overflow-hidden fade-in animate-delay-800 slide-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-3 slide-in-up animate-delay-100">
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50" />
                  <span className="text-sm text-green-400 tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>CURRENTLY AVAILABLE</span>
                </div>
                <p className="text-xs text-gray-500 slide-in-up animate-delay-200" style={{ fontFamily: 'var(--font-body)' }}>Open for AI/ML projects and collaboration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 py-12 border-t border-primary/10 bg-black flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-sm mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              © 2025 Mohamed Nauman. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
              BUILT WITH REACT • TAILWIND CSS • MOTION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
