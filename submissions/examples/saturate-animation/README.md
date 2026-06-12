# saturate() Animation

## What does this do?

Animates the CSS `saturate()` filter — cycling color intensity from grayscale (0) to hyper-vibrant (2), with hover-triggered saturation changes on gradient cards.

## How is it used?

```css
.element {
  animation: sat-cycle 4s ease-in-out infinite;
}

@keyframes sat-cycle {
  0%,
  100% {
    filter: saturate(0);
  } /* grayscale */
  50% {
    filter: saturate(2);
  } /* hyper-vibrant */
}
```

## Why is it useful?

Saturation control is a powerful visual tool — desaturating communicates "disabled" or "inactive," while boosting saturation draws attention. Animating between saturation levels creates engaging effects for loading states, image galleries, and hover interactions. This fits EaseMotion CSS's aim to make expressive visual effects simple and declarative.
