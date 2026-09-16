# Heartbeat Pulsate

Heartbeat Pulsate is a looping CSS animation that creates a compact double-pulse rhythm. It works well for live indicators, notifications, attention cues, and subtle status feedback.

## Features

- `@keyframes ease-heartbeat-pulsate` defines the pulse sequence.
- `--ease-duration` controls the rhythm.
- `--ease-timing` controls the easing curve.
- Animated values use `transform` and `opacity`.
- Reduced-motion preferences disable the loop.

## Usage

```html
<div class="heartbeat-demo">Pulse</div>
```

Change the timing variables to match the surrounding interface without changing the keyframe definition.

## Demo

Open `demo.html` directly in a modern browser. No JavaScript or build step is required.
