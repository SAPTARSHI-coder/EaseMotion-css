(function () {
  'use strict';

  let previousFocusedElement = null;

  function getFocusableElements(container) {
    return container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])'
    );
  }

  function trapFocus(overlay, modal) {
    const focusableElements = getFocusableElements(overlay);

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      modal.focus();
    }

    function handleKeydown(e) {
      if (e.key === 'Escape') {
        window.location.hash = '';
        return;
      }

      if (e.key !== 'Tab') return;

      const elements = getFocusableElements(overlay);
      if (elements.length === 0) {
        e.preventDefault();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first || !overlay.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !overlay.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    overlay.addEventListener('keydown', handleKeydown);
    return function cleanup() {
      overlay.removeEventListener('keydown', handleKeydown);
    };
  }

  function setModalAttributes(modal) {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    if (!modal.hasAttribute('aria-label') && !modal.hasAttribute('aria-labelledby')) {
      const header = modal.querySelector('.ease-modal-header');
      if (header) {
        const heading = header.querySelector('h2, h3, h4');
        if (heading && heading.id) {
          modal.setAttribute('aria-labelledby', heading.id);
        }
      }
    }
  }

  function removeModalAttributes(modal) {
    modal.removeAttribute('role');
    modal.removeAttribute('aria-modal');
  }

  function checkModal() {
    const hash = window.location.hash;
    const body = document.body;

    const overlays = document.querySelectorAll('.ease-modal-overlay');
    overlays.forEach(function (overlay) {
      overlay.classList.remove('is-active');
      overlay.setAttribute('aria-hidden', 'true');
      const modal = overlay.querySelector('.ease-modal');
      if (modal) {
        removeModalAttributes(modal);
      }
    });

    if (hash) {
      try {
        const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
        const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
        if (overlay) {
          body.style.overflow = 'hidden';
          previousFocusedElement = document.activeElement;

          overlay.classList.add('is-active');
          overlay.setAttribute('aria-hidden', 'false');

          const modal = overlay.querySelector('.ease-modal');
          if (modal) {
            setModalAttributes(modal);
            modal.setAttribute('tabindex', '-1');
            var cleanup = trapFocus(overlay, modal);
            overlay._cleanupFocusTrap = cleanup;
          }
          return;
        }
      } catch (e) {
        window.location.hash = '';
      }
    }

    body.style.overflow = '';

    overlays.forEach(function (overlay) {
      if (typeof overlay._cleanupFocusTrap === 'function') {
        overlay._cleanupFocusTrap();
        delete overlay._cleanupFocusTrap;
      }
    });

    if (previousFocusedElement && typeof previousFocusedElement.focus === 'function') {
      previousFocusedElement.focus();
      previousFocusedElement = null;
    }
  }

  window.addEventListener('hashchange', checkModal);

  document.addEventListener('click', function (e) {
    const hash = window.location.hash;
    if (!hash) return;

    try {
      const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
      const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
      if (!overlay || !overlay.classList.contains('is-active')) return;

      if (e.target === overlay) {
        window.location.hash = '';
        e.preventDefault();
      }
    } catch (e) {
      // Invalid selector, ignore
    }
  }, true);

  document.addEventListener('keydown', function () {
    if (!window.location.hash) return;
    try {
      const escapedHashSelector = '#' + CSS.escape(window.location.hash.substring(1));
      const overlay = document.querySelector(escapedHashSelector + '.ease-modal-overlay');
      if (!overlay) return;

      const modal = overlay.querySelector('.ease-modal');
      if (modal && document.activeElement && !overlay.contains(document.activeElement)) {
        const focusable = getFocusableElements(overlay);
        if (focusable.length > 0) {
          focusable[0].focus();
        } else {
          modal.focus();
        }
      }
    } catch (e) {
      // Invalid selector, ignore
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkModal);
  } else {
    checkModal();
  }
})();
