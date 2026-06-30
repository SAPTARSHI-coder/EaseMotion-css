# Size Selector

1. What does this do? A size selector component with pill-shaped buttons that pop (scale) on selection using `cubic-bezier` spring animation. The active button gets a blue highlight ring and background. Includes a color swatch variant with circular buttons and a checkmark indicator.

2. How is it used? Click a `.size-btn` to remove `.active` from siblings and add it to the clicked button, triggering `@keyframes btn-pop` (scale 1 → 1.2 → 1). Color swatches use a similar approach with `::after` for the checkmark. A small JS snippet handles the toggle and updates the result text.

3. Why is it useful? Size and variant selectors are universal in e-commerce product pages. The pop animation gives satisfying tactile feedback on selection, making the UI feel responsive and polished compared to static radio-button style selectors.
