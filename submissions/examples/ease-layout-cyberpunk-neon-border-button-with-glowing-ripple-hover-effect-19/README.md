# Cyberpunk Neon Border Button (Glassmorphic Style)

A neon ripple button set inside a frosted glass panel, combining cyberpunk glow with glassmorphism. No JavaScript.

## How it works
The panel uses `backdrop-filter: blur()` with a translucent fill, sitting on a purple-to-black gradient background. The buttons themselves use the same `currentColor`-driven ripple and box-shadow glow mechanism as the framework's other cyberpunk buttons.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-neon-duration`, `--ease-neon-easing`, `--ease-neon-cyan`, `--ease-neon-pink`, `--ease-neon-radius`, `--ease-glass-panel-bg`, `--ease-glass-panel-border`

## Notes
Includes `-webkit-backdrop-filter` for Safari. Respects `prefers-reduced-motion`.