# Catenary

A pure CSS/HTML hanging chain, drawn on its true curve, `y = a·cosh(x/a)`, with the parabola it is not laid over it for comparison.

## What it shows

Hang a chain between two points and it settles into a specific curve. Galileo said it was a parabola. He was wrong, and it took most of a century and three of the best mathematicians alive (Johann Bernoulli, Leibniz, and Huygens, in 1691) to prove what it really is: the **hyperbolic cosine**, `y = a·cosh(x/a)`.

The reason is that the chain hangs to minimise its potential energy, and a uniform chain has its weight spread evenly *along its own length*, not evenly across the horizontal span. That difference is exactly what separates the cosh from the parabola. A parabola is what you get if the load is spread evenly across the horizontal, which is why a **suspension bridge deck** really does hang on parabolas: the roadway, not the cable, carries the weight, and the roadway is horizontal.

Flip a catenary upside down and it becomes the strongest shape for an unreinforced arch, because it carries its own weight in pure compression. Gaudí used hanging chains as analogue computers to design them, and the St. Louis Gateway Arch is a (weighted) inverted catenary.

## How it is built

- **Every link is on the cosh.** The 22 chain links are placed at `y = sag − (a·cosh(x/a) − a)` with `a = 68`. The browser check recomputes the hyperbolic cosine from scratch against each link's declared `--x` and `--y`: worst error **0.011px**, the rest being two-decimal coordinate rounding.
- **The parabola is the honest comparison.** A dashed parabola is drawn through the **same two posts and the same lowest point** as the chain. The check confirms the endpoints coincide (gap **0px**) but the curves **diverge by up to 8.2px** in between. So the drawing proves the claim rather than asserting it: same ends, different curve.
- **It hangs, it does not arch.** The check confirms the middle link sits **lower** than the end links (`y` 115 against 0). A first pass had the sign inverted and drew an arch, which is the inverted catenary, a different (if related) object.
- **The links lie along the tangent**: each link is rotated by the local slope, `−atan(sinh(x/a))`, so the chain reads as links following the curve rather than beads scattered on it.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the faint sway, leaving the chain hanging on its curve.

## Files

- `demo.html` - markup
- `style.css` - the whole component
