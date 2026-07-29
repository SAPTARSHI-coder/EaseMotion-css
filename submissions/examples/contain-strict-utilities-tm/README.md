# CSS Containment for Performance

Shows layout, paint, and composite containment using the contain property. Essential for complex UIs where browser paint cycles need to be scoped to prevent unnecessary reflows.

## Features

- contain: layout — scopes layout recalculations to the element
- contain: paint — prevents overflow from being painted outside the element
- contain: strict — combines layout + paint + style + size
- content-visibility: auto — skips rendering off-screen content
- Demonstrates the performance benefit with a scrolling grid of contained cards

## Usage

```html
<div class="demo-card">
  <!-- Apply the feature class to any element -->
</div>
```

## Why is it useful?

This submission uses EaseMotion's CSS custom properties — specifically the `color-primary, shadow-lg, space-6, radius-lg, z-raised` tokens — to ensure the demo is fully themeable and consistent with the rest of the framework. The implementation includes dark mode via `prefers-color-scheme: dark` and respects `prefers-reduced-motion` for accessibility.
