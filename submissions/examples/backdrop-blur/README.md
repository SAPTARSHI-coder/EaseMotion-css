# backdrop-filter Blur

## What does this do?

Demonstrates CSS `backdrop-filter: blur()` — a frosted glass effect that blurs everything behind an element. The blur amount animates on hover, and a blur overlay reveals sharp text beneath with a wipe animation.

## How is it used?

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0px);
  transition: backdrop-filter 0.4s;
}

.container:hover .glass-card {
  backdrop-filter: blur(12px);
}
```

## Why is it useful?

Frosted glass (glassmorphism) is one of the most popular modern UI trends. `backdrop-filter` makes it a native CSS property — no SVG filters, no canvas, no JS. Animating the blur creates engaging hover states and reveal effects that feel premium, fitting EaseMotion CSS's animation-first approach.
