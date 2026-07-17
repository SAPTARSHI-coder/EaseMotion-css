# Planimeter

A pure CSS/HTML polar planimeter: trace the edge of a shape once, and a little wheel has computed its area.

## What it shows

You have an irregular blob on a map and you want its area. There is no formula for it. The planimeter answers anyway, and it never touches the inside of the shape.

It is **Green's theorem, built out of brass**. The theorem says a double integral over a region equals a single integral around its boundary, so the area is fully determined by the edge. The planimeter is that identity made physical: it only ever knows where the boundary is, and it comes out with what is enclosed.

The trick is the **measuring wheel**. It is mounted at an angle so it only rolls when the arm moves **sideways**, and simply **slides** when the arm moves along its own length. So it does not measure distance travelled. It integrates one component of the motion and throws the other away. Go round the outline once and the wheel's net rotation is proportional to the area, because the forward roll on the way out and the backward roll on the way home cancel everywhere except for what is enclosed.

Amsler sold thousands from 1854. Engineers used them well into the era of CAD.

## How it is built

- **The area is real.** The traced figure's area is computed with the **shoelace formula** over its 120 boundary points: **10922.5 px²**. The label on the instrument reads **10923**. The browser check recomputes the shoelace sum straight off the DOM and confirms the label matches the true area to within 1 unit. That is fitting, because the shoelace formula *is* the discrete form of the same boundary integral the planimeter mechanises.
- **The fill is the traced polygon.** The shaded region is a `clip-path: polygon(...)` built from the same 120 points as the dotted outline, so the thing being measured and the thing being traced are literally the same shape. A first pass used a smooth ellipse for the fill that disagreed with the outline.
- **The linkage is solved, not faked.** The two arm angles come from real two-link **inverse kinematics**: given each target on the outline, solve for the pole-arm and tracer-arm rotations. The forward check confirms **0.000000 px** tip error at every stop.
- **And it is verified end to end.** The browser check drives the two arm rotations across **300 samples** of the cycle and measures the tracer's distance to the nearest outline point: worst case **2.98px**. The tracer is a child of the tracer arm, so it cannot cheat: it goes where the linkage puts it, and the linkage puts it on the outline.
- **Stop density mattered.** With 12 keyframe stops the browser interpolates the *angles* linearly between them, which cuts corners on a wiggly boundary and threw the tracer up to **11px** off. At 60 stops it holds within 3px.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the linkage and leaves the area reading visible.

## Files

- `demo.html` - markup
- `style.css` - the whole component
