# Button Group Component

## What does this do?
Adds a button group wrapper layout (`ease-btn-group`) that links multiple buttons together into a unified controls row, handling borders and rounded corners cleanly.

## How is it used?
Wrap buttons inside the `.ease-btn-group` container directly:

```html
<div class="ease-btn-group">
  <button class="ease-btn ease-btn-primary">Left</button>
  <button class="ease-btn ease-btn-primary">Middle</button>
  <button class="ease-btn ease-btn-primary">Right</button>
</div>
```

### Options
- **Sizes**: Add `.ease-btn-group-sm` or `.ease-btn-group-lg` to the container alongside the base class to align the boundary corner radii with the internal button padding options.

## Why is it useful?
Segmented controls, navigation controls, and custom toolbar lists require joining buttons inline. Standard layouts produce thick double-width borders at connection seams and incorrect inner corner radii. The button group utility resets the inner button radius to zero, collapses double borders by overlapping layout cells, and manages the hover z-index of individual items dynamically so active borders remain crisp.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to view the button group configurations.

## Contribution Notes
- Class naming: `ease-btn-group`.
