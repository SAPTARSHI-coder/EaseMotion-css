# Mouse Trail Effect

A reusable, high-performance mouse particle trail effect for immersive landing pages, portfolios, and creative websites. Built seamlessly alongside EaseMotion CSS utilities.

## Features

- ✨ **Dynamic Particles:** Smooth glowing particles that elegantly follow your cursor or touch gestures.
- 🎨 **Easily Configurable:** Change the trail color simply by editing a single CSS variable.
- ♿ **Prefers-Reduced-Motion:** Automatically disabled at the browser level if a user prefers reduced motion, saving battery and ensuring accessibility.
- ⚡ **EaseMotion Integration:** Integrates beautifully with EaseMotion CSS utilities like `.fade-in-up` and `.pulse-hover`.

## Usage

1. Place the `<canvas id="trail-canvas"></canvas>` element into your HTML document as shown in `demo.html`.
2. Include the `style.css` which styles the canvas to sit fixed in the background while letting clicks pass through using `pointer-events: none`.
3. Include the `script.js` file to start tracking the mouse and rendering the glowing particle trail.

## Configuration

To change the color of the trail, just update the CSS variable in your `style.css`:

```css
:root {
  --trail-color: #00d2ff; /* Change to any hex, rgb, or hsl color */
}
```

To modify particle physics (speed, size, lifespan, density), simply adjust the constants and math in the `Particle` class within `script.js`.

## Contributed by
- Man1ac-1773
