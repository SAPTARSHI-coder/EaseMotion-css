# Sandbox Layout Fix: Inline-Flex Status Badge Component Vector Symbol Alignment Drift Resolution

## Overview
A high-performance typographic grid layout constraint fix for inline-flex components to completely eliminate sub-pixel font shifting flaws, stop icon center vector drifting, and restore razor-sharp horizontal baseline alignments across Apple Safari (WebKit) viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained presentation user cockpit hosting compact telemetry badges to check icon-to-text vertical centerline parameters.
* `style.css` — Scoped layout modifier asset layer introducing native font leading suppression rules and explicit baseline locks linked back to shared tokens.

## 🐛 The Bug Resolved
Previously, constructing interactive status pills, inline tags, or text button rows using standard layout wrappers (`display: inline-flex; align-items: center;`) triggered severe visual alignment defects on Apple Safari (WebKit) layout viewports. When nesting a graphical vector asset or character glyph directly next to a raw text string, WebKit's layout calculator misinterprets the text container's inherited line-height bounding metrics. This sub-pixel computational lag shifts the icon elements vertically out of bounds by `1px` or `2px`, fracturing the layout grid line.

## 🛠️ The Solution
The box model typography channels and element alignment parameters are optimized. By forcing a strict typographic line threshold rule override (`line-height: 1;`) onto the inline-flex container parent and setting absolute baseline tracking instructions (`vertical-align: middle;`) straight onto the child vector elements, you discard fuzzy font calculation leading boxes. The browser locks the graphical centers directly onto alphanumeric text rows natively across all viewports without running calculation scripts.
