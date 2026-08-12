(function () {
  'use strict';

  function initAccordion(root, options) {
    var opts = Object.assign({ mode: 'single' }, options);
    var items = (root || document).querySelectorAll('.ease-accordion-item');

    items.forEach(function (item) {
      var header = item.querySelector('.ease-accordion-header');
      if (!header) return;

      header.addEventListener('click', function () {
        if (opts.mode === 'single') {
          items.forEach(function (other) {
            if (other !== item) other.classList.remove('ease-open');
          });
        }

        item.classList.toggle('ease-open');
      });
    });
  }

  if (typeof window !== 'undefined') {
    window.initAccordion = initAccordion;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { initAccordion(); });
    } else {
      initAccordion();
    }
  }
})();
