# Glitch-Flicker Navbar — Minimalist Tech Layouts

A sticky navigation bar with a CSS glitch-flicker hover effect. When you hover a nav link, two color-shifted layers (cyan and pink) animate in with offset positions and clipped regions, creating a digital glitch look.

## How It Works

Each link stores its label text in a `data-text` attribute. The `::before` and `::after` pseudo-elements read that attribute and render duplicate text layers. On hover, keyframe animations move and clip these layers independently with a stepped timing function, producing the characteristic jitter and flicker of a glitch effect.

## Keyframes

Three keyframe sequences run together: `gfn-skew` tilts the main text slightly, while `gfn-glitch-cyan` and `gfn-glitch-pink` shift and reveal their respective color layers at different clip positions. All three complete in 0.4 seconds and use `steps()` easing for a digital, non-smooth feel.

## Accessibility

- Focus-visible outlines on all interactive elements
- `prefers-reduced-motion` disables all glitch animations and transitions
- Semantic `<nav>` element with `aria-label`
