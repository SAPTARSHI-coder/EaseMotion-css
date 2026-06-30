# Constellation Link Hover Effect

## Overview

The Constellation Link Hover Effect is a premium, lightweight navigation micro-interaction inspired by drawing star constellations in a clear night sky. When a developer or user hovers over a navigation link, circular star nodes fade and scale into view at the diagonal corners, while thin glowing vector lines dynamically sketch across the top and bottom borders, and the link text highlights beautifully. This effect is designed for dark mode interfaces, SaaS landing pages, portfolios, and creative marketing sites where elegant and premium subtle details elevate the overall user experience.

---

## Features

- **Pure CSS Implementation:** Zero JavaScript dependencies.
- **No Layout Thrashing:** All line animations run entirely on high-performance CSS transforms (`scaleX`).
- **Semantic Markup:** Fully preserves semantic HTML structure using standard anchor and `span` tags.
- **Accessible Motion Preferences:** Seamlessly supports `@media (prefers-reduced-motion: reduce)` to minimize motion while preserving active hover highlight and glow properties.
- **Fully Customizable:** Easily tweaked via native CSS variables on `:root`.
- **Production-Ready & Responsive:** Lightweight footprint, highly composable, and works out-of-the-box on modern browsers.

---

## Folder Contents

- `demo.html` - A self-contained demo showcase page with night sky background styling.
- `style.css` - The complete CSS implementation containing properties, transitions, and customization variables.
- `README.md` - Technical and setup documentation.

---

## Usage

Include the semantic HTML structure:

```html
<nav class="constellation-nav">
  <a href="#" class="constellation-link">
    <span>Products</span>
  </a>
  <a href="#" class="constellation-link">
    <span>Features</span>
  </a>
  <a href="#" class="constellation-link">
    <span>Pricing</span>
  </a>
  <a href="#" class="constellation-link">
    <span>Contact</span>
  </a>
</nav>
```

And link the `style.css` stylesheet in the `<head>` of your project.

---

## Customization

You can easily adjust the parameters of the effect by overriding the following CSS custom properties defined in your stylesheet or inline:

```css
:root {
  /* Colors */
  --constellation-text: #9ca3af; /* Default link text color */
  --constellation-accent: #a5b4fc; /* Highlight, active text, and line color */
  --constellation-star-color: #ffffff; /* Solid core star color */
  --constellation-glow-color: rgba(165, 180, 252, 0.8); /* Glow shadow color */

  /* Sizing and Layout */
  --constellation-spacing: 2.5rem; /* Margin/gap spacing between links */
  --constellation-star-size: 5px; /* Size of the star nodes */
  --constellation-line-thickness: 1px; /* Line width */
  --constellation-glow-intensity: 0 0 8px 2px; /* Star glow distance/blur spread */

  /* Timing & Motion Curves */
  --constellation-duration: 400ms; /* Speed of the transition */
  --constellation-easing: cubic-bezier(
    0.25,
    1,
    0.5,
    1
  ); /* Motion easing curve */
}
```

---

## Browser Support

- Chrome, Edge, Safari, Opera (full support including CSS Custom Properties and advanced transform transitions)
- Firefox (full support)
- Safari iOS & Chrome Android (basic interactive states, fully responsive)

---

## Why It Fits EaseMotion CSS

This interaction aligns directly with the **EaseMotion CSS** philosophy:

1. **Animation-first & Premium:** Focuses on micro-interactions that draw the eye with subtle, professional-grade visual feedback rather than jarring, flashy movement.
2. **Zero JavaScript:** Built entirely on CSS selectors, transitions, and layout-safe transforms.
3. **Composable & Lightweight:** Can be dropped into any header navigation bar by applying a single class wrapper.
