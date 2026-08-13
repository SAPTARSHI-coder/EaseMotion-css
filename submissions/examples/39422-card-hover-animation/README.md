# Card Hover Animation — fixes #39422

This contribution adds the `.ease-card-interactive` utility class to provide a smooth, performant hover elevation effect for card components. It applies a subtle upward translation (`translateY(-6px)`), enhanced drop shadow, and brighter border color with a 250ms cubic-bezier transition, creating intuitive visual feedback without causing layout reflows. The class is composable and works seamlessly across flat, outlined, glassmorphism, and accent card variants.

## Usage

Simply add the `.ease-card-interactive` class alongside any existing `.ease-card` element:

```html
<div class="ease-card ease-card-interactive">
  <h2>Card Title</h2>
  <p>Card content goes here.</p>
</div>
```

## Accessibility

This animation fully respects user accessibility settings via `@media (prefers-reduced-motion: reduce)`. When reduced motion is enabled in the OS or browser settings, transforms and smooth transitions are disabled automatically.
