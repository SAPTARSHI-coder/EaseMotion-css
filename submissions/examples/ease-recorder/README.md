# ease-recorder

A lightweight EaseMotion CSS utility that records supported user interactions and replays them automatically, with playback controls and a progress timeline.

## Overview

`ease-recorder` captures interactions inside a container and replays them in chronological order. It supports hover, click, focus, blur, and scroll-triggered animations. This feature is designed to demonstrate component behavior without modifying existing animation utilities.

## Installation

1. Copy `demo.html`, `style.css`, `script.js`, and `README.md` into `submissions/examples/ease-recorder/`.
2. Ensure the demo loads `easemotion.css` first, then `style.css`, and finally `script.js`.

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="submissions/examples/ease-recorder/style.css" />
<script src="submissions/examples/ease-recorder/script.js"></script>
```

## Usage examples

Wrap the demo area in a container with `ease-recorder` and assign `data-recorder-id` values to interactive elements.

```html
<div class="ease-recorder">
  <div data-recorder-id="button-primary">...</div>
  <input data-recorder-id="input-search" />
  <div data-recorder-id="scroll-panel">...</div>
</div>
```

You can also use the demo controls to play, pause, restart, and stop recorded playback.

## Configuration options

The recorder can be customized through CSS custom properties:

```css
:root {
  --ease-recorder-control-gap: 1rem;
  --ease-recorder-panel-radius: 1.75rem;
  --ease-recorder-progress-height: 0.4rem;
  --ease-recorder-accent: #4338ca;
}
```

Playback speed is configurable via the built-in control menu in the demo.

## Browser compatibility

Works in modern browsers that support:

- CSS custom properties
- CSS grid
- `pointer` and `focus` events
- `prefers-reduced-motion`
- `requestAnimationFrame`

## Accessibility considerations

- Respects `prefers-reduced-motion` by disabling automatic playback and motion-related transitions.
- Uses semantic controls and labels for playback operations.
- Keeps the underlying interactive markup accessible to keyboard and screen reader users.

## Limitations

- The demo currently uses a built-in recorded sequence for demonstration, but the code captures real interactions and stores them in chronological order.
- Scroll-triggered animations are simulated through panel scroll positions and element visibility states.
- Export/import of recorded sequences is not yet implemented.

## Future enhancements

- Add support for exporting and importing recorded interaction sequences.
- Add a dedicated record button so users can capture their own interactions manually.
- Support additional event types such as drag, touch, or form inputs.
- Add a visual event timeline with event markers and labels.

---

Submitted by: @your-github-username
