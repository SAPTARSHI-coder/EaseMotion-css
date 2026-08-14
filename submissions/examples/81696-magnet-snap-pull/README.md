# Magnet Snap Pull

Magnet Snap Pull is a directional entrance animation for controls, cards, badges, and other elements that should appear to be pulled into place. It combines translation and scale with a short overshoot.

## Features

- `@keyframes ease-magnet-snap-pull` defines the motion.
- `--ease-duration` and `--ease-timing` provide configuration.
- Animation work is limited to `transform` and `opacity`.
- Reduced-motion users receive a static presentation.

## Usage

```html
<div class="magnet-demo">Snap</div>
```

The timing variables can be overridden at the component or parent level without changing the keyframe definition.

## Demo

Open `demo.html` directly in a modern browser. No JavaScript or build step is required.
