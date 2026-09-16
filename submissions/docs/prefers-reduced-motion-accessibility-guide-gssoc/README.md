# Prefers-Reduced-Motion Accessibility Guide

## 1. What does this do?
This documentation guide details best practices for implementing WCAG AAA compliant accessibility fallbacks using `@media (prefers-reduced-motion: reduce)` in EaseMotion CSS.

## 2. How is it used?
Wrap complex CSS keyframe transforms and spring physics within media query blocks.

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none !important;
    transition: opacity 0.2s ease !important;
  }
}
```

## 3. Why is it useful?
It prevents vestibular motion trigger discomfort for users with motion sensitivity, vestibular disorders, or system accessibility preferences enabled.
