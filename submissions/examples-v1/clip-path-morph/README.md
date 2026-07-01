# clip-path Morph Animation

## What does this do?

Animates `clip-path` to smoothly morph between geometric shapes (circle, diamond, hexagon, inset) and reveals content with a wipe transition — all with pure CSS keyframes.

## How is it used?

```css
.element {
  animation: morph 6s ease-in-out infinite;
}

@keyframes morph {
  0%   { clip-path: circle(50%); }
  50%  { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
  100% { clip-path: circle(50%); }
}
```

## Why is it useful?

Shape-morphing animations were once the domain of SVG or JavaScript libraries. CSS `clip-path` animation makes organic shape transitions declarative and composable — useful for loading states, image reveals, and decorative UI elements. This fits EaseMotion CSS's mission of making complex animations readable and dependency-free.
