# mix-blend-mode Animation

## What does this do?

Demonstrates CSS `mix-blend-mode` animations — a shape cycles through 7 blend modes (difference, screen, multiply, overlay, hue, color-dodge, normal) against a colorful gradient background, and text uses `difference` mode to invert itself against a moving gradient.

## How is it used?

```css
.element {
  animation: blend-cycle 8s step-start infinite;
}

@keyframes blend-cycle {
  0%  { mix-blend-mode: normal; }
  25% { mix-blend-mode: difference; }
  50% { mix-blend-mode: screen; }
  75% { mix-blend-mode: multiply; }
}
```

## Why is it useful?

`mix-blend-mode` creates visually rich, artistic effects that are impossible with standard CSS alone — and animating between blend modes opens creative possibilities for backgrounds, text overlays, and image galleries. Understanding blend modes helps developers create polished, design-forward UI without SVG filters or canvas, fitting EaseMotion CSS's philosophy of powerful, readable CSS.
