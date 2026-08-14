# Sci-Fi HUD: Particle Burst

A futuristic cyberpunk HUD interface built entirely with HTML and CSS. The component features animated scanning rings, a glowing energy core, and a radial particle burst to create a high-tech dashboard effect without JavaScript.

## Features

- Pure HTML & Vanilla CSS
- No JavaScript or external libraries
- Animated particle burst effect
- Expanding HUD scan rings
- Neon cyberpunk glow
- Dark mode friendly
- Responsive layout
- Hardware-accelerated animations using `transform` and `opacity`
- Supports `prefers-reduced-motion`

## File Structure

```
demo.html
style.css
README.md
```

## Usage

Open `demo.html` directly in any modern browser.

## Accessibility

- Semantic HTML structure
- Decorative elements use `aria-hidden="true"`
- Motion is disabled automatically for users with `prefers-reduced-motion`

## Performance

Animations are optimized by primarily animating GPU-friendly properties such as:

- `transform`
- `opacity`

No JavaScript or continuous DOM updates are required.

## Browser Support

Works in modern versions of:

- Chrome
- Firefox
- Edge
- Safari

## License

Created as an EaseMotion CSS example submission.