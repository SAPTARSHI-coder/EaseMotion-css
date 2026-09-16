# Smoke Dissolve Fade

Smoke Dissolve Fade is an atmospheric CSS animation for exit states, overlays, notifications, and decorative transitions. The element drifts upward while becoming larger and progressively transparent.

## Features

- `@keyframes ease-smoke-dissolve-fade` defines the full sequence.
- `--ease-duration` and `--ease-timing` make the motion configurable.
- `transform` and `opacity` are the only animated properties.
- Reduced-motion preferences disable the animation.

## Usage

```html
<div class="smoke-demo">Dissolve</div>
```

The timing variables can be overridden without modifying the keyframe sequence.

## Demo

Open `demo.html` directly in a modern browser. The implementation does not require JavaScript.
