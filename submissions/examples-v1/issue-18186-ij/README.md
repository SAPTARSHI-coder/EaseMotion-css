# ease-flip-card

A pure CSS 3D card flip animation. The card rotates 180° on hover, revealing back content with a smooth perspective transform.

## Usage

Open `demo.html` in any modern browser and hover over the card.

## Files

- `demo.html` – Entry point with the flip-card markup and dark theme.
- `style.css` – All animation styles (perspective, 3D transforms, reduced-motion fallback).

## Notes

- Uses `perspective`, `transform-style: preserve-3d`, and `backface-visibility` for the 3D flip effect.
- Respects `prefers-reduced-motion` by disabling the transition.
