# CSS Morph-Glow Navbar

A modern, dark-themed pure CSS navbar tailored for SaaS applications. It features a stunning, continuously morphing and spinning gradient glow effect behind the primary call-to-action button, along with elegant text-shadow glows on link hovers.

This layout resolves [Issue #59574](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59574).

## Features

- **Pure CSS/HTML**: Zero JavaScript dependencies for both the advanced animations and the mobile responsive menu.
- **Advanced Keyframe Animations**: 
  - The CTA button is backed by a `div.glow-wrapper` pseudo-element that combines `border-radius` morphing (`@keyframes morphGlow`) and rotation (`@keyframes spin`) with a blur filter to create a liquid glowing effect.
  - Links utilize `text-shadow` transitions to produce a neon-like glow on hover.
- **Glassmorphism Base**: Uses a semi-transparent background with `backdrop-filter` for a premium dark mode aesthetic.
- **Responsive Mobile Menu**: Fully functional on all viewports with a CSS-only hamburger toggle (`input[type="checkbox"]` method).
- **Accessible**: Built-in support for `prefers-reduced-motion`. The continuous animations stop entirely, defaulting to static elegant glows for users who prefer reduced motion.

## Usage

1. Include `style.css` in your HTML file.
2. Structure your HTML as demonstrated in `demo.html`. Note the extra `<div class="glow-wrapper">` element required around the CTA button to create the background morphing effect!

```html
<nav class="morph-glow-navbar">
  <div class="navbar-container">
    <!-- Links -->
    <div class="glow-wrapper">
      <a href="#" class="btn morph-btn">Get Started</a>
    </div>
  </div>
</nav>
```

## Customization (CSS Variables)

You can easily adapt the base colors by modifying the `:root` variables in `style.css`.
To change the morph-glow colors, simply adjust the `linear-gradient` within the `.glow-wrapper::before` selector.

```css
:root {
  --nav-bg: #0f172a; 
  --primary: #0ea5e9;
  /* Adjust based on your preferred brand colors */
}
```
