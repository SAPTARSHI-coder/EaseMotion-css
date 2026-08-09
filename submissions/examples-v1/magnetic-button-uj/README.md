# Magnetic Button (Pure CSS Variant)

## What does this do?

It creates a CSS-only magnetic hover interaction where a button shifts positions toward the hover trigger to simulate magnet attraction.

## How is it used?

### Standard Variant

Apply the `magnetic-trigger-uj` wrapper class and the `magnetic-button-uj` child class:

```html
<div class="magnetic-trigger-uj">
  <button class="magnetic-button-uj">Explore</button>
</div>
```

### Multidirectional Variant

Wrap the button with four directional trigger zones:

```html
<div class="magnetic-wrapper-uj">
  <div class="magnetic-zone-uj tl"></div>
  <div class="magnetic-zone-uj tr"></div>
  <div class="magnetic-zone-uj bl"></div>
  <div class="magnetic-zone-uj br"></div>
  <button class="magnetic-zone-button-uj">Explore</button>
</div>
```

## Why is this useful?

This provides a lightweight alternative to JavaScript-based magnetic cursor scripts commonly used in high-fidelity portfolios and premium sites. It operates entirely on compositor-friendly properties (`transform` translations), prevents layout recalculations, and supports media queries for reduced motion preferences.
