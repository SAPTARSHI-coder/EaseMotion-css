# Sandbox Component Showcase: Pure-CSS Sliding Pill Segmented Switch Selector

## Overview

A high-performance, script-free pill-shaped input selector component isolated within a sandbox subfolder structure. It handles fluid layout tracking animations across binary views or pricing table toggles without initiating DOM resizing cycles.

## 📁 Sandbox Configuration Files

- `demo.html` — Interactive user preview hosting the switch assembly linked to a dynamic text card layout to test state transformations.
- `style.css` — Scoped modifier asset layer declaring sliding coordinate formulas linked back to global variables.

## 🚀 Key Layout Mechanics

1. **Geometric Backdrop Translation:** Avoids computing coordinates via JavaScript by relying on an absolute-positioned tracker pill transformed via percentage steps (`transform: translateX(100%)`). This maps position targets cleanly using local coordinate matrices.
2. **Sibling Selection Cascades:** Utilizes general sibling combinators (`~`) downstream from an active `:checked` state marker. This chain successfully forwards formatting hooks to both the text tags and separate data cards, matching interface changes accurately.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/segmented-switch/`.
