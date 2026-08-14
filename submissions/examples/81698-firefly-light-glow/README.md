# Firefly Light Glow

Firefly Light Glow is a looping CSS effect for ambient indicators, decorative particles, status lights, and soft visual accents. The element gently changes scale, position, and opacity to resemble a drifting light.

## Features

- `@keyframes ease-firefly-light-glow` provides the animation.
- `--ease-duration` controls the pulse rhythm.
- `--ease-timing` controls interpolation.
- The motion uses `transform` and `opacity`.
- `prefers-reduced-motion` disables the loop when requested.

## Usage

```html
<div class="firefly-demo">Glow</div>
```

For a reusable utility, apply the same keyframe and variables to the target component while keeping the animated properties limited to compositor-friendly values.

## Demo

Open `demo.html` directly in a modern browser. No JavaScript is required.
