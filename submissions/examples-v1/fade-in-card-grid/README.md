# CSS Fade-In Card Grid

A pure CSS portfolio grid where each card fades in and settles into place on load, one after another. No JavaScript, no dependencies.

## How it works

Each `.ease-card` runs the same `@keyframes` fade-up animation, but `nth-child` selectors give each one a slightly later `animation-delay`, so instead of all six cards appearing at once, they roll in left to right, row by row.

Thumbnails use a CSS gradient instead of real images, since this is meant as a drop-in placeholder — swap `.ease-card-thumb` for an `<img>` in real use.

## Files

- `demo.html` – a 6-card portfolio grid
- `style.css` – grid layout, custom properties, and the stagger animation
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-grid-duration` – 0.6s
- `--ease-grid-easing` – ease-out
- `--ease-grid-radius` – 12px
- `--ease-grid-gap` – space between cards
- `--ease-grid-bg` – card background
- `--ease-grid-border` – card border color
- `--ease-grid-text` – title text color
- `--ease-grid-muted-text` – description text color
- `--ease-grid-thumb-start` / `--ease-grid-thumb-end` – gradient colors for the thumbnail placeholder

Example override:

```css
:root {
  --ease-grid-thumb-start: #f97316;
  --ease-grid-thumb-end: #7c2d12;
}
```

## Notes

- Grid drops from 3 columns to 2 at 768px, and to 1 at 480px
- Respects `prefers-reduced-motion` — cards appear instantly at full opacity with no stagger for users who have that set
- Dark theme matches the rest of the portfolio-style submissions in this batch, and is fully re-themeable through the custom properties above