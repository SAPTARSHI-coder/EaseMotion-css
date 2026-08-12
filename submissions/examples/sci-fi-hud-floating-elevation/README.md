# Sci-Fi HUD: Floating Elevation

A futuristic **Sci-Fi HUD** interface built entirely with **HTML** and **CSS**. This example features a floating glassmorphism panel, rotating holographic rings, a glowing energy orb, animated particles, and a soft elevation effect to create a sleek cyberpunk-inspired UI.

## Features

- Pure HTML & Vanilla CSS
- No JavaScript or external libraries
- Floating elevation animation
- Rotating HUD scan rings
- Glowing energy orb
- Animated holographic particles
- Glassmorphism-inspired panel
- Responsive layout
- Dark mode compatible
- Hardware-accelerated animations using `transform` and `opacity`
- Supports `prefers-reduced-motion`

## File Structure

```text
submissions/examples/sci-fi-hud-floating-elevation/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern browser.
2. Modify the CSS variables in `style.css` to customize colors, glow intensity, or animation timing.
3. Integrate the component into any HTML project without additional dependencies.

## Accessibility

- Semantic HTML structure.
- Decorative elements remain separate from textual content.
- Includes `prefers-reduced-motion` support to respect user motion preferences.
- High-contrast neon colors improve visibility on dark backgrounds.

## Performance

Animations are optimized for smooth rendering by using GPU-friendly properties:

- `transform`
- `opacity`

No JavaScript, DOM manipulation, or layout-heavy animations are used.

## Browser Support

Compatible with modern versions of:

- Chrome
- Firefox
- Edge
- Safari

## Customization

You can easily adjust:

- Floating animation height and speed
- HUD ring size and rotation speed
- Orb glow color and intensity
- Particle positions and animation timing
- Panel dimensions and border styling

## License

Created as an **EaseMotion CSS** example submission for **GSSoC 2026**.