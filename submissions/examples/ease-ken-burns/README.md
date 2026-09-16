# ease-ken-burns

A cinematic pan-and-zoom effect inspired by the Ken Burns documentary technique. The element slowly scales up and drifts across keyframe positions, creating the illusion of a camera slowly moving across an image. Pure CSS `@keyframes` — no JavaScript.

## Usage

```html
<!-- On an <img> element -->
<div class="ken-burns-container">
  <img class="ken-burns-img" src="your-image.jpg" alt="..." />
</div>

<!-- On a background-image div -->
<div class="ken-burns-container">
  <div class="ken-burns-bg"></div>
</div>
```

## How it works

- `.ken-burns-container` clips overflow so the zoomed/panned image stays bounded
- The keyframe cycles through four `scale()` + `translate()` positions over 12 seconds
- `ease-in-out` timing makes each movement feel like a natural camera settle
- `will-change: transform` hints the browser to GPU-composite the animated layer
- `prefers-reduced-motion` stops the animation entirely

## Customization

| Property | Description |
|----------|-------------|
| `animation` duration | Controls total cycle speed (default: `12s`) |
| `scale()` values | Zoom level at each keyframe stop (keep between 1.0–1.2 for subtlety) |
| `translate()` values | Pan direction and distance at each stop |
| Container dimensions | Set width/height on `.ken-burns-container` to any size |

## Accessibility

Respects `prefers-reduced-motion`. The image renders statically when reduced motion is preferred.
