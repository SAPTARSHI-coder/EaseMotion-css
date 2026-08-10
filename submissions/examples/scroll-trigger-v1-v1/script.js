(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) return;

  const defaults = { threshold: 0.2, once: true };

  function init(root) {
    const els = (root || document).querySelectorAll('.scroll');
    if (!els.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el = entry.target;
        var threshold = parseFloat(el.getAttribute('data-ease-threshold')) || defaults.threshold;
        var once = el.hasAttribute('data-ease-once')
          ? el.getAttribute('data-ease-once') !== 'false'
          : defaults.once;

        if (entry.intersectionRatio >= threshold) {
          el.classList.add('visible');
          if (once) observer.unobserve(el);
        }
      });
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });

    els.forEach(function (el) { observer.observe(el); });
  }

  init();

  window.EaseMotionScroll = { init: init };
})();
