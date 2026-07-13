# Magnetic Hover Button Effect

A CSS-only approximation of magnetic button behavior where buttons appear to attract the cursor with smooth transform translations on hover.

## What does this do?

This creates buttons that shift slightly toward the cursor when hovered, using CSS `transform: translate()` with a bouncy cubic-bezier transition to simulate a magnetic pull effect.

## How is it used?

```html
<button class="magnetic-btn">
  <span>Get Started</span>
</button>

<!-- Variants with different pull directions -->
<button class="magnetic-btn magnetic-right">
  <span>Learn More</span>
</button>

<button class="magnetic-btn magnetic-down">
  <span>Download</span>
</button>

<button class="magnetic-btn magnetic-diagonal">
  <span>Sign Up</span>
</button>
```

The effect is wrapped in `@media (hover: hover)` to only apply on pointer devices, with a fallback for touch devices.

## Why is it useful?

This demonstrates how to create trendy micro-interactions without JavaScript, using pure CSS transforms and timing functions. The magnetic effect is widely used in creative portfolios and modern SaaS landing pages to add visual interest and improve user engagement. The CSS-only approach keeps the implementation lightweight and performant while still delivering an impressive interactive effect that stands out from standard hover states.
