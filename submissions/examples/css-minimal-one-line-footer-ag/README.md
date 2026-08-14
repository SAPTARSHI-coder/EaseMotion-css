# CSS Minimal One-line Footer

A clean, responsive one-line footer component that gracefully scales down for mobile devices without relying on complex grid systems.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Uses flexbox to perfectly align brand copy, navigation links, and social icons onto a single visual line.
- **Micro-Interactions**: The text navigation links feature a sleek underline-grow animation (`scaleX`) that elegantly shifts its transform origin from right-to-left on hover. The social links visually invert their colors and playfully elevate (`translateY`) upon interaction.
- **Responsive Wraparound**: Designed to look like a precise one-line footer on desktop, while elegantly collapsing into a centered, vertically stacked layout on mobile viewports (`< 640px`) using simple CSS media queries.
- **Accessible**: Implements proper `<nav>` tags, unordered lists `<ul>` for links, and clear `aria-label`s for SVG-only social buttons, ensuring screen readers parse the footer correctly. Respects user preferences by gracefully disabling transitions and scaling animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure at the absolute bottom of your web layout.

```html
<footer class="minimal-footer" aria-label="Site Footer">
  <div class="footer-inner">
    <div class="footer-brand">...</div>
    <div class="footer-socials">...</div>
  </div>
</footer>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--footer-bg`: Background color of the footer (default: `#ffffff`)
- `--text-main`: Text and icon color (default: `#64748b`)
- `--text-hover`: Active hover color for links and icons (default: `#0f172a`)
- `--accent-color`: Highlight color for the underline hover animation (default: `#3b82f6`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge). The `transform-origin` animation logic is widely supported.
