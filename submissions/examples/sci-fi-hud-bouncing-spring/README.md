# Sci-Fi HUD: Bouncing Spring

A futuristic cyberpunk HUD interface built entirely with HTML and CSS. This example showcases a glowing spring-inspired animation with expanding scan rings, a neon energy core, and a responsive HUD panel. No JavaScript or external libraries are required.

## Features

- Pure HTML & Vanilla CSS
- No JavaScript or external dependencies
- Spring-inspired bouncing animation
- Animated HUD pulse rings
- Neon cyberpunk glow effects
- Responsive design
- Dark mode friendly
- Hardware-accelerated animations using `transform` and `opacity`
- Supports `prefers-reduced-motion`

## File Structure

```
submissions/examples/sci-fi-hud-bouncing-spring/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in any modern browser.
2. Customize the CSS variables to change colors and glow intensity.
3. Modify animation durations or easing values to create different spring effects.

## Accessibility

- Uses semantic HTML.
- Decorative visual elements are separated from content.
- Includes `prefers-reduced-motion` support to disable animations for users who request reduced motion.
- High-contrast neon colors improve readability on dark backgrounds.

## Performance

The animation is optimized for smooth rendering by animating GPU-friendly properties:

- `transform`
- `opacity`

No layout recalculations or JavaScript are used during animation.

## Browser Support

Compatible with modern versions of:

- Chrome
- Firefox
- Edge
- Safari

## Customization

You can easily customize:

- HUD colors using CSS variables
- Spring bounce intensity
- Ring animation speed
- Glow effects
- Panel size and border styling

## License

Created as an EaseMotion CSS example submission for GSSoC 2026.