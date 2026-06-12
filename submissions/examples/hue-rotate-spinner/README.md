# hue-rotate Animation

## What does this do?

Cycles through all colors automatically using the CSS `hue-rotate()` filter — a single animation that shifts the hue of any element through the color spectrum continuously.

## How is it used?

```css
.element {
  animation: hue-cycle 3s linear infinite;
}

@keyframes hue-cycle {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

## Why is it useful?

Creating color-cycling animations previously required multiple hard-coded keyframe stops or JavaScript color math. `hue-rotate` applies to the entire element (including backgrounds, borders, and shadows), automatically cycling through the full spectrum from a single base color. This makes rainbow effects, loading spinners, and animated gradients trivial to implement — fitting EaseMotion CSS's philosophy of simple, expressive animations.
