# Accessibility/Critical: Zero prefers-reduced-motion support

## Issue #33439

This submission introduces the implementation details to fully support `prefers-reduced-motion: reduce` across all looping and entrance animations in EaseMotion CSS, preventing vestibular/motion triggers for sensitive users.

---

## 1. Scope of Proposed Fixes

1. **Looping Animation Suppression:** Loop animations (`ease-bounce`, `ease-pulse`, `ease-rotate`, `ease-ping`) are clamped to a maximum of `1` iteration.
2. **Instant Entrance Transitions:** Entrance transitions (`ease-fade-in`, `ease-slide-up`, etc.) are given a transition/animation duration of `0.01ms` (instantaneous).
3. **JavaScript Attribute Fallback:** A `data-reduced-motion="reduce"` attribute selector is added, allowing JS-controlled environments to toggle reduced-motion styles dynamically:

```css
@media (prefers-reduced-motion: reduce) {
  /* Core overrides */
}
[data-reduced-motion="reduce"] *,
[data-reduced-motion="reduce"] *::before,
[data-reduced-motion="reduce"] *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

---

## 2. Dynamic JS Integration Helper

To automate attribute fallback injection on document load, developers can add this lightweight configuration script:

```javascript
(function() {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function updateMotionPreference() {
    if (motionQuery.matches) {
      document.documentElement.setAttribute('data-reduced-motion', 'reduce');
    } else {
      document.documentElement.removeAttribute('data-reduced-motion');
    }
  }
  updateMotionPreference();
  motionQuery.addEventListener('change', updateMotionPreference);
})();
```
