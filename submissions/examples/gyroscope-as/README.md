# Gyroscope

A pure CSS/HTML gyroscope leaning off vertical and refusing to fall, its axis walking a slow cone instead.

## What it shows

Hang a spinning gyroscope off-centre and it does not topple. It **turns**.

Gravity is pulling down on it the whole time, and the torque that pull creates is perpendicular to the wheel's angular momentum. A torque perpendicular to angular momentum does not change how fast the wheel spins or make it drop. It swings the direction of the axis sideways. So the axis walks a horizontal circle, and the gyroscope hangs there at an angle looking like it has forgotten about gravity.

The faster the wheel spins, the *slower* it precesses, which is the opposite of what intuition suggests.

## How it is built

The structure is the physics. Three nested frames, each doing one rotation:

1. **`.precessG`** rotates about the vertical with `rotateY(0 → 360deg)`. This is the precession.
2. **`.tiltG`** carries a static `rotateZ(26deg)`. This is the lean gravity is pulling on.
3. **`.rotorG`** spins fast about its own axis.

Because they are nested with `transform-style: preserve-3d`, the tilted axis genuinely gets carried around the cone by the outer frame. Nothing traces a path by hand; the composition does it.

- **Timescale separation**: the rotor's `0.42s` against the precession's `6s` is roughly 14:1, so the wheel visibly spins many times per lap. That gap is the whole reason a gyroscope is stable.
- **The disc in perspective**: `.gimbalG` applies `rotateX(72deg)` so the wheel reads as an ellipse rather than a flat circle. Drawn with fine conic bands it looked like a spiderweb, so it is a solid metal `radial-gradient` with a spin streak over it.
- **The trace**: a dashed ellipse marking the circle the axis walks.
- **Labels**: gravity pulling down, precession going sideways, which is the counterintuitive part worth pointing at.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables both rotations. The tilt is a static transform, so the gyroscope still reads as leaning and unfallen with motion off.

## Files

- `demo.html` - markup
- `style.css` - the whole component
