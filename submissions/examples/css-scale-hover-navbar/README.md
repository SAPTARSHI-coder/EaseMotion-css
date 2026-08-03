# CSS Scale-Hover Navbar

A modern, lightweight, pure CSS navbar designed for SaaS applications, featuring elegant scale and lift animations on hover.

This example layout resolves [Issue #59566](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59566).

## Features

- **Pure CSS/HTML**: Zero JavaScript dependencies required for any of the functionality or animations.
- **Scale Animations**: Uses CSS `transform: scale()` combined with a custom `cubic-bezier` timing function to give links and buttons a natural, playful "pop" when hovered.
- **Responsive Mobile Menu**: Fully functional on desktop, tablet, and mobile viewports. The dropdown menu smoothly scales in without any JavaScript, using the invisible `<input type="checkbox">` and `<label>` technique.
- **Accessible**: Full support for `prefers-reduced-motion`. If a user prefers reduced motion, the scale animations are completely disabled and gracefully degrade to standard background and color changes.

## Usage

1. Include `style.css` in your HTML file.
2. Use the provided HTML structure.

```html
<nav class="scale-navbar">
  <div class="navbar-container">
    <!-- Logo, checkbox toggle, and nav links go here -->
  </div>
</nav>
```

## Customization (CSS Variables)

You can easily adapt colors by modifying the `:root` variables in `style.css`:

```css
:root {
  --nav-bg: #ffffff;
  --primary: #2563eb;
  --hover-bg: #f3f4f6;
  /* Add more to fit your brand colors */
}
```
