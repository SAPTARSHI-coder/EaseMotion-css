# CSS Artist Badge

A sleek, premium verified artist badge component featuring a music note icon, designed specifically for music platforms and portfolios.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript.
- **Micro-Interactions**: Hovering or focusing the badge elevates the component (`translateY`), adds a neon glow (`box-shadow`), scales the blue verify icon with a playful spring effect (`cubic-bezier`), and triggers a subtle metallic shimmer that sweeps across the badge using a pseudo-element (`::after`).
- **Dark Mode Aesthetic**: Features a high-contrast dark theme by default with vibrant blue accents, standard for music streaming interfaces.
- **Accessible & Responsive**: Functions as a standard `<a>` tag for perfect semantic structure and keyboard navigability. Includes `aria-label`s for screen readers. Respects user preferences by gracefully disabling the sweep and scale animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure next to a profile name or header in your layout.

```html
<a href="#" class="artist-badge" aria-label="Verified Artist">
  <div class="verify-icon-wrapper" aria-hidden="true">
    <svg>...</svg> <!-- Music Note SVG -->
  </div>
  <span class="badge-text">Verified Artist</span>
</a>
```

## CSS Custom Properties
Easily customize the color palette using the root variables in `style.css`:
- `--badge-bg`: Background color of the pill (default: `#1e293b`)
- `--verify-color`: The verified checkmark/icon color (default: `#38bdf8`)
- `--verify-glow`: The hover glow color (default: `rgba(56, 189, 248, 0.4)`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge).
