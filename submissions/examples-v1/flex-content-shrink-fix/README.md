# Sandbox Layout Fix: Flex-Based Button Container Typography Content Zero-Width Shrink Resolution

## Overview
A high-performance structural dimension constraint fix for horizontal flex buttons to completely eliminate text vanishing bugs, stop sub-pixel character squeezing, and protect typographic alignment within narrow layout rows.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user layout cockpit hosting an ultra-narrow grid lane to validate label truncation safety.
* `style.css` — Scoped layout modifier asset layer specifying native layout compression overrides linked back to global tokens.

## 🐛 The Bug Resolved
Previously, nesting a graphical icon alongside a textual label string inside a horizontal flexbox container (`display: flex; align-items: center;`) triggered severe layout collapse bugs when space along the main axis became restricted. Under the default browser layout engine path, all flex items carry an implicit property parameter of `flex-shrink: 1;`. When the button is forced inside a narrow grid cell or assigned a hard width limit, the layout calculator dumps the entire compression weight onto the text node. This squishes the text span width down to `0px`, causing the button label to completely disappear from view.

## 🛠️ The Solution
The box model compression and cell distribution channels are optimized. By injecting an explicit baseline structural rule configuration (`flex-shrink: 0;`) straight onto the button's interior typography text span container, you forbid the flexbox algorithm from squeezing text strings out of bounds. Pairing this structural rule with clean overflow configurations (`text-overflow: ellipsis;`) forces characters to truncate gracefully with an elegant trailing ellipsis marker natively across all viewports without running calculation scripts.
