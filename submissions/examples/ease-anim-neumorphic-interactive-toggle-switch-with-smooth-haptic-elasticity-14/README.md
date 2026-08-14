# Neumorphic Interactive Toggle Switch (Vibrant Gradient)

A pure CSS toggle switch with a neumorphic inset track and a springy, "haptic-feeling" thumb snap. No JavaScript.

## How it works

The track uses inset box-shadows (dark + light, same tone as the background) to look pressed into the surface. The thumb is a real checkbox/label pairing — checking it slides the thumb across via `translateX` and switches the track to a vibrant gradient. The bounce comes from `cubic-bezier(0.34, 1.56, 0.64, 1)`, which overshoots slightly past the resting position before settling, giving a tactile "snap" feel.

## Files
- `demo.html` – two toggle rows (notifications, email digest)
- `style.css` – all styling, custom properties, and the snap transition
- `README.md` – this file

## Custom properties
- `--ease-toggle-duration`, `--ease-toggle-easing` – snap timing/curve
- `--ease-toggle-bg`, `--ease-toggle-shadow-light/dark` – neumorphic surface tones
- `--ease-toggle-track-width/height`, `--ease-toggle-thumb-size` – dimensions
- `--ease-toggle-gradient-start/end` – active-state gradient colors

## Notes
- Fully responsive
- `:focus-visible` outline for keyboard users
- Respects `prefers-reduced-motion` — snap is instant, no transition