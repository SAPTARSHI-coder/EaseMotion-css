# Pulse Animation for a Sale Badge

## What does this example do?
This example demonstrates a product card containing a "SALE" badge. The badge uses a continuous, subtle CSS `scale` animation to attract the user's eye without being overly distracting or causing layout shifts.

## How is it used?
Add the `.ease-pulse-badge` utility class to any absolute or inline-block positioned label/badge that you want to highlight.

```html
<span class="sale-badge ease-pulse-badge">SALE</span>
```

In the CSS, the class applies a 2-second infinite loop using `transform: scale(1.08)` at the midway point of the animation, ensuring a gentle expansion and contraction.

## Why is it useful?
E-commerce interfaces rely heavily on drawing attention to promotional items. While a static badge is helpful, a subtly animated badge converts higher. This implementation is:
- **Performant**: It only animates the `transform` property, meaning the browser can hardware-accelerate it without triggering layout recalculations (reflows).
- **Accessible**: It utilizes a `@media (prefers-reduced-motion: reduce)` query to automatically stop the animation for users who suffer from motion sensitivity, ensuring the badge remains visible but static. 
- **Non-disruptive**: The 2-second duration combined with `ease-in-out` easing keeps the pulse feeling organic rather than alarming.
