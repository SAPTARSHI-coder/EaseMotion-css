# Card Tilt on Mouse

A card that tilts in 3D toward the cursor as it moves across the surface, giving a subtle parallax "hover" depth effect.

## What it does
A `mousemove` listener maps cursor position within the card to `--rx`/`--ry` custom properties, which drive a `perspective()` + `rotateX/rotateY` transform with a smooth transition. Resets flat on `mouseleave`.

## How to use it
Add `tilt` class and `data-tilt` attribute to any card element, wrap the page (or parent) in a container with `perspective` for stronger depth, and include the movement listener.

```html
<div class="card tilt" data-tilt>
  <h3>Tilt Card</h3>
  <p>Move your cursor across this card.</p>
</div>