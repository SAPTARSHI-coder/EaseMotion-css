import { defaultConfig } from './config.js';

export class EaseMotionObserver {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
    this.observer = null;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.elements = [];
  }

  init() {
    if (this.prefersReducedMotion.matches) {
      this._revealAll();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._applyAnimation(entry.target);
          
          const once = entry.target.hasAttribute('data-ease-once') 
            ? entry.target.getAttribute('data-ease-once') === 'true'
            : this.config.once;
            
          if (once) {
            this.observer.unobserve(entry.target);
          }
        } else {
          // If not once, we can reset the animation to run again
          const once = entry.target.hasAttribute('data-ease-once') 
            ? entry.target.getAttribute('data-ease-once') === 'true'
            : this.config.once;
            
          if (!once) {
            this._removeAnimation(entry.target);
          }
        }
      });
    }, {
      threshold: this.config.threshold,
      root: this.config.root,
      rootMargin: this.config.rootMargin
    });

    this._scanDOM();

    // Listen for reduced motion changes
    this.prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        this.destroy();
        this._revealAll();
      } else {
        this.init();
      }
    });
  }

  _scanDOM() {
    this.elements = document.querySelectorAll(this.config.selector);
    this.elements.forEach(el => {
      // Set initial state before observer triggers
      el.style.opacity = '0';
      this.observer.observe(el);
    });
  }

  _applyAnimation(el) {
    el.style.opacity = ''; // Reset opacity override
    
    const animation = el.getAttribute('data-ease-scroll');
    const delay = el.getAttribute('data-ease-delay');
    const duration = el.getAttribute('data-ease-duration');

    if (animation) {
      el.classList.add(`ease-${animation}`);
    }
    if (delay) {
      el.classList.add(`delay-${delay}ms`);
    }
    if (duration) {
      el.classList.add(`duration-${duration}ms`);
    }
  }

  _removeAnimation(el) {
    const animation = el.getAttribute('data-ease-scroll');
    const delay = el.getAttribute('data-ease-delay');
    const duration = el.getAttribute('data-ease-duration');

    if (animation) {
      el.classList.remove(`ease-${animation}`);
    }
    if (delay) {
      el.classList.remove(`delay-${delay}ms`);
    }
    if (duration) {
      el.classList.remove(`duration-${duration}ms`);
    }
    
    el.style.opacity = '0'; // Hide again
  }

  _revealAll() {
    const elements = document.querySelectorAll(this.config.selector);
    elements.forEach(el => {
      el.style.opacity = '1';
    });
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
