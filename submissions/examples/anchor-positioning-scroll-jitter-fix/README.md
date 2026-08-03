# Sandbox Layout Fix: CSS Anchor Positioning (`position-try-fallbacks`) Scroll Jitter & Oscillation Resolution

## Overview
A high-performance CSS anchor positioning optimization patch for contextual dropdown menus and tooltips inside scrollable containers. It completely eliminates popover state chatter, stops rapid top/bottom flipping flickering during momentum scrolling, and enforces deterministic fallback plane placement in Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a scrollable container with an anchored dropdown menu trigger.
* `style.css` — Scoped layout modifier asset layer specifying `position-try-order: most-height`, `margin-view-overhang: 8px`, and `position-visibility: anchors-visible`.

## 🐛 The Bug Resolved
Previously, using CSS Anchor Positioning (`position-anchor` / `position-try-fallbacks: flip-block`) on contextual menus inside a scrollable container caused popovers to flash and oscillate rapidly between top and bottom fallback positions when scrolling near boundary edges. Chromium's anchor positioning logic evaluates collision boundaries on the main layout thread during scroll updates. Sub-pixel scroll momentum fluctuations across the collision threshold triggered a state-chattering loop.

## 🛠️ The Solution
The fallback selection strategy and boundary collision margins are optimized. By specifying `position-try-order: most-height;` on the popover, Chromium is forced to select the placement that provides maximum available spatial clearance deterministically. Concurrently, applying `margin-view-overhang: 8px;` cushions collision checks, preventing sub-pixel scroll movements from crossing flip thresholds repeatedly.
