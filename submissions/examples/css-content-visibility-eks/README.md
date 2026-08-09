# CSS content-visibility Performance Demo

## What does this do?

A side-by-side performance demonstration of CSS `content-visibility: auto` — the left column skips rendering off-screen sections, the right column renders everything normally. Open Chrome DevTools Performance tab and reload to see the quantified difference.

## How is it used?

```css
/* Optimized sections — browser defers off-screen rendering */
.optimized-section {
  content-visibility: auto;
  contain-intrinsic-size: auto 200px;
}

/* Normal sections — everything renders on load */
.normal-section {
  /* no content-visibility — default browser behavior */
}
```

That's it. One CSS property separates the two columns. All 50 sections have identical content — the only difference is `content-visibility`.

## Why is it useful?

Performance optimization is often seen as a JavaScript/backend concern. `content-visibility: auto` proves that significant rendering gains come from CSS alone:

- **Skip rendering off-screen content** — the browser defers layout, paint, and hit-testing for elements outside the viewport
- **Reduce initial paint time** — fewer elements competing for the rendering budget means faster First Contentful Paint
- **Lower memory usage** — paint layers for off-screen content aren't created until needed
- **Progressive enhancement** — browsers that don't support it render normally; no breakage
- **Zero JavaScript** — no IntersectionObservers, no scroll handlers, no virtual DOM diffing

This fits EaseMotion's philosophy: one readable property, dramatic results, no framework needed. Open DevTools → Performance → reload to see it in action.
