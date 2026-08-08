# CSS Rotate-Fade Dropdown for Product Catalog Layouts

A clean, zero-JavaScript dropdown component featuring a 2D rotate and fade-in entry animation designed for product catalog sorting and filter bars.

## Features
- **Zero JavaScript:** Operates via checkbox state triggers and CSS sibling selectors (`~`).
- **Rotate-Fade Motion:** Animates smoothly from `rotate(-12deg)` to `rotate(0deg)` with custom spring-like cubic-bezier timing.
- **Backdrop Dismiss:** Closes on click outside using a CSS backdrop layer.
- **Accessible & Responsive:** Adapts to full width on mobile screens and includes `prefers-reduced-motion` fallbacks.

## CSS Custom Properties
Customize options in `style.css`:

```css
:root {
  --primary-color: #3b82f6;
  --bg-dark: #0f172a;
  --dropdown-bg: #334155;
  --rotation-angle: -12deg;
  --transition-speed: 0.35s;
}