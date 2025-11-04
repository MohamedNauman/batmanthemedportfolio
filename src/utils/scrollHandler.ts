// Centralized scroll handler for performance optimization
class ScrollHandler {
  private listeners: Set<(scrollY: number, progress: number) => void> = new Set();
  private ticking = false;
  private lastScrollY = 0;
  private rafId: number | null = null;

  constructor() {
    this.bindEvents();
  }

  private bindEvents() {
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
  }

  private onScroll() {
    if (!this.ticking) {
      this.rafId = requestAnimationFrame(this.update.bind(this));
      this.ticking = true;
    }
  }

  private update() {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / documentHeight, 1);

    this.lastScrollY = scrollY;
    this.listeners.forEach(listener => listener(scrollY, progress));
    this.ticking = false;
  }

  public addListener(callback: (scrollY: number, progress: number) => void) {
    this.listeners.add(callback);
  }

  public removeListener(callback: (scrollY: number, progress: number) => void) {
    this.listeners.delete(callback);
  }

  public destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
}

// Singleton instance
export const scrollHandler = new ScrollHandler();
