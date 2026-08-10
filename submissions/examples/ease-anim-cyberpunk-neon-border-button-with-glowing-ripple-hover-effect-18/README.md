# Cyberpunk Neon Border Button with Glowing Ripple Hover

A pure CSS button styled in a cyberpunk neon aesthetic — glowing border, and a ripple that expands from center on hover. No JavaScript.

## How it works

The glow is a layered `box-shadow` using the button's own accent color, intensified on hover. The ripple is a small `::before` pseudo-element centered on the button, scaled to 0 by default; on hover it plays a `@keyframes` animation scaling it up to fully cover the button while fading out, using `currentColor` so it automatically matches whichever accent (cyan or magenta) the button uses.

## Files
- `demo.html` – two neon buttons (cyan "Connect", magenta "Disconnect")
- `style.css` – all styling, custom properties, glow, and ripple keyframe
- `README.md` – this file

## Custom properties
- `--ease-neon-duration`, `--ease-neon-easing` – ripple timing
- `--ease-neon-bg` – page background
- `--ease-neon-cyan`, `--ease-neon-magenta` – accent colors
- `--ease-neon-radius` – button corner radius

## Notes
- `currentColor` on the ripple means adding a new accent variant only requires setting `border-color`/`color`/`box-shadow`, no extra ripple styling needed
- `:focus-visible` outline included for keyboard users
- Respects `prefers-reduced-motion`