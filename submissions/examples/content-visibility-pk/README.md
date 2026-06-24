# EaseMotion — `content-visibility: auto` Performance

Skip rendering of off-screen elements to dramatically improve FCP, LCP, and scroll performance on pages with many animated components.

## The Problem

Long pages with hundreds of animated cards, list items, or gallery entries force the browser to layout, paint, and composite every element — even those far below the fold. This hurts FCP, LCP, and scroll FPS.

## The Solution

`content-visibility: auto` tells the browser to skip rendering for off-screen elements. Combined with `contain-intrinsic-size`, the element reserves space so the scrollbar doesn't jump.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side comparison: 200 cards with/without content-visibility + timing |
| `style.css` | Card styles, info cards, caveats |

## Proposed Utility

```css
.ease-content-visibility-auto {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
```

## Best For

| Use Case | Why |
|----------|-----|
| Long card lists | ~10x faster initial paint |
| Image galleries | Only visible images render |
| Blog feeds | Below-the-fold entries deferred |
| Dashboard grids | Widgets off-screen don't paint |

## Caveats

- **Off-screen animations are paused** — animation frames don't tick for elements outside the viewport. Fine for most use cases (why animate what no one sees?)
- **Must set `contain-intrinsic-size`** — without it, the browser reserves 0px height, causing scrollbar jumps
- **Not a lazy-loading replacement** — images still need `loading="lazy"`

## Browser Support

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 85+ | 125+ | 17.5+ (flagged) |
