# Reveal Reduced Motion Visibility (Issue #4683)

## What does this do?
Ensures scroll-reveal elements are instantly active and visible when prefers-reduced-motion is active.

## How is it used?
When elements have the `.ease-reveal` class and the user has reduced motion enabled, the class `.ease-reveal-active` is instantly added on page load so they are fully visible without animation.

## Why is it useful?
It prevents content from remaining completely invisible (`opacity: 0`) for users who prefer reduced motion, ensuring accessibility compliance.

## Affected File (maintainer will copy to `core/reveal.js`)
Inside `core/reveal.js`, replace the early return:
```javascript
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
```
With:
```javascript
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    const revealAll = function () {
      var els = document.querySelectorAll('.' + revealClass);
      Array.prototype.forEach.call(els, function (el) {
        el.classList.add(activeClass);
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', revealAll);
    } else {
      revealAll();
    }
    return;
  }
```
