# Fade-In Dropdown — Product Catalog

A CSS-only dropdown that fades in from a slightly raised position. The dropdown menu starts with `opacity: 0` and `translateY(-6px)`, then transitions to full visibility when the checkbox is toggled.

## How It Works

A hidden checkbox controls the dropdown state. When checked, the dropdown transitions from transparent and slightly above to fully visible at its natural position. The `opacity` and `transform` properties animate together for a smooth entrance.

The fade-in is subtle and professional — the menu appears to lower into place rather than just popping in. This works well for product catalogs where you want the navigation to feel polished but not distracting.

## Customization

- Change `--fid-cyan` for a different accent color
- Adjust `translateY(-6px)` for more or less vertical offset
- Modify the transition duration for faster or slower entrance
- The dropdown width adapts to its content via `min-width`

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables the dropdown animation
- Backdrop is not implemented (clicking elsewhere won't close it) — this is a pure CSS demo
- Product cards have a subtle hover lift effect
