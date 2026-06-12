# CSS offset-path Motion

## What does this do?

Animates elements along custom geometric paths using `offset-path` — circles, polygons, and SVG curve data — with `offset-rotate: auto` so the element follows the direction of the path.

## How is it used?

```css
.element {
  offset-path: circle(60px at 50% 50%);
  offset-rotate: auto;
  animation: move-along 3s ease-in-out infinite;
}

@keyframes move-along {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

## Why is it useful?

Complex motion paths previously required SVG `<animateMotion>` or JavaScript libraries like GSAP. CSS `offset-path` brings this capability natively — declarative, performant, and composable with other CSS animations. This fits EaseMotion CSS's animation-first philosophy by making cinematic motion paths a simple CSS property.
