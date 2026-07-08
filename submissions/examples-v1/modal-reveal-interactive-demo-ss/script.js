/* ============================================
   Interactive Modal & Reveal Demo — Vanilla JS
   Author: soumyasekharshee265-ux
   Issue:  #16948

   Two tiny, dependency-free components that show how the
   EaseMotion CSS modal and reveal patterns are initialized
   in plain HTML/JS — no framework required.
   ============================================ */


/* ----------------------------------------------------------------
   1. MODAL — easeModal
   ---------------------------------------------------------------- */

/**
 * Initialize a modal.
 *
 * Markup contract:
 *   <button data-ease-modal-open="my-modal">Open</button>
 *   <div id="my-modal" class="ease-modal-itx" role="dialog" aria-modal="true">
 *     <div class="ease-modal-itx__dialog">
 *       …
 *       <button data-ease-modal-close>Close</button>
 *     </div>
 *   </div>
 *
 * Features:
 *   • Open via [data-ease-modal-open="<id>"] triggers
 *   • Close via [data-ease-modal-close] buttons
 *   • Close on backdrop click
 *   • Close on Escape key
 *   • Restores focus to the trigger after close
 *   • Locks body scroll while open
 *   • Emits `ease:modal:open` and `ease:modal:close` events
 */
function easeModal(modalEl, options = {}) {
  const opts = Object.assign(
    {
      closeOnBackdrop: true,
      closeOnEscape:   true,
      lockScroll:      true,
    },
    options
  );

  let lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger || document.activeElement;
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    if (opts.lockScroll) document.body.style.overflow = 'hidden';

    // Move focus into the dialog for accessibility
    const focusable = modalEl.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) focusable.focus();

    modalEl.dispatchEvent(new CustomEvent('ease:modal:open', { bubbles: true }));
  }

  function close() {
    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
    if (opts.lockScroll) document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    modalEl.dispatchEvent(new CustomEvent('ease:modal:close', { bubbles: true }));
  }

  // Wire up close buttons inside the modal
  modalEl.querySelectorAll('[data-ease-modal-close]').forEach((btn) => {
    btn.addEventListener('click', close);
  });

  // Backdrop click
  if (opts.closeOnBackdrop) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) close();
    });
  }

  // Escape key
  if (opts.closeOnEscape) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalEl.classList.contains('is-open')) close();
    });
  }

  // Default hidden state
  modalEl.setAttribute('aria-hidden', 'true');

  return { open, close };
}


/* ----------------------------------------------------------------
   2. REVEAL — easeReveal
   ---------------------------------------------------------------- */

/**
 * Initialize scroll-triggered reveal animations using IntersectionObserver.
 *
 * Markup contract:
 *   <div class="ease-reveal-itx">…</div>
 *   <div class="ease-reveal-itx ease-reveal-itx--left">…</div>
 *
 * Optional per-element delay:
 *   <div class="ease-reveal-itx" style="--ease-reveal-delay: 200ms;">…</div>
 *
 * Options:
 *   • selector  — CSS selector for reveal elements (default '.ease-reveal-itx')
 *   • threshold — IntersectionObserver threshold (default 0.15)
 *   • once      — only reveal once, then unobserve (default true)
 */
function easeReveal(options = {}) {
  const opts = Object.assign(
    {
      selector:  '.ease-reveal-itx',
      threshold: 0.15,
      once:      true,
    },
    options
  );

  const elements = document.querySelectorAll(opts.selector);
  if (!elements.length) return;

  // Graceful fallback if IntersectionObserver is unavailable
  if (typeof IntersectionObserver === 'undefined') {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (opts.once) observer.unobserve(entry.target);
        } else if (!opts.once) {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: opts.threshold }
  );

  elements.forEach((el) => observer.observe(el));
  return observer;
}


/* ----------------------------------------------------------------
   3. AUTO-INIT FOR THIS DEMO PAGE
   (Consumers of the components can do this themselves — see README)
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  // Initialize every modal on the page
  const modals = {};
  document.querySelectorAll('.ease-modal-itx').forEach((modalEl) => {
    modals[modalEl.id] = easeModal(modalEl);
  });

  // Wire up every open-trigger
  document.querySelectorAll('[data-ease-modal-open]').forEach((trigger) => {
    const targetId = trigger.getAttribute('data-ease-modal-open');
    trigger.addEventListener('click', () => {
      if (modals[targetId]) modals[targetId].open(trigger);
    });
  });

  // Initialize scroll-reveal
  easeReveal();

  // Demo-only: log component events so reviewers can see them in DevTools
  document.addEventListener('ease:modal:open',  (e) => console.log('[ease] modal opened:',  e.target.id));
  document.addEventListener('ease:modal:close', (e) => console.log('[ease] modal closed:', e.target.id));
});