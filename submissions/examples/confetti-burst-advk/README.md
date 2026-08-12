# Confetti Burst

## What does this do?

A one-shot confetti celebration where each piece flies on its own angle, distance
and spin, all derived from its index.

## How is it used?

```html
<div class="cfb-stage">
  <button class="cfb-btn" type="button">Complete order</button>
  <span class="cfb-piece" style="--i:0"></span>
  <span class="cfb-piece" style="--i:1"></span>
</div>
```

Adding `is-go` to the stage fires the burst; removing and re-adding it replays.

## Why is it useful?

Confetti is normally a canvas library — a few hundred kilobytes and a physics
loop for an effect that runs once. For a checkout confirmation that is a poor
trade, and it pulls a runtime dependency into a framework that advertises having
none.

The trick that makes it work in pure CSS is the nested rotation. A single
`transform` chain of `rotate(angle) translateY(distance) rotate(spin)` sends the
piece outward along `angle` while spinning it independently, because each
transform applies in the rotated coordinate space of the previous one. Varying
`angle`, `distance` and hue by `--i` gives twelve distinct trajectories from one
keyframe block.

The reduced-motion path is a real design decision rather than an omission.
Fast-moving projectiles radiating from a point are among the least suitable
effects for motion-sensitive users, so the burst is removed entirely and the
button darkens to confirm instead — the user still gets acknowledgement, just not
via flying objects.
