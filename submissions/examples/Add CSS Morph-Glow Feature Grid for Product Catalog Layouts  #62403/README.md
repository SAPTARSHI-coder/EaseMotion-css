# CSS Morph-Glow Feature Grid for Product Catalog Layouts

A breathtaking, pure CSS product catalog grid featuring an ethereal "Morph-Glow" interaction. When a user hovers over a product card, a fluid gradient blob awakens behind a frosted glass layer. The blob mathematically morphs its border-radius and slowly rotates, creating a dynamic, sweeping neon glow that softly highlights the card contents.

## Features

- **Layered Glassmorphism Physics**: Achieves the diffused morph-glow effect entirely via CSS stacking layers. A vibrant, animated `.morph-blob` is positioned in the background, overlaid by a `.card-glass` panel utilizing heavy `backdrop-filter: blur(40px)`. This organically diffuses the hard CSS gradient into a soft, premium neon glow.
- **CPU Optimized Animation**: The complex `@keyframes morphBlob` utilizes `animation-play-state: paused` by default. The math-heavy animation only runs when the card is actively hovered, ensuring a buttery 60fps experience even on pages packed with dozens of catalog items.
- **Fluid Grid Architecture**: Built using a robust `display: grid` with `repeat(auto-fit, minmax(320px, 1fr))`, guaranteeing perfect alignment, flexible column counts, and wrapping on mobile, tablet, and desktop viewports without requiring a single media query.
- **Accessibility Integrated**: Strictly adheres to `@media (prefers-reduced-motion: reduce)`. For motion-sensitive users, the morphing border-radius, rotation, and card lift transforms are completely stripped, defaulting to a static, soothing opacity fade-in.

## File Structure

```
Add CSS Morph-Glow Feature Grid for Product Catalog Layouts  #62403/
├── demo.html     # Semantic layout mimicking a premium dark-mode tech product catalog
├── style.css     # CSS rules encapsulating the layered morphing blob and frosted glass logic
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The CSS Z-Index Stack
To create a glow that sits *behind* the text but *inside* the card, we utilize absolute positioning and z-indexes:
- **Layer 0 (z-index: 0)**: The `.morph-blob`. A vibrant, animated gradient that rotates and changes shape.
- **Layer 1 (z-index: 1)**: The `.card-glass`. Stretches across the card and applies a heavy `backdrop-filter: blur()`.
- **Layer 2 (z-index: 2)**: The `.card-content`. The actual product image, title, and price.

When you hover the `.feature-card`, the `.morph-blob` fades in and begins animating. The `.card-glass` catches this animation and blurs it heavily, rendering a beautiful "glowing glass" aesthetic.

## Custom Properties

You can customize the base colors by tweaking the CSS variables in `style.css`:

```css
:root {
  --bg-dark: #09090b;       /* Body Background (Zinc 950) */
  --card-glass: rgba(24, 24, 27, 0.5); /* The frosted glass tint */
  --border: rgba(255, 255, 255, 0.1);  /* The glass border stroke */
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Hover over any of the product cards to awaken the Morph-Glow fluid physics!
