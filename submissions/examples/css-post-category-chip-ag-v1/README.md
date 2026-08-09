# CSS Post Category Chip

A collection of vibrant, interactive category chips designed for blog post taxonomies. 

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS `::before` pseudo-elements and `transform` properties for high-performance hover effects.
- **Micro-Interactions**: Hovering or focusing on a chip triggers a synchronized animation: the chip elevates (`translateY`), the icon scales and rotates slightly for a playful feel, and a solid color background sweeps in from the left (`scaleX` transform) while the text color inverts to white.
- **Theming System**: Easily extensible. Includes specific classes (`.tech`, `.design`, `.tutorial`) that inherit structural properties but define their own distinct color palettes.
- **Accessible**: Functions as standard `<a>` tags for perfect semantic structure and keyboard navigability. Includes `aria-label`s for screen readers. Respects user preferences by gracefully disabling the sweep and scale animations via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your post metadata section. Add the specific category class (e.g., `tech`) to apply the appropriate color theme.

```html
<a href="#" class="category-chip tech" aria-label="Browse Technology posts">
  <svg>...</svg>
  <span class="chip-text">Technology</span>
</a>
```

## CSS Custom Properties
Easily customize the color palette using the root variables in `style.css`:
- `--color-tech`: Base color for technology chips (default: `#3b82f6`)
- `--color-design`: Base color for design chips (default: `#ec4899`)
- `--color-tutorial`: Base color for tutorial chips (default: `#10b981`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge).
