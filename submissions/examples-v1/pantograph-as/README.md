# Pantograph

A pure CSS/HTML pantograph: four rigid bars that copy a traced shape at exactly twice the size.

## What it shows

A pantograph is a parallelogram of rigid bars with one corner pinned down. Move a pointer (the tracer) around a shape, and a pen at another corner draws the same shape scaled up, with no measuring and no error. It was patented by Christoph Scheiner in 1603 and was the standard way to enlarge or reduce drawings for three centuries; engravers, cartographers and forgers all relied on it, and the same linkage still steadies overhead power lines and camera rigs.

The reason it works is a fixed geometric fact about parallelograms. In a parallelogram, the two diagonals bisect each other. So if the pivot sits at one corner O and the pen at the opposite corner P, the crossing point of the diagonals, T, is exactly the midpoint of the diagonal O–P. That means three things are true no matter how the linkage flexes:

- **O, T, and P are always collinear**,
- **|OP| = 2·|OT| exactly**, so the pen is always twice as far from the pivot as the tracer,
- therefore the pen traces a copy of the tracer's path, at **exactly 2×**, right way up.

Move the pivot to a different point along the bars and you get 3×, 5×, one-half, any ratio you like. This one is fixed at 2×.

## How it is built

- **The linkage is genuinely rigid, and it is solved.** For each of 121 tracer positions along a template triangle, the bar angles are found by two-bar inverse kinematics so that all four sides stay at their true lengths. Then each bar is keyframed for position, length and angle.
- **Every claim is measured on the live DOM.** Driving the paused animation across 101 steps:
  - **the four bars keep constant length**: every side varies by **0px**. Nothing stretches.
  - **pivot, tracer and pen stay collinear**: worst deviation from the line is **0.01px**.
  - **the ratio is exactly 2**: `|OP| / |OT|` holds at **2.0000** (worst deviation 0.0003) all the way round.
- **The copy is shown against the original.** The tracer follows a small blue template triangle; the pen follows an orange triangle that is the same shape at 2× and positioned exactly where the geometry sends it. You can see the enlargement happen.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses the linkage on a static pose with both triangles and the bars in place.

## Files

- `demo.html` - markup
- `style.css` - the whole component
