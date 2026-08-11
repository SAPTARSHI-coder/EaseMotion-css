/**
 * EaseMotion CSS — View Transitions Page Router
 * Submission #4385
 *
 * Intercepts anchor clicks and wraps page navigation in the
 * View Transitions API for smooth animated page changes.
 *
 * Transition styles (set via <meta name="view-transition">):
 *   fade     — cross-fade (default)
 *   slide    — new page slides in from right
 *   scale    — new page scales up from center
 *   reveal   — circular reveal from click position (EaseMotion signature)
 *
 * Progressive enhancement:
 *   - View Transitions API supported: animated transitions
 *   - Not supported: instant navigation (no change to behavior)
 *
 * Usage:
 *   <script src="view-transitions.js"></script>
 *   <meta name="view-transition" content="reveal" />
 */

(function () {
  'use strict';

  // Bail out if View Transitions API not supported
  if (!document.startViewTransition) return;

  // Get transition style from meta tag
  function getTransitionStyle() {
    const meta = document.querySelector('meta[name="view-transition"]');
    return meta?.content || 'fade';
  }

  // Inject CSS for transitions
  function injectStyles() {
    if (document.getElementById('vt-styles')) return;

    const style = document.createElement('style');
    style.id = 'vt-styles';
    style.textContent = `
      /* ── Base: instant by default ── */
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.35s;
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* ── Fade (default) ── */
      [data-vt="fade"] ::view-transition-old(root) {
        animation-name: vt-fade-out;
      }
      [data-vt="fade"] ::view-transition-new(root) {
        animation-name: vt-fade-in;
      }

      /* ── Slide ── */
      [data-vt="slide"] ::view-transition-old(root) {
        animation-name: vt-slide-out;
      }
      [data-vt="slide"] ::view-transition-new(root) {
        animation-name: vt-slide-in;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      /* ── Scale ── */
      [data-vt="scale"] ::view-transition-old(root) {
        animation-name: vt-scale-out;
      }
      [data-vt="scale"] ::view-transition-new(root) {
        animation-name: vt-scale-in;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      /* ── Circular reveal (EaseMotion signature) ── */
      [data-vt="reveal"] ::view-transition-old(root) {
        animation-name: vt-fade-out;
        animation-duration: 0.25s;
      }
      [data-vt="reveal"] ::view-transition-new(root) {
        animation-name: vt-clip-expand;
        animation-duration: 0.5s;
        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      /* ── Keyframes ── */
      @keyframes vt-fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes vt-fade-out {
        from { opacity: 1; }
        to   { opacity: 0; }
      }
      @keyframes vt-slide-in {
        from { opacity: 0; transform: translateX(40px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes vt-slide-out {
        from { opacity: 1; transform: translateX(0); }
        to   { opacity: 0; transform: translateX(-40px); }
      }
      @keyframes vt-scale-in {
        from { opacity: 0; transform: scale(0.92); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes vt-scale-out {
        from { opacity: 1; transform: scale(1); }
        to   { opacity: 0; transform: scale(1.06); }
      }
      @keyframes vt-clip-expand {
        from { clip-path: circle(0% at var(--vt-x, 50%) var(--vt-y, 50%)); }
        to   { clip-path: circle(150% at var(--vt-x, 50%) var(--vt-y, 50%)); }
      }

      /* Reduced motion: no animation */
      @media (prefers-reduced-motion: reduce) {
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Track last click position for circular reveal
  let clickX = 50, clickY = 50;

  document.addEventListener('click', (e) => {
    clickX = (e.clientX / window.innerWidth * 100).toFixed(1);
    clickY = (e.clientY / window.innerHeight * 100).toFixed(1);
  });

  // Navigate with transition
  async function navigate(url, style) {
    // Set CSS vars for reveal origin
    document.documentElement.style.setProperty('--vt-x', `${clickX}%`);
    document.documentElement.style.setProperty('--vt-y', `${clickY}%`);

    // Set transition style attribute
    document.documentElement.setAttribute('data-vt', style);

    await document.startViewTransition(async () => {
      const res = await fetch(url);
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Swap body content
      document.body.innerHTML = doc.body.innerHTML;

      // Update title
      document.title = doc.title;

      // Update meta tags
      const newVtMeta = doc.querySelector('meta[name="view-transition"]');
      let vtMeta = document.querySelector('meta[name="view-transition"]');
      if (newVtMeta) {
        if (!vtMeta) {
          vtMeta = document.createElement('meta');
          vtMeta.name = 'view-transition';
          document.head.appendChild(vtMeta);
        }
        vtMeta.content = newVtMeta.content;
      }

      // Update URL
      history.pushState({}, '', url);

      // Re-init any scripts
      window.dispatchEvent(new Event('vt:navigated'));

    }).finished;
  }

  // Intercept anchor clicks
  function handleClick(e) {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // Skip: external, hash-only, mailto, tel, download
    if (
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      anchor.hasAttribute('download') ||
      anchor.target === '_blank'
    ) return;

    // Skip if modifier key held
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();

    const style = getTransitionStyle();
    navigate(anchor.href, style).catch(() => {
      // Fallback to normal navigation on error
      window.location.href = anchor.href;
    });
  }

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const style = getTransitionStyle();
    navigate(location.href, style).catch(() => {
      window.location.reload();
    });
  });

  // Init
  injectStyles();
  document.addEventListener('click', handleClick);

  // Re-attach after transitions
  window.addEventListener('vt:navigated', () => {
    injectStyles();
  });

  // Public API
  window.EaseViewTransitions = {
    navigate,
    getStyle: getTransitionStyle,
  };

})();
