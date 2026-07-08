# CSS Transform Origin Visualizer

Resolves #37064

A lightweight, CSS-only utility that visually compares how all 9 common
`transform-origin` values affect the same rotation animation — helping
developers understand how origin points influence transforms without
needing to experiment in DevTools.

## Features

- Zero JavaScript, zero dependencies
- Fully responsive grid layout (3 columns → 2 → 1 on smaller screens)
- Same rotation animation applied across all 9 common `transform-origin` positions (top-left through bottom-right, plus center)
- Clear labels under each card for easy comparison

## Files

- `demo.html` — standalone showcase page with all 9 origin variations
- `style.css` — all styling, driven by `var(--ease-color-primary)` and `var(--ease-speed-medium)`

## How to use

Drop the `.ease-origin-preview-tay` / `.ease-origin-card-tay` markup into
any docs or demo page, and set whichever `transform-origin` you want on
`.ease-origin-box-tay`:

```html
<div class="ease-origin-card-tay ease-origin-top-left-tay">
  <span>Top Left</span>
  <div class="ease-origin-box-tay"></div>
</div>
```

## Notes for the maintainer

- Class names use the `-tay` suffix per the naming policy to avoid collisions.
- No changes made to `core/` or `components/` — everything lives in this submission folder.