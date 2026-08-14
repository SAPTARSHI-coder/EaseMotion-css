# Ease Progress Overlay (#70424)

## 1. What does this do?
This component presents a glassmorphism loading overlay featured with a dynamic radial progress ring and a live counting percentage indicator, triggering seamlessly without JavaScript.

## 2. How is it used?
The implementation relies on the modern CSS `@property` API to define custom animatable CSS properties:
- `--ease-angle` (syntax: `<angle>`): Animates the angle sweep of `conic-gradient()` to fill the radial track from `0deg` to `360deg`.
- `--ease-num` (syntax: `<integer>`): Animates integer values from `0` to `100`, which are piped into `counter-reset: progress var(--ease-num)` and displayed via `content: counter(progress) "%"`.

The overlay appearance and animation state are managed through a pure CSS modal trigger using an invisible checkbox (`.ease-trigger:checked ~ .ease-overlay`).

## 3. Why is it useful?
Historically, creating animated numerical progress counters or smoothly animated radial progress rings required heavy JavaScript `requestAnimationFrame` loops, setInterval callbacks, or complex SVG stroke-dasharray manipulations. 

By utilizing CSS `@property` and `conic-gradient`, both number interpolation and radial ring painting are offloaded entirely to the rendering engine and GPU. This keeps the browser's main thread 100% free while providing a pure CSS solution for task progress overlays.
