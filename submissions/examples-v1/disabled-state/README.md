# :disabled State Animation

## What does this do?

Animates disabled form elements with pulsing opacity and glow effects — making the disabled state more visually informative than the static gray default.

## How is it used?

```css
:disabled {
  opacity: 0.6;
  animation: pulse-disabled 2s ease-in-out infinite;
  cursor: not-allowed;
}

@keyframes pulse-disabled {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.45;
  }
}
```

## Why is it useful?

Disabled form elements are often just grayed out — users may not notice they're disabled or understand why. An animated pulse draws attention to the disabled state without requiring additional UI text. This improves usability while keeping the solution purely CSS, fitting EaseMotion CSS's accessible, animation-first approach.
