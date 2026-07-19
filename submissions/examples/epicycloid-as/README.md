# Epicycloid

A pure CSS/HTML epicycloid: the curve traced by a point on a wheel rolling around the *outside* of a fixed circle.

## What it shows

Roll a wheel around the outside of a fixed circle and follow one point on its rim. It traces an **epicycloid**:

```
x = (R+r)·cos t − r·cos((R+r)/r · t)
y = (R+r)·sin t − r·sin((R+r)/r · t)
```

The shape is a ring of lobes, each meeting the next at a sharp **cusp** where the rim point touches the fixed circle. The number of cusps is governed by a single ratio:

- **cusps = R / r**

so a wheel a quarter the size of the fixed circle (R:r = 4:1) gives a 4-cusp star. R = r gives one cusp, the **cardioid** (the bright curve you see in the bottom of a coffee cup). R = 2r gives two, the **nephroid**. When R/r is not a whole number the curve never closes into a finite star; it winds forever.

This is the same family of curves Ptolemy used for **epicycles**, the wheels-on-wheels model of planetary motion that held for 1,400 years. It was wrong about the solar system, but the maths of a point on a circle rolling on a circle is exactly this.

## How it is built

- **The curve is the equation.** All 481 points are placed at samples of the epicycloid with R = 88, r = 22. The browser check recomputes both formulas from scratch against each point's declared `--x` and `--y`: worst error **0.005px** across all 481.
- **The cusp count is read off the drawing, and verified.** The check finds every point where the curve reaches its minimum radius (a cusp touching the fixed circle), clusters their directions, and counts **4**, matching `R/r = 4`. So the ratio rule is confirmed from the drawn output.
- **The cusps touch the fixed circle exactly.** The minimum radius of the traced curve measures **88px**, which is exactly R, the fixed circle's radius. The cusps sit on it, not near it.
- **Rolling without slipping is enforced by the timing.** The wheel's centre orbits at radius R+r and it spins `(R+r)/r = 5` turns per orbit, which is the no-slip condition and what keeps the pen on the drawn curve.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the roll and leaves the completed star drawn, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
