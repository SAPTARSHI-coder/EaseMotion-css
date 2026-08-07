# prefers-reduced-motion Support — Issue #47376

## What does it do?

Adds a global `prefers-reduced-motion: reduce` media query that disables or simplifies all animations for users who have enabled the "Reduce Motion" accessibility setting in their operating system.

## How is it used?

Add this CSS block to your stylesheet:

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

For components that rely on transforms for layout (not just decoration), add explicit overrides:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-box {
    opacity: 1;
    transform: none;
  }
}
```

## Why is it useful?

- **Accessibility**: Respects WCAG 2.1 SCSS 2.3.3 (Animation from Interactions).
- **Inclusive design**: Users with vestibular disorders or motion sensitivity get a usable experience.
- **Legal compliance**: Many accessibility standards require reduced-motion support.
- **Using `0.01ms`** instead of `none` ensures animations reach their final state instantly without breaking layout.
