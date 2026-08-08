# Sandbox Layout Fix: CSS Anchor Positioning (`position-anchor`) Off-Screen Viewport Origin $(0,0)$ Teleportation Resolution

## Overview
A high-performance CSS anchor positioning patch for contextual popovers, tooltips, and floating menus attached to scrollable trigger buttons. It completely eliminates 1-frame top-left viewport origin $(0,0)$ jump flashes, stops asynchronous anchor reference loss during scroll passes, and enforces instant visibility detachment.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a scrollable viewport container with an anchored popover trigger.
* `style.css` — Scoped layout modifier asset layer specifying `position-visibility: anchors-visible`, `margin-view-overhang: 0px`, and `position-try-fallbacks: flip-block`.

## 🐛 The Bug Resolved
Previously, when a contextual popover used CSS Anchor Positioning (`position-anchor: --btn-id; position-area: top center;`) to stay attached to a button, scrolling the button out of view caused the popover to abruptly jump to the top-left corner (origin $0,0$) of the document viewport for a brief frame before disappearing. Chromium's anchor positioning engine evaluates anchor target visibility asynchronously during scrolling. When the anchor button moves off-screen, the popover loses its anchor reference coordinate before the visibility check evaluates to hidden, temporarily resolving coordinates against the root document origin.

## 🛠️ The Solution
The anchor target visibility evaluation is strictly anchored to the viewport. By declaring `position-visibility: anchors-visible;` directly on the popover element and setting `margin-view-overhang: 0px;` alongside `position-try-fallbacks: flip-block;`, Chromium un-renders the popover the exact millisecond its anchor target leaves the viewport frame. Teleportation flashes to top-left origin $(0,0)$ are completely eliminated with zero scripts.
