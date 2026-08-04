(function () {
  'use strict';

  var toggleThreshold = 400;
  var buttonClass = 'ease-scroll-top';
  var visibleClass = 'is-visible';

  function getButtons() {
    return Array.prototype.slice.call(document.querySelectorAll('.' + buttonClass));
  }

  function updateVisibility() {
    var buttons = getButtons();
    var shouldShow = window.scrollY > toggleThreshold;

    buttons.forEach(function (button) {
      button.classList.toggle(visibleClass, shouldShow);
    });
  }

  function scrollToTop(event) {
    if (event) {
      event.preventDefault();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function bindButtons() {
    var buttons = getButtons();

    buttons.forEach(function (button) {
      button.addEventListener('click', scrollToTop);
    });

    updateVisibility();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindButtons);
  } else {
    bindButtons();
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
})();
