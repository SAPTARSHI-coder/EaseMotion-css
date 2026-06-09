# Reduced Motion Accessibility Demo

A simple example showing how CSS animations can respect the user's `prefers-reduced-motion` setting.

## Files

- demo.html
- style.css

## Accessibility

When reduced motion is enabled in the operating system, the animation is disabled using:

```css
@media (prefers-reduced-motion: reduce) {
  .box {
    animation: none;
  }
}