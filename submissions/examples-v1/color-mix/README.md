# color-mix()

## What does this do?

Demonstrates the `color-mix()` CSS function — mixing two colors across different color spaces (`srgb`, `hsl`, `lch`) with animated mixing ratios via `@property` registered custom properties.

## How is it used?

```css
@property --mix-pct {
  syntax: "<percentage>";
  initial-value: 0%;
  inherits: false;
}

.element {
  background: color-mix(in srgb, blue var(--mix-pct), red);
  animation: slide-mix 3s ease-in-out infinite alternate;
}

@keyframes slide-mix {
  to {
    --mix-pct: 100%;
  }
}
```

## Why is it useful?

`color-mix()` enables declarative color blending in CSS — previously only possible with preprocessors or JavaScript. Combined with `@property`, it unlocks animated color transitions, dynamic theming, and design tokens that blend at runtime, aligning with EaseMotion CSS's philosophy of expressive, runtime-driven design.
