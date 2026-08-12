# CSS Ripple-Wave Progress Bar (Minimalist Tech Layouts)

A pure CSS progress bar featuring a clean, minimalist aesthetic, an animated striped wave pattern, and a continuous pulsating ripple effect at the leading edge.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` to animate the progress fill and the wave/ripple effects.
- **Ripple-Wave Animations**: The progress bar's surface contains an infinitely moving diagonal wave stripe pattern. The leading edge (thumb) features a smooth, continuous pulsating ripple using `box-shadow` animations on pseudo-elements.
- **Minimalist Tech Theme**: Styled with a clean, low-contrast color palette (slate/sky blues), subtle drop shadows, and modern sans-serif typography, making it perfect for admin panels and tech dashboards.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling the continuous ripple and wave animations, leaving a clean, static filled bar.

## Usage

Simply drop the HTML structure into your layout. The progress fill percentage is controlled via `@keyframes` (for the pure CSS showcase), but in a real application, you would set the inline `width` style on the `.progress-fill` element dynamically.

```html
<div class="progress-container">
  <div class="progress-header">
    <h3 class="progress-title">Task Progress</h3>
    <span class="progress-value">80%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill"></div>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--tech-bg`: Page background color (default: `#f8fafc`)
- `--tech-surface`: Component background (default: `#ffffff`)
- `--tech-primary`: Primary progress bar color and ripple (default: `#0ea5e9`)
- `--tech-primary-light`: Gradient start color for progress bar (default: `#7dd3fc`)
- `--tech-text-dark`: Primary text color (default: `#0f172a`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
