(function () {
  'use strict';

  function checkModal() {
    const hash = window.location.hash;
    const body = document.body;

    const overlays = document.querySelectorAll('.ease-modal-overlay');
    overlays.forEach((overlay) => {
      overlay.classList.remove('is-active');
      const modal = overlay.querySelector('.ease-modal');
      if (modal) {
        modal.removeAttribute('role');
        modal.removeAttribute('aria-modal');
        modal.setAttribute('aria-hidden', 'true');
      }
    });

    if (hash) {
      try {
        const overlay = document.querySelector(hash + '.ease-modal-overlay');
        if (overlay) {
          body.style.overflow = 'hidden';
          overlay.classList.add('is-active');

          const modal = overlay.querySelector('.ease-modal');
          if (modal) {
            modal.setAttribute('tabindex', '-1');
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modal.removeAttribute('aria-hidden');

            const title = modal.querySelector('h1, h2, h3, h4, h5, h6');
            if (title) {
              if (!title.id) title.id = 'ease-modal-title-' + Math.random().toString(36).substr(2, 9);
              modal.setAttribute('aria-labelledby', title.id);
            }

            modal.focus();
          }
          return;
        }
      } catch (e) {
        // Invalid selector, ignore
      }
    }

    body.style.overflow = '';
  }

  window.addEventListener('hashchange', checkModal);

  document.addEventListener('keydown', function (e) {
    const hash = window.location.hash;
    if (!hash) return;

    try {
      const overlay = document.querySelector(hash + '.ease-modal-overlay');
      if (!overlay) return;

      if (e.key === 'Escape') {
        window.location.hash = ''; 
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = overlay.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const modal = overlay.querySelector('.ease-modal');

        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === modal) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    } catch (e) {
      // Invalid selector
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkModal);
  } else {
    checkModal();
  }
})();
