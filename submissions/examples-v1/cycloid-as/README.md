# Cycloid

A pure CSS/HTML rolling wheel drawing a cycloid: the curve traced by a single point on its rim.

## What it shows

Mark one point on the rim of a wheel and roll the wheel along a flat surface. The mark traces a **cycloid**:

```
x = r(t − sin t)
y = r(1 − cos t)
```

It is a chain of identical arches, each springing from a sharp **cusp** where the mark touches the ground (its instantaneous speed there is exactly zero) and rising to a rounded peak at the top of the wheel.

The cycloid is one of the most consequential curves in the history of physics, for two properties that both sound impossible:

- **It is the brachistochrone**, the curve of *fastest descent*. A bead sliding down a cycloid between two points arrives sooner than on any other path, including the straight line. Johann Bernoulli posed this as a challenge in 1696; Newton solved it overnight.
- **It is the tautochrone**, the curve of *equal time*. Release a bead from anywhere on a cycloid and it reaches the bottom in the same time, regardless of where it started. Huygens used this to design a pendulum clock that keeps time no matter how wide it swings.

And two plain facts you can measure: each arch is exactly **2r** tall and **2πr** long, so one arch spans exactly the wheel's circumference.

## How it is built

- **The curve is the equation.** All 221 points are placed at samples of `x = r(t − sin t)`, `y = r(1 − cos t)` with `r = 22`. The browser check recomputes both from scratch against each point's declared `--x` and `--y`: worst error **0.005px** across all 221.
- **Both defining measurements are checked off the drawing:**
  - **arch height = 2r**: the highest point measures **44px**, exactly `2 × 22`.
  - **arch length = 2πr**: the distance between consecutive cusps measures **138.2px**, exactly `2π × 22 = 138.2`. So one arch really is the wheel's circumference laid flat.
- **Rolling without slipping is enforced by the timing.** The wheel's `rollY` keyframe advances `276px` (two circumferences) while rotating `720°` (two turns). One turn per circumference is exactly the no-slip condition, and it is what keeps the marked rim point on the drawn curve.
- **The cusps are real.** The arches come to genuine points on the rail, not rounded bottoms, because the traced point momentarily stops when it touches the ground.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the roll and leaves the completed arches drawn, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
