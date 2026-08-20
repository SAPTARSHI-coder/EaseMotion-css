/**
 * EaseMotion CSS — ease-toast-stack script.js
 * High-fidelity, stackable toast notification system controller.
 */

(function (global) {
  'use strict';

  // Default configuration options
  const defaults = {
    position: 'top-right',      // top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
    duration: 4000,             // Auto-dismiss timeout in ms (set to 0 or null to disable auto-dismiss)
    maxToasts: 5,               // Maximum number of visible toasts in a stack
    dismissible: true           // Show manual close button
  };

  // Modern SVG Icons for the 4 variants
  const ICONS = {
    success: `<svg class="ease-toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    error: `<svg class="ease-toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    danger: `<svg class="ease-toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    warning: `<svg class="ease-toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    info: `<svg class="ease-toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
  };

  const CLOSE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  /**
   * Pauseable Timer class to handle hover state pause and resume
   */
  class PauseableTimer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.resume();
    }

    pause() {
      window.clearTimeout(this.id);
      this.remaining -= Date.now() - this.start;
    }

    resume() {
      if (this.remaining <= 0) return;
      this.start = Date.now();
      window.clearTimeout(this.id);
      this.id = window.setTimeout(this.callback, this.remaining);
    }

    clear() {
      window.clearTimeout(this.id);
    }
  }

  // Toast API constructor
  const toastManager = {
    settings: { ...defaults },

    /**
     * Override default configuration parameters globally
     */
    configure(options) {
      this.settings = { ...this.settings, ...options };
      return this;
    },

    /**
     * Get or create container for a specific position preset
     */
    _getContainer(position) {
      let container = document.querySelector(`.ease-toast-container.ease-toast-${position}`);
      if (!container) {
        container = document.createElement('div');
        container.className = `ease-toast-container ease-toast-${position}`;
        // Accessibility features: role status & polite screen announcements
        container.setAttribute('role', 'status');
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'true');
        document.body.appendChild(container);
      }
      return container;
    },

    /**
     * Animate a toast wrapper out and remove it from the DOM
     */
    dismiss(wrapper) {
      if (!wrapper || wrapper.classList.contains('ease-toast-exit')) return;

      wrapper.classList.add('ease-toast-exit');

      // Clear countdown timers
      if (wrapper._timer) {
        wrapper._timer.clear();
      }

      // Check transitionend event for smooth collapse reflow
      const handleTransitionEnd = (e) => {
        if (e.propertyName === 'grid-template-rows') {
          wrapper.remove();
        }
      };

      wrapper.addEventListener('transitionend', handleTransitionEnd);

      // Fallback timer to ensure element cleanup (in case of tab inactivity or reduced-motion)
      setTimeout(() => {
        wrapper.remove();
      }, 350);
    },

    /**
     * Clear all active toasts in all containers
     */
    clearAll() {
      const wrappers = document.querySelectorAll('.ease-toast-wrapper');
      wrappers.forEach(wrapper => this.dismiss(wrapper));
    },

    /**
     * Core show method
     */
    show(options = {}) {
      // Merge local call options with default settings
      const config = { ...this.settings, ...options };
      
      const container = this._getContainer(config.position);

      // Max stack height overflow handling (FIFO)
      const activeToasts = container.querySelectorAll('.ease-toast-wrapper:not(.ease-toast-exit)');
      if (activeToasts.length >= config.maxToasts) {
        // Dismiss the oldest active toast
        this.dismiss(activeToasts[0]);
      }

      // Create collapsible Grid wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'ease-toast-wrapper ease-toast-enter';

      // Create inner alignment container
      const inner = document.createElement('div');
      inner.className = 'ease-toast-inner';

      // Create actual toast body
      const toastEl = document.createElement('div');
      const variant = config.variant || 'info';
      toastEl.className = `ease-toast ease-toast-${variant}`;
      
      if (config.duration && config.duration > 0) {
        toastEl.style.setProperty('--toast-duration', `${config.duration}ms`);
      }

      // 1. Icon Insertion
      const iconMarkup = config.icon || ICONS[variant] || '';
      if (iconMarkup) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'ease-toast-icon-container';
        iconDiv.innerHTML = iconMarkup;
        toastEl.appendChild(iconDiv);
      }

      // 2. Text Content Insertion
      const bodyDiv = document.createElement('div');
      bodyDiv.className = 'ease-toast-body';
      
      if (config.title) {
        const titleEl = document.createElement('strong');
        titleEl.textContent = config.title;
        bodyDiv.appendChild(titleEl);
      }
      
      if (config.message) {
        const messageEl = document.createElement('p');
        messageEl.textContent = config.message;
        bodyDiv.appendChild(messageEl);
      }
      toastEl.appendChild(bodyDiv);

      // 3. Manual Close Button Insertion
      if (config.dismissible) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'ease-toast-close';
        closeBtn.setAttribute('aria-label', 'Close notification');
        closeBtn.innerHTML = CLOSE_ICON;
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.dismiss(wrapper);
        });
        toastEl.appendChild(closeBtn);
      }

      // 4. Progress Countdown Visualizer Bar
      let timer = null;
      if (config.duration && config.duration > 0) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'ease-toast-progress-bar';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'ease-toast-progress';
        progressContainer.appendChild(progressFill);
        
        toastEl.appendChild(progressContainer);

        // Instantiate pauseable countdown timer
        timer = new PauseableTimer(() => {
          this.dismiss(wrapper);
        }, config.duration);

        wrapper._timer = timer;

        // Sync hover states: Pause and Resume
        toastEl.addEventListener('mouseenter', () => {
          if (!wrapper.classList.contains('ease-toast-exit')) {
            timer.pause();
          }
        });
        toastEl.addEventListener('mouseleave', () => {
          if (!wrapper.classList.contains('ease-toast-exit')) {
            timer.resume();
          }
        });
      }

      inner.appendChild(toastEl);
      wrapper.appendChild(inner);

      // Append new toast to the DOM container
      container.appendChild(wrapper);

      // Trigger entrance class animations on next frame for robust rendering
      requestAnimationFrame(() => {
        // Reset entry class just in case to start animation cycle smoothly
        wrapper.classList.remove('ease-toast-enter');
        void wrapper.offsetWidth; // Force reflow
        wrapper.classList.add('ease-toast-enter');
      });

      return {
        id: wrapper,
        dismiss: () => this.dismiss(wrapper)
      };
    },

    // Shorthand helpers for individual variants
    success(title, message, options = {}) {
      if (typeof title === 'object') return this.show({ ...title, variant: 'success' });
      return this.show({ ...options, title, message, variant: 'success' });
    },

    error(title, message, options = {}) {
      if (typeof title === 'object') return this.show({ ...title, variant: 'error' });
      return this.show({ ...options, title, message, variant: 'error' });
    },

    warning(title, message, options = {}) {
      if (typeof title === 'object') return this.show({ ...title, variant: 'warning' });
      return this.show({ ...options, title, message, variant: 'warning' });
    },

    info(title, message, options = {}) {
      if (typeof title === 'object') return this.show({ ...title, variant: 'info' });
      return this.show({ ...options, title, message, variant: 'info' });
    }
  };

  // Expose to global window object
  global.toast = toastManager;

})(typeof window !== 'undefined' ? window : this);
