# CSS Button: Synthwave Grid Line

A retro-futuristic **Synthwave Grid Line Button** component built with pure HTML and Vanilla CSS.

The component combines neon colors, glowing borders, gradient highlights, a perspective grid, and smooth interactions inspired by classic synthwave aesthetics.

## ✨ Features

- Synthwave-inspired button design
- Perspective neon grid background
- Animated grid movement
- Neon pink, cyan, and purple accents
- Smooth hover transitions
- Animated button highlight sweep
- Glowing button shadows
- Keyboard focus states
- Responsive layout
- Dark-mode compatible
- Reduced-motion support
- No JavaScript
- No external dependencies

## 🎨 Synthwave Treatment

The visual style uses layered CSS gradients and glow effects.

```css
.synth-button {
  border: 1px solid var(--button-color);

  box-shadow:
    0 0 10px color-mix(
      in srgb,
      var(--button-color),
      transparent 75%
    );
}