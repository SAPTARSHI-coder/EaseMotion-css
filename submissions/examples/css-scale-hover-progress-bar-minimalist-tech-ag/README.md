# CSS Scale-Hover Progress Bar (Minimalist Tech Layouts)

A pure CSS progress bar featuring a clean, minimalist aesthetic and an interactive, bouncy scale-up effect on hover.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `@keyframes` to animate the progress fill and `transform: scale()` for interactivity.
- **Scale-Hover Effect**: Hovering over the progress component triggers a smooth, bouncy `cubic-bezier` scale animation on the entire container, elevating the shadow and highlighting the percentage text.
- **Minimalist Tech Theme**: Styled with a clean, low-contrast color palette, subtle drop shadows, and modern sans-serif typography, making it perfect for modern tech dashboards.
- **Accessible & Responsive**: Adapts to smaller viewports and fully supports `prefers-reduced-motion` by gracefully disabling the bouncy scale animations and skipping directly to the final filled state.

## Usage

Simply drop the HTML structure into your layout. The progress fill percentage is controlled via `@keyframes` (for the pure CSS showcase), but in a real application, you would set the inline `width` style on the `.progress-fill` element dynamically.

```html
<div class="progress-container">
  <div class="progress-header">
    <h3 class="progress-title">Task Progress</h3>
    <span class="progress-value">65%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill"></div>
  </div>
</div>
```

## CSS Custom Properties
Easily customize the color scheme using the root variables in `style.css`:
- `--tech-bg`: Page background color (default: `#f1f5f9`)
- `--tech-surface`: Component background (default: `#ffffff`)
- `--tech-primary`: Primary progress bar color (default: `#3b82f6`)
- `--tech-border`: Progress track background and border color (default: `#cbd5e1`)
- `--tech-text-dark`: Primary text color (default: `#334155`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
