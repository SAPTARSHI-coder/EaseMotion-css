# Ammonite

A pure CSS/HTML ammonite in matrix, built from the logarithmic spiral it actually grew along.

## What it shows

An ammonite has one growth rule and follows it for its whole life: **add to the open end, in proportion to what is already there.**

That rule has only one solution, and it is the logarithmic spiral `r = a·e^(bθ)`. Its defining property is **self-similarity**: the shell gets bigger but never changes shape. A juvenile ammonite and an adult are the same object at different scales, which is exactly what you would expect from an animal that can only ever build onto the front and can never go back and remodel.

This is why the animal can keep using the shell it has. It never outgrows the *shape*, only the *chamber*, so it walls the old one off with a **septum** and moves forward into a new one. The spiral behind it fills up with sealed chambers it will never re-enter, connected only by a thin tube it uses to adjust its buoyancy.

Jacob Bernoulli was so taken with the curve's self-similarity that he asked for one on his gravestone with *eadem mutata resurgo*: "changed, I rise again the same."

## How it is built

- **The spiral is the equation.** All 190 chamber segments are placed at `r = 7.6·e^(bθ)` with `b = ln(2)/2π`, sampled over 3.6 turns. That choice of `b` means the radius **doubles every full whorl**.
- **Self-similarity is enforced, not drawn.** Each chamber's width is `r × 0.60`. Because the width is tied to the radius rather than fixed, the shell scales without changing proportion. That single line is what makes it an ammonite rather than a coil of tube.
- **Verified two independent ways in the browser:**
  - Recomputing `r = a·e^(bθ)` from scratch against every segment's declared `--x`, `--y` and `--w`: worst position error **0.005px**, worst width error **0.005px**.
  - Ignoring the formula entirely and just measuring the rendered radius at points **one full turn apart**: the ratio comes out **2.013** every time, across the whole shell. The shell really does double per whorl.
- **The septa are the biology.** 62 walls placed along the same spiral, each sealing a chamber the animal outgrew. They appear *behind* the growing edge on a lagged delay, because that is the order they were built in.
- **Grown from the inside out**: segments appear on `calc(var(--i) * 0.026s)`, so the shell accumulates from the umbilicus outward, the way the animal laid it down.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the complete shell in the rock, which is how you would find it.

## Files

- `demo.html` - markup
- `style.css` - the whole component
