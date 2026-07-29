# ease-sticky — Issue #23958

## What

Utility classes for `position: sticky` — a CSS positioning mode that toggles between relative and fixed positioning depending on the scroll position.

| Class | Effect |
|---|---|
| `.ease-sticky-top` | `position: sticky; top: var(--ease-sticky-offset); z-index: var(--ease-sticky-z)` |
| `.ease-sticky-bottom` | `position: sticky; bottom: var(--ease-sticky-offset); z-index: var(--ease-sticky-z)` |
| `.ease-sticky-offset` | Helper to override `--ease-sticky-offset` on a scoping element |

Custom properties:
- `--ease-sticky-z` (default `10`) — controls the stacking order
- `--ease-sticky-offset` (default `0px`) — distance from the top/bottom edge at which the element becomes sticky

## How

Add the class to any element you want to stick:

```html
<header class="ease-sticky-top">
  This header will stick to the top on scroll
</header>
```

Override the offset or z-index with inline styles or a CSS rule:

```html
<header class="ease-sticky-top" style="--ease-sticky-offset: 1rem;">
  Sticky with 1rem gap from the top
</header>
```

## Why

Sticky positioning is widely used for persistent headers, table headers, section labels, and side panels. These utilities encapsulate the correct property values and make it easy to apply consistently. The CSS variables allow per-instance customization without rewriting the full declaration.
