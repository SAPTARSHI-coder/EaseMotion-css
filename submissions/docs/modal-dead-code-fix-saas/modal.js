(function () {
  'use strict';

  let previousFocusedElement = null;

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

          previousFocusedElement = document.activeElement;

          overlay.classList.add('is-active');

          const modal = overlay.querySelector('.ease-modal');
          if (modal) {
            modal.setAttribute('tabindex', '-1');
            modal.focus();
          }
          return;
        }
      } catch (e) {
        window.location.hash = ''; // Clear invalid hash
      }
    }

    // If no active modal is found
    body.style.overflow = '';

    if (
      previousFocusedElement &&
      typeof previousFocusedElement.focus === 'function'
    ) {
      previousFocusedElement.focus();
      previousFocusedElement = null;
    }
  }

  // Setup event listeners for hash changes (opening/closing via anchors)
  window.addEventListener('hashchange', checkModal);

  // Setup backdrop click listener to close modal
  document.addEventListener('click', function (e) {
    const hash = window.location.hash;
    if (!hash) return;

    try {
      const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
      const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
      if (!overlay || !overlay.classList.contains('is-active')) return;

      if (e.target === overlay) {
        window.location.hash = ''; // Clear hash = close modal properly
        e.preventDefault();
      }
    } catch (e) {
      // Invalid selector, ignore
    }
  }, true); // Capture phase

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
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
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
