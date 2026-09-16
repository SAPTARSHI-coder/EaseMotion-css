# background-position Animation

## What does this do?

Animates CSS `background-position` to create a shimmer loading sweep, a sliding panoramic background, and moving diagonal stripes — all using the same core technique.

## How is it used?

```css
.element {
  background: linear-gradient(90deg, transparent, rgba(0,0,255,0.1), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { background-position: 200% 0; }
  50%      { background-position: 0 0; }
}
```

## Why is it useful?

`background-position` animation is a performant (GPU-composited) way to create loading shimmers, gradient transitions, and moving patterns without extra HTML elements or JavaScript. It's widely used in skeleton loading states, hero banners, and decorative backgrounds — fitting EaseMotion CSS's zero-dependency animation toolkit.
