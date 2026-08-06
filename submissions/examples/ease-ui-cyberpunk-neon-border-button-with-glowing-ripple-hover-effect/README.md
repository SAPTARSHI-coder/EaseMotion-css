# Cyberpunk Neon Border Button (Dark Mode Variant)

A muted, deep-dark cyberpunk button variant with a subtler neon glow and ripple hover, for interfaces that want the aesthetic without the brightness of the original. No JavaScript.

## How it works
Same ripple/glow mechanism as the base cyberpunk button — `currentColor`-driven `::before` ripple, box-shadow glow — but tuned to a darker background and softer violet/teal accents rather than saturated cyan/magenta.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-neon-duration`, `--ease-neon-easing`, `--ease-neon-bg`, `--ease-neon-violet`, `--ease-neon-teal`, `--ease-neon-radius`

## Notes
Respects `prefers-reduced-motion`. `:focus-visible` included.