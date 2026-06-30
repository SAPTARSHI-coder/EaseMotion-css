# brightness() Filter

## What does this do?

Demonstrates the CSS `brightness()` filter function — animating perceived brightness with a pulsing effect (1.0 → 1.8 → 1.0) and hover-triggered brightness shifts on colored cards.

## How is it used?

```css
.element {
  animation: bright-pulse 3s ease-in-out infinite;
}

@keyframes bright-pulse {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.8);
  }
}

.card:hover {
  filter: brightness(1.2);
}
```

## Why is it useful?

`brightness()` is a simple but effective tool for interactive feedback — brightening on hover signals clickability, dimming communicates disabled or inactive states, and pulsing draws attention. It works on any element regardless of background, making it a versatile addition to an animation toolkit like EaseMotion CSS.
