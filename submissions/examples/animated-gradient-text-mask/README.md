# Animated Gradient Text Mask

A dynamic, continuous flowing gradient effect that only appears inside the text characters themselves. Perfect for large hero headings.

## Features
- **Pure CSS**: No JavaScript or external dependencies.
- **Smooth Animation**: Seamless color cycling using `background-position` animation.
- **Variants**: Includes `--slow` and `--subtle` modifier classes.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`.

## Files
- `demo.html`: HTML structure with heading and modifier examples.
- `style.css`: Gradient mask styles with `background-clip: text` and animation keyframes.

## Usage
```html
<h1 class="text-gradient-flow">Your Heading</h1>
<h2 class="text-gradient-flow text-gradient-flow--slow">Slower Pulse</h2>
```

## Customization
- **Colors**: Edit the `linear-gradient` in `.text-gradient-flow` to use your own palette.
- **Speed**: Adjust `animation-duration` (default 4s, `--slow` uses 8s).
- **Size**: The gradient band width is controlled by `background-size` (default 300%).
