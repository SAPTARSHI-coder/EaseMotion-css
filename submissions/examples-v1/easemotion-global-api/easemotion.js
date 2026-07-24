/**
 * EaseMotion CSS Library — Unified JavaScript API
 * A lightweight, framework-friendly, zero-dependency global programmatic API
 * for managing EaseMotion interactive components (Modals, Tabs, Reveal).
 */

(function (global) {
  'use strict';

  // State caches
  const activeModals = []; // Stack to support multiple / nested modals: [{ id, previousFocus, originalOverflow }]
  const tabContainers = new Set(); // Registry of tab selectors for auto-resize updating
  let globalRevealObserver = null; // Shared IntersectionObserver instance

  // Trap focus keydown handler shared across active modals
  function handleModalKeyDown(e) {
    if (activeModals.length === 0) return;
    
    const topModalState = activeModals[activeModals.length - 1];
    const modal = document.getElementById(topModalState.id);
    if (!modal) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      EaseMotion.Modal.close(topModalState.id);
      return;
    }

    if (e.key === 'Tab') {
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [tabindex]:not([tabindex="-1"]), [contenteditable]';
      const focusableElements = Array.from(modal.querySelectorAll(focusableElementsString));
      
      if (focusableElements.length === 0) {
        e.preventDefault();
        modal.focus();
        return;
      }

      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab (navigating backward)
        if (document.activeElement === firstEl || document.activeElement === modal) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // Tab (navigating forward)
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  }

  // Retrieve or initialize the single shared IntersectionObserver instance
  function getRevealObserver() {
    if (!globalRevealObserver) {
      globalRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ease-reveal-active', 'is-visible', 'active');
            // Unobserve after entrance to optimize performance and prevent re-triggering
            globalRevealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -30px 0px' // Shift offset slightly for visual aesthetic
      });
    }
    return globalRevealObserver;
  }

  const EaseMotion = {
    Modal: {
      /**
       * Open a modal component by ID.
       * @param {string} id - The element ID of the modal container.
       */
      open(id) {
        if (!id) return;
        const modal = document.getElementById(id);
        if (!modal) return;

        // Prevent opening if modal is already active in the stack
        const alreadyOpen = activeModals.some(state => state.id === id);
        if (alreadyOpen) return;

        const previousFocus = document.activeElement;
        const originalOverflow = document.body.style.overflow;

        // Add active state styling classes
        modal.classList.add('ease-modal-active', 'is-active', 'active');
        modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-modal', 'true');

        // Prevent body backdrop scrolling
        document.body.classList.add('ease-modal-open');
        document.body.style.overflow = 'hidden';

        // Ensure modal container is focusable
        if (!modal.hasAttribute('tabindex')) {
          modal.setAttribute('tabindex', '-1');
        }

        // Apply keyboard listener if this is the first active modal
        if (activeModals.length === 0) {
          document.addEventListener('keydown', handleModalKeyDown);
        }

        // Push to active modals stack
        activeModals.push({
          id,
          previousFocus,
          originalOverflow
        });

        // Set focus to the first focusable child, or the modal itself
        const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [tabindex]:not([tabindex="-1"]), [contenteditable]';
        const focusableElements = modal.querySelectorAll(focusableElementsString);
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          modal.focus();
        }
      },

      /**
       * Close a modal component by ID.
       * @param {string} id - The element ID of the modal container.
       */
      close(id) {
        if (!id) return;
        const modal = document.getElementById(id);
        if (!modal) return;

        // Find modal position in active stack
        const index = activeModals.findIndex(state => state.id === id);
        if (index === -1) return;

        const state = activeModals[index];

        // Remove active state classes
        modal.classList.remove('ease-modal-active', 'is-active', 'active');
        modal.setAttribute('aria-hidden', 'true');
        modal.removeAttribute('aria-modal');

        // Restore focus to original trigger
        if (state.previousFocus && typeof state.previousFocus.focus === 'function') {
          state.previousFocus.focus();
        }

        // Remove from active stack
        activeModals.splice(index, 1);

        // Remove keyboard event listener if no modals remain active
        if (activeModals.length === 0) {
          document.removeEventListener('keydown', handleModalKeyDown);
          
          // Restore body scrolling
          document.body.classList.remove('ease-modal-open');
          document.body.style.overflow = state.originalOverflow || '';
        }
      }
    },

    Tabs: {
      /**
       * Select and activate a tab panel inside a container.
       * @param {string} containerSelector - Selector for the tabs container wrapper.
       * @param {number} index - 0-based index of the target tab.
       */
      select(containerSelector, index) {
        if (!containerSelector) return;
        let container;
        try {
          container = document.querySelector(containerSelector);
        } catch (e) {
          return; // Gracefully abort if selector syntax is invalid
        }
        if (!container) return;

        // Register for automatic resize listening
        tabContainers.add(containerSelector);

        const triggers = Array.from(container.querySelectorAll('.ease-tab, [role="tab"], .ease-tabs__trigger'));
        const panels = Array.from(container.querySelectorAll('.ease-tab-panel, [role="tabpanel"], .ease-tabs__panel'));

        if (index < 0 || index >= triggers.length) return;

        // Update trigger classes and accessibility tags
        triggers.forEach((trigger, idx) => {
          if (idx === index) {
            trigger.classList.add('ease-tab-active', 'is-active', 'active');
            trigger.setAttribute('aria-selected', 'true');
            if (trigger.tagName === 'BUTTON' || trigger.hasAttribute('tabindex')) {
              trigger.setAttribute('tabindex', '0');
            }
          } else {
            trigger.classList.remove('ease-tab-active', 'is-active', 'active');
            trigger.setAttribute('aria-selected', 'false');
            if (trigger.tagName === 'BUTTON' || trigger.hasAttribute('tabindex')) {
              trigger.setAttribute('tabindex', '-1');
            }
          }
        });

        // Update panel visibility classes and tags
        panels.forEach((panel, idx) => {
          if (idx === index) {
            panel.classList.add('ease-panel-active', 'is-active', 'active');
            panel.setAttribute('aria-hidden', 'false');
            panel.style.display = ''; // Clear display none override
          } else {
            panel.classList.remove('ease-panel-active', 'is-active', 'active');
            panel.setAttribute('aria-hidden', 'true');
            panel.style.display = 'none'; // Apply safe screen hide
          }
        });

        // Reposition underline indicator
        this.refresh(containerSelector);
      },

      /**
       * Recalculate the position and size of the sliding underline indicator.
       * @param {string} containerSelector - Selector for the tabs container wrapper.
       */
      refresh(containerSelector) {
        if (!containerSelector) return;
        let container;
        try {
          container = document.querySelector(containerSelector);
        } catch (e) {
          return;
        }
        if (!container) return;

        const activeTrigger = container.querySelector('.ease-tab-active, .is-active, .active, [aria-selected="true"]');
        if (!activeTrigger) return;

        const underline = container.querySelector('.ease-tabs__underline, .ease-tab-underline');
        const tabRect = activeTrigger.getBoundingClientRect();
        
        if (!underline) {
          // If no physical underline element exists, still compute and set custom properties on the container for CSS use
          const containerRect = container.getBoundingClientRect();
          container.style.setProperty('--ease-tab-width', `${tabRect.width}px`);
          container.style.setProperty('--ease-tab-left', `${tabRect.left - containerRect.left + container.scrollLeft}px`);
          return;
        }

        const offsetParent = underline.offsetParent || container;
        const parentRect = offsetParent.getBoundingClientRect();

        const width = tabRect.width;
        // Calculate offset position accounting for horizontal scrolling and offsets
        const left = tabRect.left - parentRect.left + offsetParent.scrollLeft;

        // Apply inline styles to the underline indicator
        underline.style.width = `${width}px`;
        underline.style.transform = `translateX(${left}px)`;

        // Set CSS custom properties on container for flex/extend usage
        container.style.setProperty('--ease-tab-width', `${width}px`);
        container.style.setProperty('--ease-tab-left', `${left}px`);
      }
    },

    Reveal: {
      /**
       * Register IntersectionObserver to animate content into view.
       * @param {string} selector - Selector matching the elements to reveal.
       */
      observe(selector) {
        if (!selector) return;
        let elements;
        try {
          elements = document.querySelectorAll(selector);
        } catch (e) {
          return; // Gracefully abort if selector syntax is invalid
        }
        if (elements.length === 0) return;

        const observer = getRevealObserver();
        elements.forEach(el => {
          // Avoid duplicate registrations
          if (el.dataset.easeRevealObserved !== 'true') {
            el.dataset.easeRevealObserved = 'true';
            observer.observe(el);
          }
        });
      }
    }
  };

  // Debounced Window Resize Event Listener for Tabs
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      tabContainers.forEach(selector => {
        try {
          EaseMotion.Tabs.refresh(selector);
        } catch (e) {
          // Prevent failing silently if DOM element was removed
        }
      });
    }, 80);
  });

  // Expose as global namespace safely
  global.EaseMotion = EaseMotion;

})(typeof window !== 'undefined' ? window : this);
