# Sandbox Component Showcase: Pure-CSS Scroll-Driven Navigation Progress Tracker

## Overview
A high-performance, script-free reading progress indicator bar isolated within an examples subfolder directory. It uses modern CSS Scroll-Driven Animation specifications to track layout milestones cleanly inside the browser's compositing thread.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained document viewer panel containing long-form copy to test real-time vertical scroll velocity tracking.
* `style.css` — Scoped layout sheet establishing a localized `scroll-timeline` profile linked back to shared framework tokens.

## 🚀 Key Layout Mechanics
1. **Composited Scroll Timelines:** Replaces traditional window event tracking parameters by utilizing a named layout timeline indicator (`scroll-timeline: --name y;`). This tracks scroll offsets within the parent component box natively.
2. **GPU-Driven Width Scaling:** Rather than mutating an element's physical `width` property (which triggers a heavy layout reflow on every scroll tick), the progress bar updates using `transform: scaleX()`. This keeps the rendering task fully constrained to the GPU layer.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository contribution rules by placing every asset line strictly inside `submissions/examples/scroll-progress-tracker/`.
