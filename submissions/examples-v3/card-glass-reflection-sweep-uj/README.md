# Card Glass Reflection Sweep

## What does this do?

It creates a diagonal glossy reflection sweep across an element on hover, simulating a light reflection on a glass-like surface.

## How is it used?

Apply the `glass-reflection-uj` class to your card, button, or container element:

```html
<div class="glass-reflection-uj">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

Customize the reflection sweep speed or gloss intensity by overriding the duration or gradient values:

```css
.glass-reflection-uj:hover::before {
  transition: left 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Why is this useful?

This effect introduces high-end glassmorphic visual depth and micro-interaction to dashboard cards, pricing grids, and action buttons. It relies solely on a GPU-accelerated pseudoelement transition, avoids layout calculations, and respects reduced motion settings by disabling the sweep.
