## What

Side-by-side comparison of the CSS `aspect-ratio` property versus the legacy `padding-bottom` percentage hack for responsive iframes, image placeholders, and card layouts. Covers 16:9, 4:3, 1:1, and 3:2 ratio variants.

## How

Modern embed containers use `aspect-ratio: 16/9` directly. The old-hack containers use `padding-bottom: 56.25%` (9÷16) with `height: 0; position: relative` and absolutely-positioned children. A gallery and card grid demonstrate the property in a layout context. Hover transitions and responsive breakpoints adjust the grid.

## Why

`aspect-ratio` removes the need for the fragile padding-bottom hack, letting the browser compute intrinsic sizing automatically. It is simpler to read, avoids the wrapper boilerplate, and works predictably with flexbox and grid layouts. The side-by-side comparison makes the syntax difference and maintenance advantage immediately visible.
