# Sunburst Effect — Rays Burst Outward on Interaction

An interactive canvas-based sunburst effect. Click anywhere on the canvas or press the Burst button to trigger rays exploding outward from that point, each with independently randomized speed, length, and glow. Switch to Pulse mode for continuous rhythmic rays radiating from center.

## Files

- `demo.html` — Markup for the canvas and control panel
- `style.css` — Panel and canvas styling
- `script.js` — Canvas rendering and interaction logic
- `README.md` — This file

## Features

- **Burst mode**: click the canvas (or press Space) to fire rays outward from that point, each with randomized speed and max length, fading out as they travel
- **Pulse mode**: continuous rhythmic pulsing rays radiating from the center, slowly rotating
- **8 color schemes**: Golden, Sunset, Sunrise, Cool, Neon, Fire, Ice, Aurora
- **Adjustable ray count**: 8 to 72 rays per burst
- **Adjustable burst speed, ray length, and glow intensity** via sliders with live value readouts
- **Keyboard shortcuts**: `Space` to burst, `P` to toggle Pulse mode
- **Accessible motion**: canvas glow effects are skipped under `prefers-reduced-motion: reduce`

## Techniques Used

- HTML5 Canvas 2D API for ray rendering, using `requestAnimationFrame` for the render loop
- `shadowBlur` / `shadowColor` for the glow effect on rays
- Per-ray randomized speed and max length for organic burst variation
- `devicePixelRatio` scaling for crisp rendering on high-DPI screens
- A single reduced-motion check that disables shadow glow rendering

## Usage

Open `demo.html` directly in a browser — no build step or dependencies required. Click the canvas, press the Burst button, or hit Space to trigger a burst. Switch modes and color schemes from the panel.

## Customization

- Add new color schemes by extending the `colorSchemes` object in `script.js`
- Adjust default ray count, speed, length, and glow via the initial `state` object
- Tweak fade-out rate by changing the `ray.life -= 0.012` decrement in `updateBurstRays()`