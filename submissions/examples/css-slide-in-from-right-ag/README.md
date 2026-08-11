# CSS Slide In from Right

A beautiful scroll-triggered component that slides an element into view from the right side of the screen as the user scrolls down the page.

## Features
- **Modern Pure CSS Implementation**: This component showcases the cutting-edge CSS Scroll-Driven Animations specification. By utilizing `animation-timeline: view()` and `animation-range`, the slide-in animation is tied directly to the browser's native scroll engine entirely via CSS, offering massive performance gains over traditional JavaScript scroll listeners.
- **Graceful JS Fallback**: For browsers that do not yet support CSS scroll timelines (like Safari), a minimal, highly optimized `IntersectionObserver` script fallback is provided. 
- **Polished Micro-Interactions**: The element uses a custom `ease-out` timing function and horizontal translation (`translateX`) to create a frictionless, floating entry feel.
- **Accessible & Responsive**: Employs `overflow-x: hidden` on the `body` to prevent horizontal scrollbar flashing during the animation sequence. Explicitly respects user preferences by gracefully disabling both the CSS and JS animations entirely if the system detects `@media (prefers-reduced-motion: reduce)`.

## Usage

Place the card in your HTML layout. The `demo-container` padding in the demo is only used to push the element down so you can physically scroll to it.

```html
<div class="slide-in-card">
  <!-- Your content -->
</div>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--card-bg`: Background color of the card (default: `#ffffff`)
- `--text-main`: The main text color (default: `#0f172a`)
- `--text-muted`: Body text color (default: `#64748b`)
- `--shadow-color`: The ambient drop shadow color (default: `rgba(0, 0, 0, 0.1)`)

## Browser Support
- **Chrome/Edge**: Fully supported via native CSS `animation-timeline`.
- **Firefox/Safari**: Fully supported via the included `IntersectionObserver` JS fallback until native support lands.
