# Cascading Bottom Sheet (Analytics Theme)

A pure CSS bottom sheet component that features a sequential "cascading" entrance animation for its internal elements when the sheet is opened. Designed with a clean, modern Analytics Dashboard aesthetic.

## Features

- **Pure CSS State Management**: Uses the classic "Checkbox Hack" (a hidden `<input type="checkbox">` and `<label>` pairs) to toggle the bottom sheet and overlay without a single line of JavaScript.
- **Cascading Entrance Animation**: Uses the CSS general sibling combinator (`~`) to trigger keyframe animations (`@keyframes easeCascadeIn`) on the sheet's children *only* when the sheet is opened.
- **Dynamic CSS Staggering**: Uses an inline CSS custom property (`--ease-delay: 1`, `2`, `3`) mapped to `animation-delay` to create a beautiful staggered "waterfall" effect as items slide into view.
- **Dashboard Aesthetics**: Styled like a modern analytics app, featuring clean typography, subtle borders, soft shadows, and colorful metric icons.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.

## Usage Example

```html
<!-- The State Controller -->
<input type="checkbox" id="sheet-toggle" class="ease-sheet-toggle">

<!-- The Trigger Button -->
<label for="sheet-toggle" class="ease-btn-open">Open Sheet</label>

<!-- The Background Overlay -->
<label for="sheet-toggle" class="ease-sheet-overlay"></label>

<!-- The Bottom Sheet -->
<div class="ease-bottom-sheet">
  <div class="ease-sheet-header">
    <h3>Data Breakdown</h3>
    <label for="sheet-toggle" class="ease-sheet-close">&times;</label>
  </div>
  
  <div class="ease-sheet-content">
    <!-- Cascading Items: Provide an incrementing --ease-delay -->
    <div class="ease-cascade-item" style="--ease-delay: 1">Item 1</div>
    <div class="ease-cascade-item" style="--ease-delay: 2">Item 2</div>
    <div class="ease-cascade-item" style="--ease-delay: 3">Item 3</div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

- **Choreographed Motion**: Demonstrates how to coordinate multiple animations (the overlay fading, the sheet sliding, and the inner items cascading) based on a single CSS state change.
- **Performant Architecture**: By defining the base delay inside the CSS (`--ease-base-delay: 0.05s`) and doing the math natively (`calc(var(--ease-delay) * var(--ease-base-delay))`), we avoid writing duplicate keyframes or bloated CSS classes for every single delayed item.
- **Accessible Design**: Relies on native HTML inputs and labels, making it easily adaptable for keyboard navigation and screen readers if enhanced slightly.
