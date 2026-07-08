# Accordion Smooth Slide-Down (Pure CSS)

## What does this do?

It creates a smooth slide-down accordion using CSS grid row transitions, allowing `<details>` blocks to open and collapse fluidly without JavaScript.

## How is it used?

Apply the `collapsible-grid-uj` class to the `<details>` element and wrap the collapsible body in `collapsible-content-wrapper-uj` and `collapsible-content-uj`:

```html
<details class="collapsible-grid-uj">
  <summary>Click to view</summary>
  <div class="collapsible-content-wrapper-uj">
    <div class="collapsible-content-uj">
      Hidden details text...
    </div>
  </div>
</details>
```

The inner wrapper handles the grid cell expansion, while the inner-most container holds padding to prevent animation jitter.

## Why is this useful?

This approach avoids heavy JS-based height calculation scripts or arbitrary, speed-warping `max-height: 9999px` hacks. It runs smoothly on the compositor thread, remains accessible to screen readers by leveraging native HTML semantic tags, and respects media queries for reduced motion preferences.
