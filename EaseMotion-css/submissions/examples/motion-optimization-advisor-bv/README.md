# Motion Optimization AI Advisor

## What does this do?

The Motion Optimization AI Advisor is a developer dashboard that benchmarks CSS transitions and animations, identifies rendering bottlenecks (layout-triggering vs composite-only transitions), estimates frame rates (FPS) against target device profiles, and suggests performance-optimized code replacements.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Select Preset / Code Input**: Choose from unoptimized presets (animating position offsets or resizings) or type/paste your own CSS code blocks into the analyzer.
- **Target Device Profile**: Choose a hardware budget (Low-end Mobile, Mid-tier Tablet, or High-end Desktop) to adjust the projected frame rate threshold.
- **Analyze**: Click "Analyze Performance" to inspect layout thrashing and paint storm metrics.
- **Inspect Paint Flashing**: Check "Simulate Browser Paint Flashing" to overlay red blinking frames showing paint invalidations around the unoptimized box as it moves, contrasting it with the zero-paint optimized box.
- **Remediate**: Copy the optimized CSS output code from the right panel to accelerate transitions using GPU-composited layers (`transform` and `will-change`).

## Why is it useful?

Animators frequently use properties like `top`, `left`, `width`, or `height` which force the browser to trigger a full layout flow and repaint the page on every animation frame. This results in heavy stuttering (low frame rates), especially on low-powered mobile devices.

This advisor solves this by:

1. Providing a visual warning system showing browser paint flushing in real-time.
2. Estimating FPS constraints on mobile vs desktop.
3. Automatically converting layout reflows into hardware-accelerated composite transformations (`will-change`, `transform: scale/translate`).

## Tech Stack

- HTML5
- CSS3 (compositor-only animations, layout-triggering keyframes, paint flashing overlays)
- JavaScript (AST preset parsing, performance metrics calculations, paint flashing controls)

## Preview

Open [demo.html](file:///submissions/examples/motion-optimization-advisor-bv/demo.html) directly in your browser.
