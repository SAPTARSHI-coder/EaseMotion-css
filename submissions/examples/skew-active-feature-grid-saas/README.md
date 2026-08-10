# Skew-Active Feature Grid — SaaS Showcase

A feature grid where each card starts with a subtle skew and un-skews on hover. The tilt gives the grid a dynamic, angular feel that resolves when the user interacts with a card.

## How It Works

Cards have `skewX(-2deg)` applied by default. On hover, the skew transitions to `skewX(0deg)` using a decelerating cubic-bezier curve. The card also lifts with a shadow. The combination of un-skewing and shadow-lift makes the card feel like it's snapping into focus.

The skew is intentionally small (-2deg) so the effect is noticeable but not disorienting. It works well for feature grids where you want a bit of visual tension that resolves on interaction.

## Customization

- Change `--saf-orange` for a different accent color
- Adjust the initial `skewX()` for more or less tilt
- Modify the cubic-bezier for different deceleration feels
- The grid adapts automatically via `auto-fit` and `minmax`

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables the skew transition
- Responsive from mobile to wide desktop
- 6 cards in a flexible grid layout
