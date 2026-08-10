/* =============================================================
   Interactive Toast Notification Stacking Drawer
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const toastContainer = document.getElementById('toast-container');
  const triggerButtons = document.querySelectorAll('.demo-controls .btn');

  // Configuration
  const TOAST_DURATION = 5000; // 5 seconds
  const MAX_TOASTS = 5;

  const TOAST_DATA = {
    success: {
      title: 'Action Successful',
      message: 'Your changes have been saved successfully.',
      icon: 'icon-success'
    },
    error: {
      title: 'Action Failed',
      message: 'There was a problem saving your changes.',
      icon: 'icon-error'
    },
    warning: {
      title: 'Connection Lost',
      message: 'Attempting to reconnect to the server...',
      icon: 'icon-warning'
    },
    info: {
      title: 'New Update Available',
      message: 'A new version of the application is ready.',
      icon: 'icon-info'
    }
  };

  /**
   * Creates and appends a new toast notification
   * @param {string} type - success, error, warning, or info
   */
  function createToast(type) {
    if (!toastContainer) return;

    // Remove oldest toast if we exceed the limit
    if (toastContainer.childElementCount >= MAX_TOASTS) {
      const oldestToast = toastContainer.firstElementChild;
      if (oldestToast) {
        removeToast(oldestToast);
      }
    }

    const data = TOAST_DATA[type] || TOAST_DATA.info;
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');

    // Toast HTML Structure
    toast.innerHTML = `
      <div class="toast__icon" aria-hidden="true">
        <svg width="24" height="24">
          <use href="#${data.icon}"></use>
        </svg>
      </div>
      <div class="toast__content">
        <span class="toast__title">${data.title}</span>
        <span class="toast__message">${data.message}</span>
      </div>
      <button class="toast__close" aria-label="Close notification" type="button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="toast__progress" style="animation: toast-progress ${TOAST_DURATION}ms linear forwards;"></div>
    `;

    // Append to container
    toastContainer.appendChild(toast);

    // Setup close button listener
    const closeBtn = toast.querySelector('.toast__close');
    closeBtn.addEventListener('click', () => {
      removeToast(toast);
    });

    // Auto-dismiss timer
    const timeoutId = setTimeout(() => {
      removeToast(toast);
    }, TOAST_DURATION);

    // Store timeout ID on element so we could optionally pause on hover
    toast.dataset.timeoutId = timeoutId;
  }

  /**
   * Animates out and removes a toast element from the DOM
   * @param {HTMLElement} toast 
   */
  function removeToast(toast) {
    if (toast.classList.contains('is-closing')) return;

    // Clear the timeout to prevent double-firing if manually closed
    clearTimeout(Number(toast.dataset.timeoutId));

    toast.classList.add('is-closing');
    
    // Wait for fade-out animation to complete before removing from DOM
    toast.addEventListener('animationend', (e) => {
      if (e.animationName === 'toast-fade-out') {
        toast.remove();
      }
    });
  }

  // Bind click events to demo buttons
  triggerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      createToast(type);
    });
  });
});
