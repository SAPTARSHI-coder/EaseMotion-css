# CSS Glitch-Flicker Navbar

A pure CSS animated Navbar component utilizing a futuristic "Glitch and Flicker" interaction transition, styled to complement modern, high-tech, or dark-mode **SaaS Showcase** interface aesthetics.

## Features

- **Pure CSS**: Fully functional high-performance glitch hover effects using `clip-path`, `transform`, and `@keyframes`, requiring absolutely zero JavaScript.
- **Glitch & Flicker Effect**: Simulates a digital screen glitch by layering pseudo-elements (`::before` and `::after`) and animating them in opposite directions using cyan (`#0ff`) and magenta (`#f0f`).
- **SaaS Dark Mode Aesthetic**: Implements a sleek dark UI utilizing deep Slate colors (`#0f172a`), thin borders, and vibrant neon accents that reveal themselves on hover.
- **Accessibility Friendly**: Includes full `prefers-reduced-motion: reduce` support to instantly disable all rapid flicker/glitch animations for users sensitive to motion.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`.
3. **Important**: You must duplicate the text content of your links and brand name into a `data-text` attribute (e.g., `<a data-text="Pricing">Pricing</a>`) for the CSS pseudo-elements to read and render the glitch layers.

## Usage

```html
<nav class="ease-glitch-navbar">
    <div class="ease-glitch-brand" data-text="SaaS.io">SaaS.io</div>
    <ul class="ease-glitch-nav-links">
        <li><a href="#" class="ease-glitch-nav-link" data-text="Product">Product</a></li>
        <li><a href="#" class="ease-glitch-nav-link" data-text="Pricing">Pricing</a></li>
    </ul>
</nav>
```

## Why it fits EaseMotion CSS

- **Motion-First Focus**: Transforms standard hover states into a complex, multi-layered visual experience using advanced CSS techniques like `clip-path`.
- **Dependency Free**: Perfect for tech-focused landing pages where a standout visual aesthetic is required without importing heavy WebGL or JavaScript animation libraries.
