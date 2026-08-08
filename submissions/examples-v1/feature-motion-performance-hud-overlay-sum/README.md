# Motion Performance HUD Overlay

Related issue: #51879

## What does this do?

An on-screen performance HUD that measures live FPS via `requestAnimationFrame` while a sample animation scene runs. It listens for long main-thread tasks with `PerformanceObserver` when supported, and falls back to a lightweight heuristic during layout-thrashing mode. Toggle between GPU-friendly motion (transform/opacity) and layout-thrashing motion (width/height/top/left) to see the difference in frame time and warnings.

## How is it used?

Open `demo.html` in a browser.

1. Click **Start animation** to begin the sample scene and FPS tracking.
2. Switch between **GPU-friendly mode** and **Layout-thrash mode** to compare compositor-friendly vs reflow-heavy animation.
3. Watch the HUD for FPS, average frame time, long-task count, and warning messages.
4. Read the educational tip below the scene for guidance on composite-only properties.

No build step, CDN, or server is required.

## Why is it useful?

Motion-heavy interfaces fail accessibility and UX expectations when frames drop or the main thread blocks. This demo gives contributors a tangible side-by-side comparison of animation strategies with real-time metrics — ideal for workshops, performance reviews, and onboarding around motion best practices.

## Accessibility

- HUD updates use `aria-live="polite"` so screen readers are not spammed every frame.
- Control buttons expose `aria-pressed` state.
- Animations pause under `prefers-reduced-motion: reduce`; the HUD and controls remain usable.

## Files

```
submissions/examples/feature-motion-performance-hud-overlay-sum/
├── demo.html
├── style.css
└── README.md
```
