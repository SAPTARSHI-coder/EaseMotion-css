# Sandbox Layout Fix: Custom Scrollbar Element Paint Layer Invalidation Optimization

## Overview
A high-performance graphic rendering patch for custom-themed scroll containers to completely eliminate scroll micro-stutters, stop layer invalidation thrashing loops, and lock smooth scrolling tracks inside Chromium-based (Chrome and Edge) viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting custom scroll tracks and dense telemetry log text arrays to validate frame rate smoothness.
* `style.css` — Scoped layout modifier asset layer introducing native paint containment constraints linked back to global tokens.

## 🐛 The Bug Resolved
Previously, appending custom theme properties to internal container scrollbar handles (`::-webkit-scrollbar-thumb`) inside text-heavy layout blocks triggered critical rendering stutters inside Google Chrome and Microsoft Edge. As a user scrolls down the container panel, the browser's graphics subsystem continuously re-calculates the relative coordinates of the thumb handle. Because scrollbar tracks default to a shared painting channel with adjacent elements, each thumb displacement causes the browser engine to issue global layer invalidation flags, clearing texture caches and forcing expensive repaint cycles across dense text layers on every frame.

## 🛠️ The Solution
The box model paint boundaries and layer isolation parameters are optimized. By injecting an explicit graphic containment constraint rule configuration (`contain: paint;`) straight onto the scrollable parent element wrapper, you command the browser engine to isolate child layout graphics completely into a closed local canvas pool. Scrollbar coordinate shifts process independently on the GPU compositor thread, bypassing main-thread rendering lag natively across all viewports without running script observers.
