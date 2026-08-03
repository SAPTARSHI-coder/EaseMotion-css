# @property Gradient Button

## What does this do?

Animates gradient colors and rotation natively in CSS using `@property` typed custom properties — no JavaScript, no background-position hacks.

## How is it used?

```html
<!-- Spinning conic gradient -->
<button class="grad-btn grad-btn--spin">Get Started</button>

<!-- Hue-shifting linear gradient -->
<button class="grad-btn grad-btn--hue">Learn More</button>

<!-- Animated border ring -->
<button class="grad-btn grad-btn--ring">Contact Us</button>
```

## Why is it useful?

Without `@property`, CSS cannot interpolate custom properties used as gradient stops — the browser treats them as discrete switches. Declaring `--grad-angle` as `<angle>` and `--grad-color-start` as `<color>` gives the browser the type information it needs to animate them smoothly inside `@keyframes`. This produces a continuously rotating conic gradient and cross-hue color shift that is impossible with `transition` or `background-position` alone. Requires Chrome 85+, Firefox 128+, Safari 16.4+. A `@supports` fallback targets older browsers gracefully.
