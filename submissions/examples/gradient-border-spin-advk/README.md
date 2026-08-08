# Gradient Border Spin

## What does this do?

Rotates a conic gradient around the border of a card while leaving the card's
interior completely static.

## How is it used?

```html
<article class="gbs-card">
  <h2 class="gbs-card__h">Pro</h2>
  <p class="gbs-card__p">Recommended tier.</p>
</article>
```

Add `gbs-card--hover` to hold the sweep paused until hover or `:focus-within`.

## Why is it useful?

Highlighting a "recommended" card usually means a static accent border or a
pulsing box-shadow. A travelling gradient draws attention far more effectively,
but the common implementations put the gradient on the element background and
animate `background-position`, which drags the interior along with it and makes
body text shimmer — unpleasant to read and a contrast hazard.

Masking the gradient to the padding ring with `mask-composite` isolates the
motion to the frame. The interior keeps a solid background and a fixed contrast
ratio, so the card stays readable while its edge animates.

Registering `--gbs-angle` with `@property` is what makes the rotation possible at
all: an unregistered custom property is an untyped token and cannot be
interpolated, so `@keyframes` would step from `0deg` to `360deg` with no
in-between. Declaring `syntax: "<angle>"` lets the browser animate it smoothly on
the compositor.

Under `forced-colors` the gradient is dropped for a plain `CanvasText` border,
since gradients are not painted in High Contrast mode and the card would
otherwise lose its edge entirely.
