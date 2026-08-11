# CSS Error 404 Page

A whimsical, fully animated 404 error page featuring a bouncing SVG ghost character, built entirely with CSS. 

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. The continuous floating and shadow-scaling animations are handled performantly via CSS `@keyframes`.
- **Coordinated Animation**: The ghost character translates up and down (`translateY`) while the shadow underneath simultaneously scales and fades (`scale` and `opacity`). The exact matching of their 3-second `ease-in-out` timing curves creates a convincing illusion of depth and physical bouncing.
- **Pure CSS Starry Background**: Uses multiple layered CSS `radial-gradient` backgrounds to create a starry night sky without needing any external images or SVGs.
- **Modern Typography**: Features dynamic `clamp()` typography for perfect scaling across mobile and desktop, alongside modern text gradients and `drop-shadow` filters.
- **Accessible & Responsive**: Fully supports keyboard navigation and screen readers (the decorative ghost is marked with `aria-hidden="true"`). Respects user preferences by gracefully disabling the infinite bouncing animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your application's 404 routing component.

```html
<main class="error-container">
  <div class="character-wrapper" aria-hidden="true">
    <svg class="ghost-svg">...</svg>
    <div class="ghost-shadow"></div>
  </div>
  <h1 class="error-code">404</h1>
  <p>Page Not Found</p>
  <a href="/" class="home-btn">Return Home</a>
</main>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#1e1b4b`)
- `--ghost-color`: The fill color of the SVG ghost (default: `#ffffff`)
- `--accent-color`: Highlight color for the return button (default: `#818cf8`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge).
