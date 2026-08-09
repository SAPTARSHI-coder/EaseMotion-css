# CSS Brand Logo Marquee

A pure CSS infinite scrolling marquee strip, perfect for displaying partner logos, sponsors, or client brands on a landing page.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` and a duplicated DOM group to create a seamless, infinite scrolling loop.
- **Interactive States**: Hovering over a logo applies a subtle scale and color transition. More importantly, hovering or focusing within the marquee container automatically pauses the scrolling animation (`animation-play-state: paused`), ensuring users can read or click links comfortably.
- **Smooth Edge Gradients**: Uses CSS `linear-gradient` pseudo-elements over the edges of the container to fade the logos in and out smoothly as they scroll into view.
- **Accessible & Responsive**: Fully supports keyboard navigation. The duplicated logo set utilizes `aria-hidden="true"` and `tabindex="-1"` so screen readers and keyboard users do not traverse redundant links. 
- **Reduced Motion Support**: Explicitly respects `prefers-reduced-motion` by completely disabling the automatic scrolling animation and reorganizing the logos into a static, wrapped flexbox grid.

## Usage

Simply drop the HTML structure into your layout. Ensure you duplicate your logo set exactly once to create the seamless loop.

```html
<div class="marquee-container" role="region" aria-label="Partner Logos">
  <div class="marquee-track">
    
    <!-- Original Set -->
    <a href="#" class="brand-logo" aria-label="Brand A">Logo A</a>
    <a href="#" class="brand-logo" aria-label="Brand B">Logo B</a>

    <!-- Duplicated Set (Hidden from Screen Readers) -->
    <a href="#" class="brand-logo" aria-hidden="true" tabindex="-1">Logo A</a>
    <a href="#" class="brand-logo" aria-hidden="true" tabindex="-1">Logo B</a>

  </div>
</div>
```

## CSS Custom Properties
Easily customize the visual styling using the root variables in `style.css`:
- `--marquee-bg`: Background color of the marquee strip (default: `#ffffff`)
- `--border-color`: Top and bottom border color (default: `#e2e8f0`)
- `--logo-color`: Default fill/text color of the logos (default: `#64748b`)
- `--logo-hover`: Hover color for the logos (default: `#0f172a`)
- `--fade-width`: Width of the edge fade gradients (default: `100px`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
