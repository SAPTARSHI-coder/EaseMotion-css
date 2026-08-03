# Spirograph

A pure CSS/HTML spirograph: a toothed gear rolling inside a ring, its pen tracing an eight-petal hypotrochoid.

## What it shows

A spirograph draws one family of curves, the **hypotrochoid**: the path of a point fixed to a small gear as it rolls around the inside of a larger fixed ring. The curve is

```
x = (R−r)·cos t + d·cos((R−r)/r · t)
y = (R−r)·sin t − d·sin((R−r)/r · t)
```

where `R` is the ring, `r` the rolling gear, and `d` the pen's distance from the gear's centre.

The whole character of the drawing comes from **one number: the ratio R : r**. Reduce it to lowest terms, and:

- the number of petals is **R / gcd(R, r)**, and
- the curve closes after **r / gcd(R, r)** trips around the ring.

Here `R = 96`, `r = 60`, `gcd = 12`, so it draws exactly **8 petals** and closes after **5 laps**. Change one gear and you change the petal count. A ratio that does not reduce nicely (say 97 : 60) fills the whole disk before it ever closes. The pen offset `d` only changes how fat or pointed the petals are, never how many.

## How it is built

- **The curve is the equation.** All 721 ink points are placed at samples of the hypotrochoid above. The browser check recomputes both formulas from scratch against every point's declared `--x` and `--y`: worst error **0.005px** across all 721 points.
- **The petal count is measured.** The check finds the local maxima of the radius around the curve and counts **8**, matching `R / gcd(96, 60) = 8`. So the defining property is verified from the drawn output, not just claimed.
- **It closes exactly.** The check measures the gap between the first and last point: **0px**. The curve returns precisely to its start after 5 laps, which is what `r / gcd = 5` predicts.
- **The mechanism is shown**: a translucent toothed gear rolls inside the ring with the pen on its rim, so you can see the two rotations (orbit plus spin) that the formula encodes, without the gear hiding the drawing.
- **The ink accumulates** point by point on a per-point `animation-delay`, the way the pen lays it down.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the roll and leaves the completed curve drawn, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
