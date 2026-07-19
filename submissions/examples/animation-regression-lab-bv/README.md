# Animation Regression Detection Lab

## What does this do?

The Animation Regression Detection Lab is a developer dashboard that benchmarks keyframe timing synchronization, identifies easing drifts, detects frame-pacing lag, and checks overall alignment against standardized animation baselines.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Configure Lab**: Select a regression anomaly type (Easing Curve Drift, Timing Delay Shift, or Hardware Frame Stutter) and choose whether to inject the anomaly.
- **Scrub & Inspect**: Pause the animation loop and drag the timeline scrubber to view frame-by-frame snapshots, comparing positions (Baseline vs Candidate) and mapping current values on the easing curves graph.
- **Run Sweep**: Click "Execute Regression Sweep" to run a scan that updates the diagnostics checklist (Timing Synchrony, Path Alignment, Frame Rate Pacing).
- **Remediation**: Copy the suggested CSS fix from the remediation panel to bring deviant transitions back to baseline standard specifications.
- **Export Config**: Export the test run parameters and diagnostic outcomes as JSON configurations for CI/CD integrations.

## Why is it useful?

In large-scale web applications, animations can degrade due to layout shifts, unaccelerated CSS properties, or human error (e.g. inserting incorrect easing curves or delays).

This lab solves animation regression testing by:

1. Simulating common regression patterns (frame stutters, timing delay drifts, easing curve variances).
2. Graphing cubic-bezier curves dynamically, showing exactly where a candidate deviates from the reference baseline.
3. Automatically providing targeted fixes to synchronize curves and utilize compositing layers (`will-change`).

## Tech Stack

- HTML5
- CSS3 (transitions, timing-function overrides, and responsive layouts)
- JavaScript (theoretical Bezier math solvers, scrubber state handling, and SVG visualizers)

## Preview

Open [demo.html](file:///submissions/examples/animation-regression-lab-bv/demo.html) directly in your browser.
