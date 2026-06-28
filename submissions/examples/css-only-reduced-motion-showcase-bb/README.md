# CSS-Only Reduced Motion Showcase

An educational demo showing proper `prefers-reduced-motion` handling for 8 different CSS animation types.

## What does this do?

Demonstrates how to properly disable and reset CSS animations when the user has enabled "Reduce motion" in their operating system. Shows 8 animation types (fade, slide, scale, rotate, bounce, pulse, shimmer, border) and their reduced-motion fallbacks.

## How is it used?

Each animation has a corresponding `@media (prefers-reduced-motion: reduce)` rule that:

1. Sets `animation: none` to stop the animation
2. Resets transforms to their final state (e.g., `opacity: 1`, `transform: none`)
3. Disables transitions globally with `transition-duration: 0.01ms`

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none !important;
    opacity: 1;
    transform: none;
  }

  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

## Why is it useful?

- **Accessibility** — WCAG 2.1 Success Criterion 2.3.3 (Level AAA)
- **Educational** — shows the correct pattern for each animation type
- **Production pattern** — can be copied into any project
- **Comprehensive** — covers opacity, transform, and combined animations
- **Global reset** — includes the `*` selector fallback for any missed animations
