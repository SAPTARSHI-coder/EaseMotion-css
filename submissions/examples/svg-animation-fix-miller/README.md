# SVG Animation Fix — transform-box: fill-box

## What's fixed
All transform-based animation classes (`ease-slide-up`, `ease-zoom-in`, `ease-bounce`, `ease-shake`, `ease-float`, `ease-spin`) had zero effect when applied directly to SVG elements. Fails silently with no console error.

## Root cause
SVG elements use their own coordinate system for transforms. Without `transform-box: fill-box`, the transform origin defaults to the SVG viewport origin (top-left of the entire SVG canvas) instead of the element's own bounding box — so `translateY(-18px)` has no visible effect on a `<circle>` deep inside the SVG.

## The fix — two CSS properties
```css
.ease-bounce,
.ease-shake,
.ease-zoom-in,
.ease-float,
.ease-spin,
.ease-slide-up,
.ease-slide-down,
.ease-slide-in-left,
.ease-slide-in-right {
  transform-box: fill-box;         /* use element's own bounding box */
  transform-origin: center center; /* consistent origin for SVG + HTML */
}
```

## Usage — now works on SVG elements
```html
<!-- Circle bounce -->
<svg width="60" height="60">
  <circle class="ease-bounce-loop" cx="30" cy="30" r="26" fill="#7c3aed"/>
</svg>

<!-- Icon float -->
<svg class="ease-float" viewBox="0 0 24 24">
  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
</svg>

<!-- Spinning loader -->
<svg class="ease-spin" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" stroke="#7c3aed" fill="none" stroke-width="3"/>
</svg>
```

## What's unchanged
- `ease-fade-in` / `ease-fade-out` — opacity only, already worked on SVG, no change needed
- All HTML element animations — `transform-box: fill-box` + `transform-origin: center` are no-ops on HTML elements (they already use their own box), zero regression

## SVG elements tested
`<svg>`, `<circle>`, `<rect>`, `<path>`, `<polygon>`, `<g>`

## prefers-reduced-motion
Unchanged — both `animation` and `transform` are disabled. No regression.
