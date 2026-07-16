# CSS Tilt Card — 3D Hover Effect

## What does this do?
This adds a premium 3D perspective tilt effect to any card. When the user hovers over a card, it rotates along its X and Y axes to give a realistic depth sensation, lifts slightly with a scaled-up transform, casts a coloured shadow, and reveals a diagonal gloss sheen across its surface.

## How is it used?
Wrap your card in a `.tilt-wrapper` (which sets the `perspective` context) and apply `.hover-tilt` to the card itself.

Example:
```html
<div class="tilt-wrapper">
  <div class="hover-tilt">
    <p>Your card content here.</p>
  </div>
</div>
```

## Why is it useful?
- Creates a **premium, three-dimensional feel** without any external libraries or JavaScript — commonly seen in portfolios, product showcases, and landing pages.
- The tilt uses `transform: rotateX() rotateY()` with `perspective`, which are GPU-composited properties, making the animation buttery smooth at 60fps.
- The `::after` gloss overlay simulates a light source reflection, enhancing the illusion of depth and giving cards a high-end, polished appearance.
