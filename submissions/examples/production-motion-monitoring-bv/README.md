# Production Motion Monitoring Dashboard

## What does this do?

The Production Motion Monitoring Dashboard is a real-time telemetry console that simulates how production websites track animation performance, count transition events, flag dropped frames, and report user accessibility settings.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Telemetry Indicators**: Monitor live dials showing Performance Health Index, Total Animation triggers, Average Stutter Rates, and A11y user shares.
- **Performance Chart**: View a rolling line chart displaying real-time FPS performance trends.
- **Event Console**: Read the rolling terminal console showing live user transition actions, metrics warnings, and diagnostic confirmations.
- **Simulate Incidents**: Click "Inject Main Thread Block" to force a heavy layout thrashing event that drops FPS on the chart and triggers diagnostic console warnings. Toggle "Spike Traffic Load" to speed up triggers. Toggle "Reduced Motion Enforce" to increase simulated audience shares.
- **Instrumentation Script**: Copy the telemetry tracking JavaScript snippet from the right sidebar to integrate tracking in your live web applications.

## Why is it useful?

Even if transitions play smoothly on a developer's desktop machine, animations frequently drop frames on lower-end user devices or when the main browser thread is blocked by JavaScript execution.

This dashboard solves this by:

1. Simulating real-time production analytics (dropped frames, event counters, prefers-reduced-motion user splits).
2. Graphing rolling performance values dynamically, demonstrating how layout/main-thread blocks immediately jank active animations.
3. Automatically providing a copyable JS tracking script to instrument actual DOM `TransitionEvent` duration metrics in live user applications.

## Tech Stack

- HTML5
- CSS3 (glowing status beacons, terminal consoles, responsive grid layouts)
- JavaScript (rolling SVG line coordinate graphs, live telemetry streams, event count accelerators)

## Preview

Open [demo.html](file:///submissions/examples/production-motion-monitoring-bv/demo.html) directly in your browser.
