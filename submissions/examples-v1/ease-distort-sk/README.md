# Distort Animation (`ease-distort`)

### 1. What does this do?
The `ease-distort` animation creates a highly dynamic, wave-like warping effect using a combination of rapid `skewX`, `scaleX`, and `scaleY` oscillations.

### 2. How is it used?
You can trigger it once, loop it infinitely, or attach it to a hover state. The intensity is fully customizable via the `--ease-distort-intensity` CSS variable.

```html
<!-- Triggers once (useful for JS toggling) -->
<div class="ease-distort">Distorted Content</div>

<!-- Infinite loop -->
<div class="ease-distort-infinite">Always warping</div>

<!-- Hover trigger -->
<div class="ease-hover-distort">Hover me</div>

<!-- Custom extreme intensity -->
<div class="ease-hover-distort" style="--ease-distort-intensity: 2.5;">
  High Intensity
</div>
```

### 3. Why is it useful?
It provides a much more energetic and extreme visual effect compared to a simple glitch or shake. It is ideal for:
- "Easter egg" interactions.
- Warning or error states requiring high visibility.
- Creative hover effects on portfolio or gaming websites.
- High-energy transitions.

---
**Implementation Details:**
- Follows specification from Issue #11897.
- Modifies `skewX` (up to 20deg), `scaleX` (±20%), and `scaleY` (±10%) across 7 keyframes.
- Exposes `--ease-distort-intensity` to allow developers to multiply the severity of the distortion dynamically.
- Includes `prefers-reduced-motion: reduce` fallback for accessibility.
