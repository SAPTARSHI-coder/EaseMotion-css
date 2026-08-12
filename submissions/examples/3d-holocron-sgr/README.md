# 3D Unfolding Sci-Fi Holocron / Puzzle Box

An animation-first, zero-dependency, pure-CSS interactive 3D unfolding sci-fi puzzle box (holocron) that splits open to reveal a glowing, pulsing energy core.

## What is this?

This is a premium, pure-CSS interactive 3D component that replicates a high-tech sci-fi puzzle box (holocron). The entire experience—including 3D orbital rotation, geometric panel separation, core ignition, color selection, and scanline rendering—runs entirely inside the browser's native rendering engine without a single line of JavaScript.

## How does it work?

- **3D Coordinate Space Mapping**: We construct a 3D box using six absolute-positioned panels. By utilizing `transform-style: preserve-3d` and setting `perspective` on the parent viewport, the box is projected in realistic perspective. The panels are positioned using 3D translation (`translateZ(80px)`) and rotation (`rotateX`/`rotateY`).
- **Interactive Checkbox/Radio Hack**: By placing hidden checkbox/radio inputs as sibling elements before the viewport container, we bind user interactions (like clicking the cube, changing core color, or toggling scanlines) to CSS state rules using the `~` general sibling selector.
- **Dimensional Blooming**: When checked, the panels transition to an open state (`translateZ(160px)` combined with rotation and scaling), revealing the pulsing energy core centered in the viewport.
- **Hardware Acceleration**: Transitions and animations utilize composition-friendly CSS properties (`transform`, `opacity`, `box-shadow`) to ensure a smooth 60fps rendering path offloaded to the GPU.
- **Accessibility Fallback**: Fully respects `prefers-reduced-motion: reduce` by disabling fast spins and showing a static unfolded state to remain safe and readable for assistive tools.

## Why is it useful?

- **Advanced CSS Showcase**: Demonstrates the potential of pure-CSS state machines and 3D transforms, proving that complex interactive graphics can be built without the overhead of JavaScript libraries or Canvas/WebGL.
- **Zero Overhead**: Since the logic is entirely CSS-based, it adds 0ms to the JS scripting budget and executes immediately upon layout paint.
- **High Design Polish**: Perfectly aligned with the visual expectations of modern gaming portals, SaaS dashboards, and futuristic landing pages.
