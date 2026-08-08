# CSS `margin-trim` Demo

A side-by-side educational demo showing how the `margin-trim` property eliminates excess margins at container boundaries — without negative margins, without `:first-child`/`:last-child` resets, and without `gap` workarounds.

## What This Demo Shows

Three before/after comparisons:

| Demo | Problem | Solution |
|---|---|---|
| **Card container** | Children with `margin-block: 16px` create extra space at top/bottom | `margin-trim: block` trims both edges |
| **Tag cloud** | Tags with `margin-inline-end: 8px` leave trailing space on each row | `margin-trim: inline` trims end-of-row margins |
| **Article list** | Articles with `margin-block` push first/last items away from container edges | `margin-trim: block` makes the container hug its content |

## How It Works

`margin-trim` trims margins of **direct children** that touch the container's edges.

```css
/* Block axis: trims top and bottom margins */
.container {
  margin-trim: block;
}
.container > * {
  margin-block: 16px; /* top/bottom margins trimmed at edges */
}

/* Inline axis: trims left and right margins */
.tag-cloud {
  display: flex; flex-wrap: wrap;
  margin-trim: inline;
}
.tag {
  margin-inline-end: 8px; /* end-of-row margin auto-trimmed */
}

/* Both axes */
.container {
  margin-trim: block inline;
}
```

## Why This Matters

**Old way** (overflow hacks, pseudo-elements, negative margins):

```css
.container > :first-child { margin-top: 0; }
.container > :last-child  { margin-bottom: 0; }

/* Or using flexbox gap + negative margin tricks */
.container {
  display: flex; flex-direction: column;
  gap: 16px;
  /* But gap doesn't collapse like margins do */
}
```

**New way** (one property):

```css
.container {
  margin-trim: block; /* That's it */
}
.container > * {
  margin-block: 16px; /* Margins work normally, trimmed at edges */
}
```

## Browser Support

`margin-trim` is Newly Baseline (all major engines as of early 2025):
- Chrome 132+, Edge 132+, Firefox 135+, Safari 18.3+

CSS `light-dark()` fallback for color scheme: Chrome 123+, Firefox 120+, Safari 17.5+

## Accessibility

- Semantic HTML5 landmarks
- `:focus-visible` on all interactive elements
- `prefers-reduced-motion: reduce` disables animations
- `prefers-contrast: more` thickens borders for better visibility
- `forced-colors: active` renders correctly in Windows High Contrast Mode
- Print styles for clean output

## Files

- `demo.html` — Three side-by-side comparison demos + code snippets
- `style.css` — Complete stylesheet with `margin-trim` and `light-dark()`
- `README.md` — This documentation
