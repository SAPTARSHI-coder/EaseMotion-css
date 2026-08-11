# Reduced Motion Accessibility Support Proposal

This submission proposes a global accessibility fix to respect the user's operating system-level `prefers-reduced-motion` setting. It ensures that EaseMotion CSS complies with WCAG accessibility guidelines by automatically disabling animations for users sensitive to motion.

## What does this do?
It introduces a global `@media (prefers-reduced-motion: reduce)` media query that targets all elements. When a user has OS-level reduced motion enabled, it sets `animation-duration` and `transition-duration` to `0.01ms` (effectively instant).

## Why `0.01ms` instead of `0s` or `none`?
Setting animation and transition durations to `0.01ms` is a well-established CSS best practice for reduced motion (used by Bootstrap, Tailwind, etc.). 
If we use `animation: none`, React or Vanilla JS transition event listeners (`transitionend`, `animationend`) will never fire, potentially breaking application state. `0.01ms` ensures the end-state of the animation (like `opacity: 1` on a `fade-in`) still applies instantly and JS events still trigger safely.

## How is it used?

This requires zero configuration from the developer using the framework. The CSS runs automatically.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Why is it useful?
Animations can cause vestibular disorders, nausea, or dizziness for certain users. By respecting the OS setting, EaseMotion CSS becomes an inherently accessible framework out of the box, fulfilling modern WCAG 2.1 compliance requirements without developers needing to manually write media queries for every `ease-*` class.
