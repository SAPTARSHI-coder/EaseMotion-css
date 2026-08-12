# Ease Holographic Card

## What does this do?
Creates a shimmering, rainbow holographic foil effect over a card using pure CSS, completely eliminating the need for JavaScript.

## How is it used?
It leverages `mix-blend-mode: color-dodge` layered over a dark background card (`#1e293b`). The foil overlay consists of multi-layered, oversized `linear-gradient` backgrounds (`300% 300%` and `200% 200%`) that continuously shift position and rotate hue via CSS keyframe animation (`@keyframes ease-holo-shimmer`), producing a dynamic spectral shine. Hovering over the card intensifies the opacity and speeds up the animation.

## Why is it useful?
This approach completely avoids heavy JS dependencies like `<canvas>`, WebGL, or scroll/mouse event listeners. By utilizing CSS animations and blend modes, the optical processing is offloaded entirely to the browser GPU compositor, delivering buttery smooth 60 FPS performance while remaining lightweight and accessible.
