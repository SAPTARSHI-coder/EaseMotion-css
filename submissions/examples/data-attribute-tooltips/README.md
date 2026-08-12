# CSS-Only Data-Attribute Tooltips

A reusable, zero-JS tooltip system that dynamically reads text from an HTML `data-tooltip` attribute and reveals it with a smooth sliding animation on hover.

## Why is this useful?
Tooltips are vital for providing context to icons and truncated text. Heavy JS tooltip libraries often cause performance bloat. A pure CSS approach using `::after` pseudo-elements and `attr()` functions provides a highly performant, drop-in solution that is lightweight and fluid.

## Features
- **Zero JavaScript**: Entirely CSS powered for maximum performance.
- **Glassmorphism Design**: Uses `backdrop-filter` to create a modern blurred aesthetic.
- **Micro-animations**: Smooth fade-in and sliding transition upon hover.
- **Directional Support**: Easily orient your tooltip to the `top` (default), `bottom`, `left`, or `right` using the `data-position` attribute.

## How to Use
1. Add the `.ease-tooltip` class to the target element.
2. Provide the tooltip text via the `data-tooltip` attribute.
3. (Optional) Specify the placement using the `data-position` attribute (`top`, `bottom`, `left`, `right`).

```html
<!-- Default (Top) -->
<button class="ease-tooltip" data-tooltip="This is a top tooltip!">Hover me</button>

<!-- Bottom -->
<button class="ease-tooltip" data-position="bottom" data-tooltip="Action required below">Hover me</button>

<!-- Left -->
<button class="ease-tooltip" data-position="left" data-tooltip="Information on the left side">Hover me</button>

<!-- Right -->
<button class="ease-tooltip" data-position="right" data-tooltip="Proceed to the right">Hover me</button>
```
