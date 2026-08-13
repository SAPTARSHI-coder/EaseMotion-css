# Comet Tail Dash

A comet with a glowing head and streaming ion tail arcs across the night sky on a loop.

## How is it used?

The whole `.comet` translates along a diagonal while staying rotated, so the tail always points back along the path:

```css
.comet {
  animation: comet-fly 4s cubic-bezier(0.4, 0, 0.7, 1) infinite;
}

@keyframes comet-fly {
  0% {
    transform: translate(0, 0) rotate(25deg) scale(1);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  100% {
    transform: translate(440px, 150px) rotate(25deg) scale(0.6);
    opacity: 0;
  }
}
```

## Why is it useful?

Rotating the container once and then translating the group keeps head and tail locked in correct relation — no per-element math. The ease-out tail loop reads as a fast, accelerating sweep, perfect for notifications, page-enter sparkles, or loading streaks.
