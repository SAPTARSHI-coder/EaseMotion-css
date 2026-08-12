# ease-accordion-expand

Accordion panel with a smooth max-height expand/collapse transition.

## Usage

```html
<div class="ease-accordion-header">Click to expand</div>
<div class="ease-accordion-panel">
  <div class="ease-accordion-content">
    Panel content
  </div>
</div>
```

Toggle the `open` class on `.ease-accordion-panel` via JS.

## Notes

- The `max-height: 500px` cap is arbitrary — set it higher than your tallest expected content, or the transition will visibly "wait" for content shorter than the cap.
- For fully dynamic height with no guessing, consider a `grid-template-rows: 0fr → 1fr` approach instead.

## Browser support

All modern browsers.