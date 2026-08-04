# Sandbox Layout Fix: CSS Named Scroll Timeline (`scroll-timeline-name`) & Container Query Invalidation Resolution

## Overview
A high-performance CSS context decoupling patch for scroll-driven reading progress bars and scroll-linked animations sitting inside size container query targets (`container-type: inline-size`). It completely eliminates scroll animation stuttering, stops timeline resets to Frame 0, and preserves continuous progress registration during container scrolling in Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a reader card with an isolated scroll timeline viewport and top progress indicator bar.
* `style.css` — Scoped layout modifier asset layer specifying structural context separation between container query roots and named scroll timelines.

## 🐛 The Bug Resolved
Previously, building a scroll-driven reading progress bar or scroll-linked animation inside a card that was also a container query target (`container-type: inline-size`) caused the scroll animation to stutter or fail to register progress entirely when scrolling. Chromium's layout thread invalidates named scroll timeline targets (`scroll-timeline-name`) when evaluating inline-size container measurements during active scroll passes, resetting the animation timeline to Frame 0.

## 🛠️ The Solution
The container query context and scroll timeline context are structurally decoupled. By moving `container-type: inline-size` up to an outer structural wrapper (`.alm-outer-container-wrapper`) and declaring `scroll-timeline-name` on an inner non-container child block (`.alm-inner-scroll-viewport`), size query evaluations are isolated from scroll offset calculations. The progress animation runs smoothly with zero script execution.
