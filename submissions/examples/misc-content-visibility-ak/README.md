# Content Visibility Bug

A demo showing how `content-visibility: auto` on animated elements breaks scroll-based animations.

---

## What does this show?

Issue [#5741](https://github.com/anomalyco/easemotion/issues/5741) identified that elements with `content-visibility: auto` skip rendering when off-screen. This prevents scroll-driven animations from initializing properly because the browser never paints the initial frame until the element is near the viewport.

### The problem

```css
.animated-card {
  content-visibility: auto;  /* skips off-screen rendering */
  animation: slideIn 1s;
}
```

Scroll-driven animations fail because the animation's initial state is never computed.

### The fix

```css
.animated-card {
  content-visibility: auto;
  contain-intrinsic-size: 300px; /* provide intrinsic size hint */
}
```

Or remove `content-visibility` from animated elements.

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of content-visibility impact |
| `style.css` | Demo styles and animation comparisons |
| `README.md` | This file |
