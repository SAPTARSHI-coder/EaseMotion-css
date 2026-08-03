# Sandbox Layout Fix: CSS `contain: paint` Fixed Descendant Clipping & Containing Block Resolution

## Overview
A high-performance CSS containment patch for cards hosting `position: fixed` descendants (tooltips, popovers, full-screen previews). It completely eliminates card border clipping traps, restores global viewport fixed positioning, and preserves layout rendering performance.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a contained parent card, anchor trigger button, and fixed floating preview overlay.
* `style.css` — Scoped layout modifier asset layer specifying `contain: layout style` and CSS Anchor Positioning definitions.

## 🐛 The Bug Resolved
Previously, using `contain: paint` on a parent card to optimize rendering performance caused `position: fixed` child elements (such as tooltips or preview triggers) to clip tightly against the card's border box. According to the W3C CSS Containment spec, `contain: paint` turns the element into a containing block for all descendants, including fixed-position items. This trapped fixed elements inside local container boundaries instead of positioning them relative to the global viewport.

## 🛠️ The Solution
The containment model and element positioning context are optimized. By refactoring the parent card from `contain: paint` to `contain: layout style;` and attaching the floating element using native CSS Anchor Positioning (`anchor-name` on trigger, `position-anchor` on fixed popover), fixed descendants break out of local card borders cleanly while preserving layout and style containment benefits.
