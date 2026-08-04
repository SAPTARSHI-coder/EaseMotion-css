# Sandbox Layout Fix: Native View Transitions (`document.startViewTransition()`) Drop-Shadow Snapshot Clipping Resolution

## Overview
A high-performance CSS View Transition pseudo-element optimization patch for card expansion morphs, thumbnail-to-modal animations, and floating UI components. It completely eliminates sharp square box clipping along drop-shadow boundaries, restores continuous ambient glows, and stabilizes pseudo-element group overflows in Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a native View Transition morph target card and API toggle handler.
* `style.css` — Scoped layout modifier asset layer specifying `overflow: visible` overrides and `filter: drop-shadow` group promotions on `::view-transition-group()`.

## 🐛 The Bug Resolved
Previously, triggering a native View Transition (`document.startViewTransition()`) on a card expanding from a thumbnail to a modal caused outer floating drop-shadows or ambient glows to clip abruptly along a sharp square box perimeter during the morphing animation. Chromium isolates the view transition snapshot inside `::view-transition-group(card-name)`, which defaults to `overflow: hidden` on generated snapshot replacement groups during scale transformations.

## 🛠️ The Solution
The View Transition pseudo-element rendering pipeline is optimized. By targeting `::view-transition-group()` and `::view-transition-image-pair()` pseudo-elements and explicitly overriding clipping with `overflow: visible;`, snapshot bounds are un-clipped. Concurrently, applying `filter: drop-shadow(...)` directly to the `::view-transition-group()` layer preserves continuous soft outer lighting throughout morphing transitions.
