# CSS Bounce-Pulse Navbar

A modern, playful, pure CSS navbar designed for SaaS applications, featuring a continuous inviting pulse animation on the main call-to-action button, and a soft bounce effect when hovering over navigation links.

This layout resolves [Issue #59570](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59570).

## Features

- **Pure CSS/HTML**: Zero JavaScript dependencies required for any functionality, including the animations and mobile menu toggle.
- **Keyframe Animations**: 
  - Uses a `@keyframes pulse` animation to continuously draw attention to the primary "Start Free Trial" button, utilizing a scaling transform and a fading box-shadow ring.
  - Uses a `@keyframes bounce` effect to provide playful, interactive feedback when hovering over the logo and navigation links.
- **Responsive Mobile Menu**: Fully functional on desktop, tablet, and mobile viewports with a CSS-only hamburger toggle (using the invisible `<input type="checkbox">` and `<label>` technique).
- **Accessible**: Built-in support for `prefers-reduced-motion`. All continuous pulses and bouncy transforms gracefully degrade to static interactions for users who prefer reduced motion.

## Usage

1. Include `style.css` in your HTML file.
2. Structure your HTML as demonstrated in `demo.html`.

```html
<nav class="bounce-navbar">
  <div class="navbar-container">
    <!-- Logo, toggle, and nav links go here -->
  </div>
</nav>
```

## Customization (CSS Variables)

You can easily adapt the colors by modifying the `:root` variables in `style.css`:

```css
:root {
  --nav-bg: #ffffff;
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  /* Add more variables as needed for your specific brand */
}
```
**Note:** If you change the `--primary` color variable, be sure to update the `rgba(...)` values inside the `@keyframes pulse` definition to match your new button color for the expanding shadow effect!
