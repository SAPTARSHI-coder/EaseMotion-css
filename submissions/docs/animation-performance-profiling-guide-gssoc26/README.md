# 60FPS Animation Performance Profiling Guide

A developer diagnostics guide on profiling CSS animations, measuring frame render budgets (16.6ms per frame), and eliminating layout thrashing.

## What does this do?
Provides technical documentation and profiling recommendations for analyzing keyframe performance using Chrome DevTools Performance panel, Rendering tab (FPS meter), and layer tree inspection.

## How is it used?
1. Open `demo.html` to review target performance metrics and CSS best-practice rules.
2. Follow the diagnostic guide to audit web application keyframes.
3. Import `style.css` for metric card layouts.

## Why is it useful?
Ensures motion libraries do not cause dropped frames or main-thread jank. Profiling frame budgets is vital for building production-grade web applications.
