# Skeleton Loader Components

## Feature overview
A modern CSS skeleton loader component set designed for loading states without JavaScript. Includes reusable skeleton styles for text, titles, avatars, cards, and responsive gallery layouts.

## Installation
Copy `demo.html` and `style.css` into your project folder, then link the stylesheet:

```html
<link rel="stylesheet" href="./style.css" />
```

## Usage examples

### Base skeleton
```html
<div class="ease-skeleton ease-skeleton-text"></div>
```

### Title skeleton
```html
<div class="ease-skeleton ease-skeleton-title"></div>
```

### Avatar skeleton
```html
<div class="ease-skeleton ease-skeleton-avatar"></div>
```

### Card skeleton
```html
<article class="ease-skeleton-card" role="status" aria-busy="true">
  <div class="ease-skeleton ease-skeleton-card-image"></div>
  <div class="ease-skeleton ease-skeleton-title ease-skeleton-card-title"></div>
  <div class="ease-skeleton ease-skeleton-text"></div>
  <div class="ease-skeleton ease-skeleton-text" style="width: 75%;"></div>
  <div class="ease-skeleton ease-skeleton-card-action"></div>
</article>
```

### Gallery skeleton
```html
<div class="ease-skeleton-gallery" role="status" aria-busy="true">
  <div class="ease-skeleton ease-skeleton-gallery-item"></div>
  <div class="ease-skeleton ease-skeleton-gallery-item"></div>
  <div class="ease-skeleton ease-skeleton-gallery-item"></div>
</div>
```

## Customization guide
Customize the skeleton palette and animation speed using CSS variables.

```css
:root {
  --ease-skeleton-base: #dbeafe;
  --ease-skeleton-shimmer: #eff6ff;
  --ease-skeleton-duration: 1.8s;
}
```

Local overrides are also supported on any container:

```html
<div style="--ease-skeleton-base: #334155; --ease-skeleton-shimmer: #475569; --ease-skeleton-duration: 2s;">
  <div class="ease-skeleton ease-skeleton-title"></div>
</div>
```

## Accessibility notes
- Use `aria-hidden="true"` on decorative placeholder blocks.
- For loading regions, wrap skeleton content in a status container with `role="status"` and `aria-busy="true"`.
- The shimmer and pulse animations are disabled when `prefers-reduced-motion: reduce` is active.

## Screenshots
- Add screenshot assets here after capturing the demo.

## Browser support
Supported in modern browsers that support CSS custom properties and animations.

- Chrome
- Edge
- Firefox
- Safari
- Opera
