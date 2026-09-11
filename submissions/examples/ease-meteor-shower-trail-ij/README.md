# Meteor Shower Trail

A night sky where meteors streak diagonally with fading gradient trails while stars twinkle between passes.

## How is it used?

Each meteor is a horizontal gradient bar rotated to an angle, then driven diagonally with a combined translate:

```css
.m1 {
  animation: meteor-fall 3s ease-in infinite;
}
@keyframes meteor-fall {
  0% { opacity: 0; transform: rotate(35deg) translateX(0); }
  8% { opacity: 1; }
  100% { opacity: 0; transform: rotate(35deg) translateX(-220px) translateY(150px); }
}
```

Staggered `animation-delay` (0.2s, 1s, 1.8s, 2.6s) spreads the meteors so the sky never empties. The trail itself is just the gradient stopping at `transparent` on the tail end.

## Why is it useful?

The streak effect is a 3px gradient line — no SVG, no canvas — and rotating the whole line inside the keyframe keeps it aimed correctly while it travels. That same translate-with-fade keyframe is the template for flying objects, carousels' off-screen slides, and notification streams.
