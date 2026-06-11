(function () {
  'use strict';

  let lastTrigger = null;

  function checkModal() {
    const hash = window.location.hash;
    const body = document.body;

    // Remove active class from all overlays just in case
    const overlays = document.querySelectorAll('.ease-modal-overlay');
    overlays.forEach((overlay) => overlay.classList.remove('is-active'));

    if (hash) {
      // Find overlay by hash (pure CSS `:target` fallback)
      try {
        const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
        const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
        if (overlay) {
          body.style.overflow = 'hidden';
          body.setAttribute('data-modal-open', 'true');
          overlay.classList.add('is-active');

          const modal = overlay.querySelector('.ease-modal');
          if (modal) {
            modal.setAttribute('tabindex', '-1');
            modal.focus();
          }
          return;
        }
      } catch (e) {
        // Invalid selector, ignore
      }
    }

    // If no active modal is found
    body.style.overflow = '';
    body.removeAttribute('data-modal-open');
    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  // Setup event listeners for hash changes (opening/closing via anchors)
  window.addEventListener('hashchange', checkModal);

  // Capture trigger element
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('a[href^="#"], [data-modal-open]');
    if (trigger) {
      lastTrigger = trigger;
      if (trigger.hasAttribute('data-modal-open')) {
        const targetId = trigger.getAttribute('data-modal-open');
        window.location.hash = targetId;
      }
    }
    
    // Close on backdrop click or close button
    if (e.target.matches('.ease-modal-overlay') || e.target.closest('.ease-modal-close, [data-modal-close]')) {
      window.location.hash = '';
      e.preventDefault();
    }
  });

  // Setup keyboard trap and escape key
  document.addEventListener('keydown', function (e) {
    const hash = window.location.hash;
    if (!hash) return;

    try {
      const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
      const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
      if (!overlay) return;

      // Escape key to close
      if (e.key === 'Escape') {
        window.location.hash = ''; // This will trigger hashchange and close the modal
        return;
      }

      // Tab trap
      if (e.key === 'Tab') {
        const focusableElements = overlay.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement || document.activeElement === overlay.querySelector('.ease-modal')) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    } catch (e) {
      // Invalid selector, ignore
    }
  });

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkModal);
  } else {
    checkModal();
  }
})();
