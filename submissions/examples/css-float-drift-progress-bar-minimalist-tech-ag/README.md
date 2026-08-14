# CSS Float-Drift Progress Bar (Minimalist Tech Layouts)

A pure CSS progress bar featuring a clean, minimalist aesthetic and smooth "float-drift" animations.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` to animate the progress fill upon loading.
- **Float-Drift Animations**: The progress bar features a subtle, drifting light particle effect (`::after` pseudo-element) that floats across the active fill area. A floating tooltip label drifts upwards into place as the bar fills.
- **Minimalist Tech Theme**: Styled with a clean, low-contrast color palette, subtle shadows, and modern sans-serif typography suitable for dashboard and tech layouts.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling the continuous drifting animations and skipping directly to the final filled state.

## Usage

Simply drop the HTML structure into your layout. The progress fill percentage is controlled via `@keyframes` (for the pure CSS showcase), but in a real-world scenario, you would set the inline `width` style on the `.progress-fill` element via JavaScript.

```html
<div class="progress-container">
  <div class="progress-header">
    <h3 class="progress-title">Task Progress</h3>
  </div>
  <div class="progress-track">
    <div class="progress-label">75%</div>
    <div class="progress-fill"></div>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--tech-bg`: Page background color (default: `#f4f4f6`)
- `--tech-surface`: Component background (default: `#ffffff`)
- `--tech-primary`: Primary progress bar color (default: `#2563eb`)
- `--tech-primary-light`: Gradient start color for progress bar (default: `#60a5fa`)
- `--tech-text-dark`: Primary text and tooltip background color (default: `#1f2937`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
