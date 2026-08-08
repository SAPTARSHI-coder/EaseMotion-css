/**
 * Interactive Timeline Milestone Tree with Scroll-Triggered Node Reveal
 * EaseMotion-css Component Script
 *
 * Responsibilities:
 *  1. IntersectionObserver — adds `.is-visible` to timeline items as they enter viewport
 *  2. Spine fill — updates `.spine-fill` height based on scroll progress through the section
 *  3. Expand accordion — smooth panel open/close with aria-expanded toggling
 */

(function () {
  'use strict';

  // ─── Guard: early exit if IntersectionObserver unavailable ───────────────
  const supportsIO = typeof IntersectionObserver !== 'undefined';

  // ─── 1. Scroll-Reveal: IntersectionObserver ──────────────────────────────
  const timelineItems = Array.from(document.querySelectorAll('.timeline-item'));
  const timelineNodes = Array.from(document.querySelectorAll('.timeline-node'));

  if (supportsIO) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once revealed, stop observing this element
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px', // trigger slightly before fully in view
        threshold: 0.15,
      }
    );

    timelineItems.forEach((item) => revealObserver.observe(item));
  } else {
    // Graceful fallback — show everything immediately if IO unsupported
    timelineItems.forEach((item) => item.classList.add('is-visible'));
  }

  // ─── 2. Spine Fill Progress ───────────────────────────────────────────────
  const spineFill = document.getElementById('spine-fill');
  const timelineSection = document.querySelector('.timeline-section');

  function updateSpineFill() {
    if (!spineFill || !timelineSection) return;

    const sectionRect = timelineSection.getBoundingClientRect();
    const sectionTop = sectionRect.top;
    const sectionHeight = sectionRect.height;
    const windowH = window.innerHeight;

    // How far the viewport has traveled through the section (0→1)
    // Start filling when top of section enters bottom of viewport.
    // Complete when bottom of section reaches center of viewport.
    const scrolled = windowH - sectionTop;
    const total = sectionHeight + windowH * 0.5;
    const rawProgress = Math.min(1, Math.max(0, scrolled / total));

    spineFill.style.height = `${rawProgress * 100}%`;
  }

  // Throttle with requestAnimationFrame
  let rafId = null;
  function onScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updateSpineFill();
      rafId = null;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateSpineFill(); // initial paint

  // ─── 3. Expand Accordion Panels ──────────────────────────────────────────
  const expandBtns = document.querySelectorAll('.expand-btn');

  expandBtns.forEach((btn) => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    if (!panel) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Collapse
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelector('.expand-label').textContent = btn
          .querySelector('.expand-label')
          .textContent.replace('Hide', 'View');
        panel.setAttribute('hidden', '');
      } else {
        // Expand
        btn.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
      }
    });

    // Keyboard: Enter / Space already fires click on button, but also support Escape to close
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        btn.click();
        btn.focus();
      }
    });
  });

  // ─── 4. Reduced Motion: pause all animations immediately ─────────────────
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timelineItems.forEach((item) => item.classList.add('is-visible'));
    if (spineFill) spineFill.style.height = '100%';
  }

})();
