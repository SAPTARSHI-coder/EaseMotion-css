# Bounce Keyframes Var

Fix #3900: `@keyframes ease-kf-bounce` hardcodes easing values inside keyframes.

## Issue

`core/animations.css` defines:

```css
@keyframes ease-kf-bounce {
  0%,
  100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-20px);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
```

The hardcoded `animation-timing-function` inside keyframes overrides the class-level
`animation-timing-function: var(--ease-ease-bounce)`, making the token ineffective
for controlling the internal bounce curve.

## Recommended Fix (for maintainer)

Remove `animation-timing-function` from the keyframes and let the class-level
`animation: ease-kf-bounce 1s var(--ease-ease-bounce) infinite;` control the timing.

## Files

- `demo.html`
- `style.css`
- `README.md`
