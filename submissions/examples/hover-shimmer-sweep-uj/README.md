# Hover Shimmer Sweep

## What does this do?

Adds a sleek, diagonal light reflection sweep across a button or card on hover, simulating a premium polished finish.

## How is it used?

Apply the `shimmer-sweep-uj` class to any card or button:

```html
<button class="btn shimmer-sweep-uj">
  Get Started
</button>
```

The shimmer color defaults to a semi-transparent white, but can be customized with the `--shimmer-glow` custom property:

```css
.your-custom-card {
  --shimmer-glow: rgba(0, 0, 0, 0.15); /* for light-colored cards */
}
```

## Why is this useful?

It elevates flat button and card elements with a high-fidelity visual interaction without relying on complex image assets, extra HTML markup, or javascript animation loops. This aligns with EaseMotion's philosophy of lightweight, highly performant, accessible, and human-readable styling.
