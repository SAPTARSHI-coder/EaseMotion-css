(function () {
  'use strict';

  let lastFocusedElement = null;

  function getActiveOverlay() {
    const hash = window.location.hash;
    if (!hash) return null;

    try {
      const selector = '#' + CSS.escape(hash.substring(1));
      return document.querySelector(selector + '.ease-modal-overlay');
    } catch (e) {
      return null;
    }
  }

  function focusFirstElement(modal) {
    const focusable = modal.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length) {
      focusable[0].focus();
    } else {
      modal.setAttribute('tabindex', '-1');
      modal.focus();
    }
  }

  function trapFocus(overlay, e) {
    const focusableElements = overlay.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements.length) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function checkModal() {
    const body = document.body;

    const overlays = document.querySelectorAll('.ease-modal-overlay');
    overlays.forEach((overlay) => overlay.classList.remove('is-active'));

    const overlay = getActiveOverlay();

    if (overlay) {
      body.style.overflow = 'hidden';
      overlay.classList.add('is-active');

      const modal = overlay.querySelector('.ease-modal');

      if (modal) {
        lastFocusedElement = document.activeElement;
        focusFirstElement(modal);
      }
    } else {
      body.style.overflow = '';

      // restore focus when modal closes
      if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
      }
    }
  }

  // hash change listener
  window.addEventListener('hashchange', checkModal);

  // keyboard handling
  document.addEventListener('keydown', function (e) {
    const overlay = getActiveOverlay();
    if (!overlay) return;

    // ESC closes modal
    if (e.key === 'Escape') {
      window.location.hash = '';
      return;
    }

    // TAB trap
    if (e.key === 'Tab') {
      trapFocus(overlay, e);
    }
  });

  // init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkModal);
  } else {
    checkModal();
  }
})();