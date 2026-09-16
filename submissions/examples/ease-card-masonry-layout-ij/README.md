# ease-card-masonry-layout

A masonry grid of cards with staggered entrance animation. Cards of varying heights are arranged in a CSS columns-based masonry layout and fade in with translateY on load.

## Features

- CSS columns-based masonry layout
- Staggered entrance animation with translateY + opacity
- Hover scale effect on each card
- Responsive column count (3/2/1)
- Intersection Observer for scroll-triggered entrance
- Customizable via CSS custom properties

## Usage

Each card sets `--i` for stagger delay index:

```html
<div class="mason-item" style="--i:1">
  <div class="mason-card">
    <span class="mason-label">Title</span>
  </div>
</div>
```

Customize via `:root` variables:

```css
--mason-duration: 0.6s;
--mason-card-bg: #ffffff;
--mason-card-radius: 14px;
--mason-gap: 1.25rem;
```

## Accessibility

Prefers reduced motion is respected.
