# Gravity Collapse Grid

## What does this do?
Simulates a gravity-collapse effect within a grid layout. When a user hovers
over a card, surrounding cards compress and fade slightly toward the hovered
element, creating the illusion that the hovered item is a temporary center of gravity.

## How is it used?

```html
<div class="gravity-grid">
  <div class="gravity-card">Card 1</div>
  <div class="gravity-card">Card 2</div>
  <div class="gravity-card">Card 3</div>
</div>
```

## Why is it useful?
Introduces a physics-inspired interaction pattern that goes beyond standard
hover effects. Especially suitable for card grids, dashboard widgets, gallery
layouts, and feature showcases. Pure CSS using the :has() selector,
no JS required, with full prefers-reduced-motion support.