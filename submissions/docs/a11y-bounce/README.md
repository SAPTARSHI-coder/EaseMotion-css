# A11y Audit & Prefers-Reduced-Motion: Bounce Animations

This submission implements accessibility fixes and a `prefers-reduced-motion` audit for Bounce animations, fulfilling Issue #81927.

### What does this do?
Provides an accessible implementation of bounce animations that respects user motion preferences, high contrast settings, screen readers, and full keyboard navigation.

### How is it used?
Apply the class to an interactive element (e.g., `<button>` or `<a>`). Ensure proper ARIA attributes like `aria-live="polite"` if the state changes dynamically.

```html
<button class="bounce-btn" aria-live="polite">
  Hover or Focus to Bounce
</button>
```

### Why is it useful?
It ensures that Bounce animations comply with WCAG 2.1 AA guidelines. It safely falls back to color and underline changes when `prefers-reduced-motion: reduce` is active, and provides a clear `focus-visible` ring for keyboard users, supporting high contrast modes (`forced-colors: active`).
