# ease-anchor — Issue #23957

## What

Utility classes for **CSS Anchor Positioning**, a native browser API that lets you position elements relative to other elements (anchors) without JavaScript.

Classes provided:

| Class                 | Effect                                                                            |
| --------------------- | --------------------------------------------------------------------------------- |
| `.ease-anchor`        | Gives the element an `anchor-name: --ease-anchor` so it can be referenced         |
| `.ease-anchored`      | Generic class that sets `position: absolute` and `position-anchor: --ease-anchor` |
| `.ease-anchor-top`    | Positions above the anchor, centered horizontally                                 |
| `.ease-anchor-bottom` | Positions below the anchor, centered horizontally                                 |
| `.ease-anchor-left`   | Positions to the left of the anchor, centered vertically                          |
| `.ease-anchor-right`  | Positions to the right of the anchor, centered vertically                         |
| `.ease-anchor-center` | Centers the positioned element over the anchor                                    |

Custom property `--ease-anchor-offset` controls the gap (default `8px`).

## How

1. Add `.ease-anchor` to the reference element.
2. Add `.ease-anchor-top` (or `-bottom`/`-left`/`-right`/`-center`) to the element you want to position relative to it.
3. The positioned element must be a sibling following the anchor in the DOM.

```html
<div class="ease-anchor" id="btn">Open</div>
<div class="ease-anchor-top">Tooltip content</div>
```

## Why

Anchor positioning replaces JavaScript-dependent tooltip, popover, and dropdown positioning with a single CSS class. It is more performant, declarative, and handles dynamic layout changes (scrolling, resizing) automatically. These utilities provide a ready-to-use set of positioning shortcuts that mirror common UI patterns.

> **Browser Support:** CSS Anchor Positioning is a recent addition (Chrome 125+). Use with progressive enhancement or a polyfill for older browsers. Always test across your target environments.
