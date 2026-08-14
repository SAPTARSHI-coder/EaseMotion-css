# CSS Horizontal Scroll Showcase Gallery

A responsive, high-performance horizontal showcase gallery built using pure HTML5 and CSS3. Features smooth scroll-snap positioning, desktop mouse wheel scroll support, customizable CSS variables, and full accessibility support.

## Overview

The Horizontal Scroll Showcase Gallery provides a clean, continuous horizontal card scrolling experience for desktop and mobile users. Built with pure CSS `scroll-snap-type: x mandatory` and `overscroll-behavior-x: contain`, it allows natural desktop horizontal wheel scrolling and touch gestures without layout shifts.

## Features

- **Pure HTML5 & CSS3**: Lightweight, zero JavaScript execution needed.
- **Scroll Snap Ergonomics**: Smooth snap alignment on card boundaries.
- **Horizontal Mouse Wheel Scroll**: Optimized layout for horizontal touchpad and wheel navigation.
- **Keyboard & Screen Reader Accessible**: Viewport has ARIA region attributes and focusable controls.
- **Prefers-Reduced-Motion Support**: Disables smooth scroll animations for motion-sensitive users.
- **Responsive Fluid Cards**: Dynamic card scaling for mobile, tablet, and desktop viewports.

## Folder Structure

```
css-horizontal-scroll-gallery/
├── demo.html    # HTML gallery markup and cards
├── style.css    # Modern CSS layout, scroll snap & variables
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your project document:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<section class="gallery-wrapper" aria-label="Showcase Gallery Showcase">
  <div class="gallery-viewport" tabindex="0" role="region" aria-label="Horizontal scrollable gallery items">
    <div class="gallery-track">
      <article class="gallery-card">
        <div class="card-media">
          <span class="card-tag">Design</span>
        </div>
        <div class="card-body">
          <h2 class="card-title">Neon Cyberpunk UI</h2>
          <p class="card-desc">Dynamic neon aesthetics built with CSS variables.</p>
          <a href="#" class="card-link">Explore Item &rarr;</a>
        </div>
      </article>
    </div>
  </div>
</section>
```

## CSS Variables

Customizable tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --bg-card-hover: #1e2942;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent-cyan: #38bdf8;
  --accent-purple: #818cf8;
  --border-subtle: #2d3748;
  --focus-ring: #38bdf8;

  --card-width: 320px;
  --gap-size: 1.5rem;
  --radius-lg: 16px;
  --radius-sm: 8px;
}
```

## Customization

You can customize card width and gap size via CSS custom properties:

```css
.gallery-wrapper {
  --card-width: 360px;
  --gap-size: 2rem;
}
```

## Accessibility

- **Keyboard Focusable**: Viewport can be focused with `Tab` key and navigated using Arrow keys (`Left`/`Right`).
- **ARIA Semantics**: Viewport exposes `role="region"` with a clear `aria-label`.
- **WCAG AA Compliance**: High text-to-background contrast ratios.
- **Focus Rings**: High-contrast blue focus indicators on interactive elements.

## Responsive Behaviour

- **Desktop (1024px+)**: Displays multi-card viewport with horizontal scroll snap.
- **Mobile (<640px)**: Adjusts card width down to 260px for compact screen viewports.

## Browser Compatibility

- Chrome / Edge 80+
- Firefox 75+
- Safari 14+
- iOS Safari / Android Chrome
