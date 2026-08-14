# Cinematic Depth-of-Field Parallax (#74082)

## Abstract
Standard parallax scroll implementations strictly shift element positions (`translateY`), resulting in a static 2D planar illusion. True optical cameras operating in 3D environments possess a physical focal length and dynamic depth-of-field (DoF). This submission introduces a pure CSS camera focal plane architecture that simulates realistic optical focus shifts synchronized to document scroll progression.

## Scroll-Driven Focal Shift
By binding spatial translation alongside dynamic Gaussian blur (`filter: blur(...)`) to CSS Scroll-Driven Animations (`animation-timeline: scroll(root)`), the focal plane continuously translates through the z-depth stack as the user scrolls:

- **Foreground Layer (`.ease-layer-fg`)**: Starts in sharp focal clarity (`blur(0px)`) and progressively transitions out of focus (`blur(15px)`) as it passes the virtual lens.
- **Midground Layer (`.ease-layer-mid`)**: Enters slightly soft (`blur(4px)`), hits optimal focal sharpness at 50% scroll progress (`blur(0px)`), and smoothly drifts out of focus (`blur(8px)`).
- **Background Layer (`.ease-layer-bg`)**: Starts heavily defocused (`blur(12px)`), resolving into crystal-clear optical focus (`blur(0px)`) at maximum scroll depth.

## GPU Compositing
Traditional script-driven parallax relies on JavaScript `scroll` event listeners and main-thread DOM manipulation, often causing frame drops and input latency. By utilizing CSS `animation-timeline: scroll(root)` alongside hardware-accelerated properties (`will-change: transform, filter`), GPU compositing handles the optical depth transformation entirely off the main thread with zero JavaScript execution overhead.
