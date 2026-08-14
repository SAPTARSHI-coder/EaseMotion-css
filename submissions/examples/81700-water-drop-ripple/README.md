# Water Drop Ripple

Water Drop Ripple is a lightweight CSS animation for expanding surfaces, touch feedback, loading states, and decorative reveal effects. It starts as a compact circle and expands outward while fading away.

## Features

- `@keyframes ease-water-drop-ripple` controls the expansion and fade.
- `--ease-duration` and `--ease-timing` make the motion configurable.
- The demo uses `transform` and `opacity` for the animated properties.
- The ripple layer is generated with a pseudo-element, keeping the HTML simple.
- Reduced-motion preferences remove the non-essential animation.

## Usage

```html
<div class="ripple-demo">Ripple</div>
```

Apply the same keyframe to a pseudo-element when a visible ring is required around the main element.

## Demo

Open `demo.html` directly in a modern browser. No JavaScript or build tooling is required.
