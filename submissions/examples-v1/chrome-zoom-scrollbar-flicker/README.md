# Chrome Zoom-In Scrollbar Flicker Fix

An interaction repair patch targeting layout paint bugs under issue #13302. This fix stabilizes scrollbar margins in Chromium engines when scale transformation transitions execute immediately on page initialization.

## Bug Resolution Analysis

- **The Problem:** During initialization loops, elements running traditional structural scale transformations (`transform: scale()`) prompt standard browsers to compute transitional bounding geometry parameters. Chrome occasionally registers these micro-second matrix spans as content overflowing active display envelopes, spawning temporary layout scrollbar tracks that trigger layout jumps.
- **The Solution:** Modifies the baseline animation layer composition by introducing isolated 3D hardware-accelerated parameters (`backface-visibility: hidden` and `transform-style: preserve-3d`). This separates element transformation mechanics cleanly into dedicated compositor execution sequences, preventing parent element repaint calculations entirely.

## Usage Layout Structure

```html
<div class="ease-animate-zoom-in">
  <h3>Stable Modal Container</h3>
</div>
```

Closes #13302
