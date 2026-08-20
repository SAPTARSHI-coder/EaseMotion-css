# Smooth Scroll Behavior

Demonstrates scroll-behavior: smooth for navigation links, scroll-padding for sticky headers, and overscroll-behavior to control bounce effects.

## Features

- scroll-behavior: smooth on all anchor links
- scroll-padding-top prevents header overlap with targeted sections
- overscroll-behavior: contain prevents page scroll chain
- Active nav highlight via :target pseudo-class
- Dark mode scrollbar styling

## Usage

```html
<div class="demo-card">
  <!-- Apply the feature class to any element -->
</div>
```

## Why is it useful?

This submission uses EaseMotion's CSS custom properties — specifically the `speed-slow, space-8, shadow-lg, color-primary, radius-md` tokens — to ensure the demo is fully themeable and consistent with the rest of the framework. The implementation includes dark mode via `prefers-color-scheme: dark` and respects `prefers-reduced-motion` for accessibility.
