# Shimmer Loading Skeleton Utilities

Skeleton screen components with animated shimmer and pulse effects for polished loading states. Replaces spinners with content-shaped placeholders.

## Features

- **Shimmer animation**: horizontal gradient sweep using CSS background-position
- **Pulse mode**: simple opacity oscillation without shimmer
- **Text skeletons**: 7 size variants (xs to 2xl)
- **Avatar skeletons**: 6 size variants (xs to 2xl)
- **Card skeleton**: complete card layout with image, title, and text lines
- **Profile skeleton**: avatar + name + role row
- **Article skeleton**: header + text block
- **Badge and button** placeholder shapes
- **Color variants**: default, light, dark, primary
- **Border radius** variants: sm, md, lg, xl, full

## Usage

```html
<!-- Text skeleton -->
<span class="skeleton skeleton-text skeleton-text--lg"></span>

<!-- Avatar -->
<span class="skeleton skeleton-avatar skeleton-avatar--md"></span>

<!-- Card skeleton -->
<div class="skeleton-card">
  <span class="skeleton skeleton-card__image"></span>
  <span class="skeleton skeleton-card__title"></span>
  <span class="skeleton skeleton-card__text"></span>
</div>
```

## Files

- `style.css` — all skeleton utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
