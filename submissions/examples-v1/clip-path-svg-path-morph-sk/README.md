# clip-path: path() SVG Data Morphing

## What does this do?

Animates CSS `clip-path` using raw SVG path data (`path("M...")`), morphing between complex organic shapes that basic shape functions like `circle()`, `polygon()`, and `inset()` cannot describe.

Four demos are included:

- **Gradient fill** — continuous morph through four organic keyframe shapes
- **Hover morph** — `transition: clip-path` between two `path()` values on `:hover`
- **Content boundary** — any element content (emoji, image, text) stays clipped inside the morphing shape
- **Staggered cluster** — four blobs sharing the same `@keyframes`, offset via negative `animation-delay`

## How is it used?

```css
/* All keyframe paths must share the same SVG command count and order */
@keyframes ease-path-morph {
  0%,
  100% {
    clip-path: path(
      "M 150 0 C 220 10 290 80 285 155 C 280 230 210 295 135 290 C 60 285 0 220 0 145 C 0 65 75 -10 150 0 Z"
    );
  }
  50% {
    clip-path: path(
      "M 155 10 C 230 25 275 110 265 185 C 255 255 185 300 110 285 C 40 270 -5 195 10 120 C 25 50 80 -5 155 10 Z"
    );
  }
}

.element {
  animation: ease-path-morph 6s ease-in-out infinite;
}
```

For hover transitions without keyframes:

```css
.element {
  clip-path: path("M 100 0 C 155 5 195 50 192 103 ...");
  transition: clip-path 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}
.element:hover {
  clip-path: path("M 100 5 C 168 0 205 68 198 132 ...");
}
```

## Why is it useful?

`clip-path: path()` accepts raw SVG path data, enabling morphing between shapes with complex curves and irregular outlines — organic blobs, abstract UI shapes, content reveal masks — that no basic shape function can produce. The critical constraint is that every keyframe path must contain the **same number of commands in the same order** for the browser to interpolate. This demo documents that constraint explicitly alongside working examples.

Staggered blob clusters use `animation-delay: calc(var(--i) * -1.5s)` (negative delays) so all blobs appear mid-animation on load rather than all starting from the same frame.
