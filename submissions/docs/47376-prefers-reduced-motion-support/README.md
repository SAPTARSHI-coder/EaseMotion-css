# Prefers-Reduced-Motion Support Integration

### 1. What does this do?
It integrates comprehensive accessibility overrides utilizing the `@media (prefers-reduced-motion: reduce)` query to simplify or pause high-frequency transitions/animations for individuals with cognitive and motion sensitivities.

### 2. How is it used?
Wrap complex, translation-based transitions or keyframe loops with an accessible fallback styling rule:
```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none !important;
    transition: opacity 0.3s ease !important;
    transform: none !important;
  }
}