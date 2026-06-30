# Browser Window Mockup Component

## Overview

Browser Window Mockup is a Chrome-inspired browser frame component for showcasing websites, applications, dashboards, and portfolios. Built with pure CSS, it provides multiple styling variants and smooth hover animations.

## Features

- Chrome-style browser frame with realistic controls
- Responsive layout suitable for all screen sizes
- Multiple variants: Standard, Dark, Glassmorphism, Compact, Minimal
- Smooth hover lift and scale effects
- Optional floating animation
- CSS variables for customization
- Zero JavaScript required
- Respects `prefers-reduced-motion`
- Print-friendly styling

## Available Classes

- `.ease-browser` — Main browser window container.
- `.ease-browser-header` — Browser header section with controls.
- `.ease-browser-controls` — Container for control buttons.
- `.ease-browser-control` — Individual control button (apply `.red`, `.yellow`, or `.green`).
- `.ease-browser-addressbar` — URL/address bar display.
- `.ease-browser-content` — Content area for screenshots or images.

## Variants

- `.ease-browser-dark` — Dark theme variant with reduced background brightness.
- `.ease-browser-glass` — Glassmorphism effect with blur and transparency.
- `.ease-browser-compact` — Compact spacing and smaller dimensions.
- `.ease-browser-minimal` — Streamlined minimal style.
- `.ease-browser-hover` — Enhanced hover lift effect.
- `.ease-browser-animate` — Continuous floating animation.

## Usage

### Basic Example

```html
<div class="ease-browser">
  <div class="ease-browser-header">
    <div class="ease-browser-controls">
      <div class="ease-browser-control red"></div>
      <div class="ease-browser-control yellow"></div>
      <div class="ease-browser-control green"></div>
    </div>
    <div class="ease-browser-spacer"></div>
    <div class="ease-browser-addressbar">example.com</div>
  </div>
  <div class="ease-browser-content">
    <img src="screenshot.jpg" alt="Website preview" />
  </div>
</div>
```

### Dark Theme

```html
<div class="ease-browser ease-browser-dark">
  <!-- Same structure -->
</div>
```

### Glassmorphism

```html
<div class="ease-browser ease-browser-glass">
  <!-- Same structure -->
</div>
```

### Compact Variant

```html
<div class="ease-browser ease-browser-compact">
  <!-- Same structure -->
</div>
```

### With Animation

```html
<div class="ease-browser ease-browser-animate">
  <!-- Same structure -->
</div>
```

## Customization

Override CSS variables to adapt the component:

```css
.ease-browser {
  --ease-browser-radius: 1.5rem;
  --ease-browser-shadow: 0 50px 150px rgba(0, 0, 0, 0.2);
  --ease-browser-bg: #f5f5f5;
  --ease-browser-header-bg: #efefef;
  --ease-browser-border: #d0d0d0;
  --ease-browser-transition: 0.35s cubic-bezier(0.2, 0.9, 0.3, 1);
}
```

### Dark Mode Variables

```css
.ease-browser-dark {
  --ease-browser-dark-header: #252525;
  --ease-browser-dark-bg: #0f0f0f;
  --ease-browser-dark-text: #f0f0f0;
}
```

### Glassmorphism Variables

```css
.ease-browser-glass {
  --ease-browser-glass-blur: 16px;
  --ease-browser-glass-opacity: 0.12;
}
```

## Browser Compatibility

- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Accessibility

- Respects `prefers-reduced-motion` by disabling animations for users with motion sensitivity.
- Proper contrast ratios for all text and controls.
- Semantic HTML structure.
- Compatible with keyboard navigation and screen readers.

## Notes

- The component is purely decorative; ensure any interactive content inside the browser frame has proper accessibility attributes.
- Use `<img>` tags or background images inside `.ease-browser-content` for mockup displays.
- Combine with other EaseMotion utilities for enhanced animation effects.
