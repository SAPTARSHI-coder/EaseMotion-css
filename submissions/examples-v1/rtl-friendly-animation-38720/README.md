# RTL-Friendly Animation Example (`rtl-friendly-animation`)

This submission resolves issue #38720 by providing a demonstration of how to write CSS animations that naturally adapt to both LTR (Left-to-Right) and RTL (Right-to-Left) text directions without requiring duplicate CSS rules.

## Overview
Traditionally, animating an element "in from the left" required hardcoding `transform: translateX(-100%)` for LTR languages, and then writing an override `.rtl { transform: translateX(100%) }` for RTL languages (like Arabic or Hebrew). By utilizing modern **CSS Logical Properties**, we can write a single animation that automatically respects the document's flow direction.

## Features
- **Logical Properties:** Uses `inset-inline-start`, `margin-inline-start`, and logical values where applicable.
- **Directional Agnostic Keyframes:** While `transform: translateX` is physical and doesn't adapt to `dir="rtl"`, we can use `offset-distance` on an `offset-path` (motion path) or simply toggle logical inset properties (e.g., `inset-inline-start: -100%`) to create sliding animations that automatically reverse their physical direction when the document direction changes.
- **Interactive Demo:** The provided `demo.html` includes a toggle button to switch the document between `dir="ltr"` and `dir="rtl"`, demonstrating the seamless adaptation of the sliding cards and loading spinners.

## Files
- `demo.html`: The HTML structure with an interactive language/direction toggle.
- `style.css`: The CSS demonstrating the use of logical properties for animations.
