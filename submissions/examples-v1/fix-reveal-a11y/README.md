# Fix for reveal.js Accessibility

Resolves Issue #8398.

## Description
This submission fixes an accessibility issue where elements using `.ease-reveal` remained permanently hidden for users with `prefers-reduced-motion: reduce`. The `core/reveal.js` script originally returned early if reduced motion was detected, which left the elements at their initial `opacity: 0` state without applying the `.ease-reveal-active` class.

This fix updates the early return logic to instead immediately apply `.ease-reveal-active` to all reveal elements, ensuring the content is visible without animation.

## How to Apply
Maintainers should update `core/reveal.js` line 15:
```javascript
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    var readyFallback = function () {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        el.classList.add(activeClass);
      });
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', readyFallback);
    } else {
      readyFallback();
    }
    return;
  }
```
