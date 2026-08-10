# Neumorphic Interactive Toggle Switch (Glassmorphic Style)

A translucent, glassmorphic toggle switch with a smooth elastic snap, set inside a frosted glass panel. No JavaScript.

## How it works

The panel uses `backdrop-filter: blur()` with a translucent white fill and a thin light border for the frosted-glass look. The toggle itself follows a standard checkbox/label pattern; the thumb slides via `translateX` with a bouncy `cubic-bezier` easing, and the track fills with the accent color when active.

## Files
- `demo.html` – a settings panel with two toggle rows
- `style.css` – all styling, custom properties, glass panel, and toggle transition
- `README.md` – this file

## Custom properties
- `--ease-glass-duration`, `--ease-glass-easing` – snap timing/curve
- `--ease-glass-panel-bg`, `--ease-glass-panel-border` – glass panel translucency
- `--ease-glass-accent` – active track/eyebrow color
- `--ease-glass-track-width/height`, `--ease-glass-thumb-size` – dimensions

## Notes
- Uses `backdrop-filter` — include a `-webkit-` prefix for Safari support (already included)
- Respects `prefers-reduced-motion`