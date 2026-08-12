/**
 * EaseMotion CSS - Toast Notification Utility
 */

const easeToast = (function() {
  let container = null;

  function createContainer() {
    container = document.createElement('div');
    container.id = 'ease-toast-container';
    container.className = 'ease-toast-container ease-toast-bottom-right';
    document.body.appendChild(container);
  }

  function show(message, type = 'success', duration = 3000) {
    if (!container) createContainer();

    const toast = document.createElement('div');
    
    // Choose icon and color class based on type
    let icon = '✓';
    let colorClass = 'ease-toast-success';
    let title = 'Success';
    
    if (type === 'danger' || type === 'error') {
      icon = '!';
      colorClass = 'ease-toast-danger';
      title = 'Error';
    } else if (type === 'info') {
      icon = 'i';
      colorClass = 'ease-toast-info';
      title = 'Information';
    } else if (type === 'warning') {
      icon = '⚠';
      colorClass = 'ease-toast-warning';
      title = 'Warning';
    }

    // Set classes (includes EaseMotion entrance animation)
    toast.className = `ease-toast ${colorClass} ease-slide-in-right`;

    toast.innerHTML = `
      <div class="ease-toast-icon">${icon}</div>
      <div class="ease-toast-content">
        <h4 class="ease-toast-title">${title}</h4>
        <p class="ease-toast-message">${message}</p>
      </div>
      <button class="ease-toast-close">&times;</button>
      <div class="ease-toast-progress" style="animation-duration: ${duration}ms;"></div>
    `;

    // Handle Close Button
    const closeBtn = toast.querySelector('.ease-toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));

    // Append to container
    container.appendChild(toast);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(toast);
    }, duration);
  }

  function removeToast(toast) {
    if (toast.classList.contains('ease-toast-exit')) return; // Already exiting
    
    // Replace entrance animation with exit animation
    toast.classList.remove('ease-slide-in-right');
    toast.classList.add('ease-toast-exit');
    
    // Wait for exit animation to finish before removing from DOM
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }

  return {
    show,
    success: (msg, dur) => show(msg, 'success', dur),
    error: (msg, dur) => show(msg, 'error', dur),
    info: (msg, dur) => show(msg, 'info', dur),
    warning: (msg, dur) => show(msg, 'warning', dur)
  };
})();
