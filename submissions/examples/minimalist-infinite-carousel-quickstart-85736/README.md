# Minimalist Infinite Carousel Quickstart Guide

This example demonstrates basic usage and customization of the Minimalist Infinite Carousel.

## Basic HTML

```html
<section
  class="infinite-carousel"
  aria-label="Featured items"
>
  <div class="carousel-track">
    <article class="carousel-item">
      <h2>Item One</h2>
      <p>Minimal carousel content.</p>
    </article>
  </div>
</section>
```

## CSS Custom Properties

The carousel can be customized using CSS variables:

```css
:root {
  --carousel-bg: #0d1117;
  --carousel-surface: #161b22;
  --carousel-text: #ffffff;
  --carousel-accent: #58a6ff;
  --carousel-gap: 1rem;
  --carousel-radius: 12px;
}
```

Override these properties to customize the appearance.

## Modifier Classes

### Compact

```html
<div class="infinite-carousel compact">
  ...
</div>
```

Reduces the spacing between carousel items.

### Rounded

```html
<div class="infinite-carousel rounded">
  ...
</div>
```

Applies a larger border radius.

## Responsive Layout

The example uses a mobile breakpoint:

```css
@media (max-width: 600px) {
  .carousel-item {
    flex-basis: 90%;
  }
}
```

This keeps carousel items readable on smaller screens.

## Accessibility

- Provide a descriptive accessible label for the carousel.
- Use semantic elements for carousel content.
- Maintain sufficient color contrast.
- Ensure interactive controls have visible focus states.
- Do not rely on color alone to communicate information.

## Keyboard Navigation

When interactive carousel controls are added:

- `Tab` moves focus forward.
- `Shift + Tab` moves focus backward.
- `Enter` or `Space` activates focused controls.
- Keep the focus order logical.

## Quick Start

1. Copy `demo.html` into your project.
2. Include `style.css`.
3. Add carousel items using `.carousel-item`.
4. Customize the CSS custom properties as needed.