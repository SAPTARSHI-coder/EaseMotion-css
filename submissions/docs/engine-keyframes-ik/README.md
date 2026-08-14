# Engine Keyframe Showcase: Spin, Heartbeat, Wobble, Rubber-Band, Flip-X, Flip-Y

## 1. What does this showcase do?

This submission provides keyframe definitions and utility classes for 6 engine animations:
- `ease-kf-spin` (Continuous element rotation)
- `ease-kf-heartbeat` (Double-pulse scaling effect)
- `ease-kf-wobble` (Side-to-side rotation wobble)
- `ease-kf-rubber-band` (Elastic squash-and-stretch transformation)
- `ease-kf-flip-x` (3D perspective flip along the X axis)
- `ease-kf-flip-y` (3D perspective flip along the Y axis)

These animation names are registered in `easemotion/engine/parser.js` (`ANIMATION_NAMES`) and `easemotion/engine/compiler.js` (`KEYFRAME_MAP`).

## 2. How is it used?

```html
<!-- Declarative class usage -->
<div class="ease-spin">⚙️</div>
<div class="ease-heartbeat">❤️</div>

<!-- Motion engine attribute usage -->
<div em="spin 1s linear repeat-infinite">Spinning</div>
<div em="heartbeat 1.3s ease-in-out repeat-infinite">Pulsing</div>
<div em="flip-x 800ms ease-in-out">Flipping</div>
```

## 3. Why does it fit EaseMotion CSS?

Completes keyframe specifications for animation tokens defined within the motion engine architecture, providing modular, composable, hardware-accelerated CSS animations.

## 4. Demo

Open `demo.html` in any web browser to interact with all 6 animations.
