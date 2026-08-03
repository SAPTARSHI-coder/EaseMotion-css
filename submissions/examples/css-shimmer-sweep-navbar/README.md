# CSS Shimmer-Sweep Navbar

A modern, lightweight, pure CSS navbar designed for SaaS applications, featuring a continuous background shimmer sweep, elegant link hover underlines, and a mobile-friendly hamburger menu without JavaScript.

This example layout resolves [Issue #59562](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59562).

## Features

- **Pure CSS/HTML**: Zero JavaScript dependencies for the shimmer animations or the responsive mobile menu toggle.
- **Glassmorphism**: Uses `backdrop-filter: blur()` to create a modern translucent background.
- **Shimmer Animations**: 
  - Periodic background shimmer-sweep across the navbar.
  - Interactive sweep on the "Get Started" CTA button on hover.
  - Smooth underline sweep on navigation links.
- **Responsive**: Fully functional on desktop, tablet, and mobile viewports with a CSS-only hamburger toggle menu (`input[type="checkbox"]` method).
- **Accessible**: Built-in support for `prefers-reduced-motion` to disable animations for users who prefer reduced motion.

## Usage

1. Include `style.css` in your HTML file (along with the core `easemotion.css` if integrating).
2. Use the provided HTML structure. The mobile menu relies on the invisible `<input type="checkbox">` and `<label>` combo for toggling state without JS.

```html
<nav class="shimmer-navbar">
  <div class="navbar-container">
    <!-- Logo, toggle, and links go here -->
  </div>
</nav>
```

## Customization (CSS Variables)

You can easily adapt colors, shimmer intensity, and blur effects by modifying the `:root` variables in `style.css`:

```css
:root {
  --nav-bg: rgba(255, 255, 255, 0.85);
  --nav-blur: 16px;
  --primary: #4f46e5;
  --shimmer-color: rgba(255, 255, 255, 0.7);
  /* Adjust to fit your SaaS brand */
}
```
