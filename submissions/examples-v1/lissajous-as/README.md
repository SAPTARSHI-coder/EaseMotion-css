# Lissajous

A pure CSS/HTML oscilloscope tracing a 3:2 Lissajous figure, whose shape reads out the frequency ratio directly.

## What it shows

Feed two sine waves into an oscilloscope, one to the horizontal deflection and one to the vertical, and the dot traces a **Lissajous figure**:

```
x = A·sin(a·t + δ)
y = B·sin(b·t)
```

The figure is closed and stationary only when `a : b` is a ratio of whole numbers, and its shape is a direct readout of that ratio. This is not a metaphor. Before frequency counters existed, this is **how you measured an unknown frequency**: you fed it into one axis, fed a known reference into the other, and adjusted the reference until the figure held still. When it froze, you read the ratio off the picture and multiplied.

You read it off the **edges**:

- the number of points where the curve just touches the **left or right** edge equals the **x-frequency**,
- the number touching the **top or bottom** equals the **y-frequency**.

Here that is 3 and 2, and the figure freezes into the familiar pretzel. The phase offset `δ` only rotates and shears it; it never changes those counts.

## How it is built

- **The curve is the equation.** All 601 points are placed at samples of `x = A·sin(3t + π/2)`, `y = B·sin(2t)`. The browser check recomputes both from scratch against each point's declared `--x` and `--y`: worst error **0.005px** across all 601.
- **The ratio is read off the drawn figure, and verified.** The check finds where the curve touches each edge, deduplicating peaks and handling the closed-curve wrap: **3 touches on the left edge and 3 on the right** (the x-frequency), **2 on the top and 2 on the bottom** (the y-frequency). So the picture genuinely encodes 3:2, measured from the output rather than asserted.
- **Phosphor persistence**: the trace paints on point by point via a per-point `animation-delay` and lingers, the way a real scope's phosphor glows after the beam passes.
- **A bright beam dot** rides the curve, so you can watch the figure being drawn.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the sweep and leaves the complete figure lit, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
