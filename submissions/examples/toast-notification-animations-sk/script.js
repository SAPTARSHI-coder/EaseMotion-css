
/**
 * Toast Notification System
 * Handles creation, stacking, and auto-dismissal of toast notifications.
 */

(function() {
  'use strict';

  const ToastManager = {
    // Default configuration
    config: {
      duration: 5000,
      animation: 'slide-right'
    },

    /**
     * Create and show a toast
     * @param {Object} options { type, title, message, position, animation }
     */
    show(options) {
      const { 
        type = 'info', 
        title = 'Notification', 
        message = '', 
        position = 'top-right',
        animation = this.config.animation
      } = options;

      // 1. Get or create container for the specific position
      let container = document.querySelector(`.toast-stack.toast-${position}`);
      if (!container) {
        container = document.createElement('div');
        container.className = `toast-stack toast-${position}`;
        document.body.appendChild(container);
      }

      // 2. Create toast element
      const toast = document.createElement('div');
      toast.className = `toast toast-${type} toast-${animation}`;
      
      const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      };

      toast.innerHTML = `
        <div class="toast-icon">${icons[type]}</div>
        <div class="toast-body">
          <span class="toast-title">${title}</span>
          <p class="toast-message">${message}</p>
        </div>
        <button class="toast-close">&times;</button>
        <div class="toast-progress">
          <div class="toast-progress-fill"></div>
        </div>
      `;

      // 3. Setup Progress Bar
      const progressFill = toast.querySelector('.toast-progress-fill');
      progressFill.style.animation = `ease-kf-toast-progress ${this.config.duration}ms linear forwards`;

      // 4. Handle Manual Close
      toast.querySelector('.toast-close').addEventListener('click', () => {
        this.dismiss(toast);
      });

      // 5. Add to DOM
      container.appendChild(toast);

      // 6. Auto-dismiss
      setTimeout(() => {
        if (toast.parentElement) {
          this.dismiss(toast);
        }
      }, this.config.duration);
    },

    /**
     * Dismiss a toast with animation
     * @param {HTMLElement} toast 
     */
    dismiss(toast) {
      toast.classList.add('toast-exit');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }
  };

  // Expose to global scope for the demo
  window.Toast = ToastManager;

})();
