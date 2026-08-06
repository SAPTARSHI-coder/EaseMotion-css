# Animated Glowing Gradient Border Cards

An `.ease-glow-card` component that features a continuously rotating gradient border and an outer glow, created entirely with CSS.

## Overview
This component creates a premium, futuristic glowing border using a parent wrapper and an inner content container. It relies on a `conic-gradient` attached to pseudo-elements (`::before` and `::after`) and uses CSS `@property` to animate the gradient angle. A CSS `mask` is used to hide the center of the gradient, showing only the border edge.

**Note on implementation:** While older methods for animated borders involve creating a giant spinning square using `transform: rotate()` and clipping it, that approach fails for rectangular cards when combined with a bleeding outer glow (as `overflow: hidden` would clip the glow). Using `@property` to animate the conic-gradient angle perfectly resolves this, keeping the mask stationary and allowing the glow to bleed outwards while conforming to any rectangular or flexible aspect ratio.

## Structure
```html
<div class="ease-glow-card">
  <div class="ease-glow-card-content">
    <h2>Premium Tier</h2>
    <p>Unlock all features with our premium tier. Enjoy an animated glowing border built purely in CSS.</p>
  </div>
</div>
```

## Features
- **Pure CSS:** No JavaScript required.
- **Performant:** Uses native CSS animations and modern `@property` rules.
- **Bleeding Glow:** Uses `filter: blur()` on an `::after` pseudo-element to create a realistic outer glow bleed.
- **Masking:** Uses CSS `mask` so the center of the card is genuinely transparent (before applying background to the inner content), allowing for use with glassmorphism or custom backgrounds.
