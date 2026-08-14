# Shimmer Text Block

## What does this do?

Renders a set of placeholder text lines with a shimmering sweep overlay to indicate content is loading. Each line uses a pseudo-element with a gradient that translates horizontally via `@keyframes stbShimmer`, creating a polished skeleton-screen effect.

## How is it used?

Wrap `stb-line` elements inside a `.stb-group` container:

```html
<div class="stb-group">
  <div class="stb-line" style="width: 100%;"></div>
  <div class="stb-line" style="width: 75%;"></div>
</div>
```

Configure parameters with custom CSS variables:
- `--shimmer-bg`: Background color of the text lines (defaults to `#1e293b`).
- `--shimmer-duration`: Speed of one shimmer sweep (defaults to `2s`).

## Why is this useful?

Skeleton screens improve perceived performance by showing users the structure of upcoming content. This component is pure CSS — no JavaScript, no external dependencies — and respects the user's `prefers-reduced-motion` setting by disabling the animation entirely.
