/**
 * EaseMotion CSS — Toast Notification Utility
 * Lightweight, zero-dependency JS to handle Toast DOM injection,
 * automatic cleanup, and entry/exit CSS animations.
 */

const easeToast = (function() {
  let toastContainer = null;

  // Initialize container if it doesn't exist
  function initContainer(position = 'ease-toast-bottom-right') {
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = `ease-toast-container ${position}`;
      document.body.appendChild(toastContainer);
    }
    return toastContainer;
  }

  // Icons SVG strings
  const icons = {
    success: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    danger: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    warning: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    info: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
  };

  /**
   * Main show method
   * @param {Object} options 
   * @param {string} options.title - Toast title
   * @param {string} options.message - Toast message body
   * @param {string} options.type - 'success', 'danger', 'warning', 'info', or 'primary'
   * @param {number} options.duration - Duration in ms before auto-close (0 for sticky)
   */
  function show(options) {
    const opts = Object.assign({
      title: '',
      message: '',
      type: 'info',
      duration: 3000
    }, options);

    const container = initContainer();

    // Create Toast Element
    const toast = document.createElement('div');
    toast.className = `ease-toast ease-toast-${opts.type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');

    // Build internal HTML structure
    let innerHTML = '';
    
    // Icon
    if (icons[opts.type]) {
      innerHTML += `<div class="ease-toast-icon">${icons[opts.type]}</div>`;
    }

    // Content
    innerHTML += `<div class="ease-toast-content">`;
    if (opts.title) innerHTML += `<div class="ease-toast-title">${opts.title}</div>`;
    if (opts.message) innerHTML += `<p class="ease-toast-message">${opts.message}</p>`;
    innerHTML += `</div>`;

    // Close Button
    innerHTML += `
      <button class="ease-toast-close" aria-label="Close notification">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `;

    // Progress Bar (if duration > 0)
    if (opts.duration > 0) {
      innerHTML += `<div class="ease-toast-progress" style="animation-duration: ${opts.duration}ms;"></div>`;
    }

    toast.innerHTML = innerHTML;
    container.appendChild(toast);

    // Setup Close behavior
    let timeoutId;
    
    const removeToast = () => {
      // Apply CSS exit animation
      toast.classList.add('ease-toast-exit');
      
      // Wait for animation to finish before removing from DOM
      toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'ease-toast-slide-out') {
          toast.remove();
        }
      }, { once: true });
    };

    // Close on button click
    toast.querySelector('.ease-toast-close').addEventListener('click', () => {
      if (timeoutId) clearTimeout(timeoutId);
      removeToast();
    });

    // Auto-close on timeout
    if (opts.duration > 0) {
      timeoutId = setTimeout(() => {
        removeToast();
      }, opts.duration);
      
      // Pause timeout on hover
      toast.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        toast.querySelector('.ease-toast-progress').style.animationPlayState = 'paused';
      });
      
      // Resume timeout on mouseleave
      // Note: Re-calculating remaining time is complex for a simple utility, 
      // so we just restart the full duration for simplicity in this demo.
      toast.addEventListener('mouseleave', () => {
        toast.querySelector('.ease-toast-progress').style.animationPlayState = 'running';
        // Reset animation
        const prog = toast.querySelector('.ease-toast-progress');
        prog.style.animation = 'none';
        void prog.offsetWidth; // trigger reflow
        prog.style.animation = `ease-toast-shrink ${opts.duration}ms linear forwards`;
        
        timeoutId = setTimeout(() => {
          removeToast();
        }, opts.duration);
      });
    }

    return toast;
  }

  // Convenience methods
  return {
    show,
    success: (msg, title = 'Success') => show({ type: 'success', message: msg, title: title }),
    error:   (msg, title = 'Error')   => show({ type: 'danger',  message: msg, title: title }),
    info:    (msg, title = 'Info')    => show({ type: 'info',    message: msg, title: title }),
    warning: (msg, title = 'Warning') => show({ type: 'warning', message: msg, title: title })
  };

})();
