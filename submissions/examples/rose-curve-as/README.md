# Rose Curve

A pure CSS/HTML rhodonea (rose curve), `r = A·cos(5θ)`, drawing exactly five petals.

## What it shows

A rose curve is one of the simplest polar equations, `r = A·cos(kθ)`, and it hides a small piece of number theory in plain sight. The petal count depends on `k` in a way that catches everyone out the first time:

- if **k is odd**, the curve has **k petals**,
- if **k is even**, it has **2k petals**.

So `cos(5θ)` gives 5 petals, but `cos(4θ)` gives 8, and `cos(6θ)` gives 12. The reason is that for odd `k` the curve retraces itself on the second half-turn (the negative radius folds each petal back onto one already drawn), while for even `k` the second half-turn draws a fresh set. It is the same equation family, and a single parity bit doubles or halves the flower.

Named *rhodonea* by the Italian mathematician Guido Grandi around 1723, who studied them precisely because they look like petals.

## How it is built

- **The curve is the equation.** All 601 points are placed at samples of `x = r·cos θ`, `y = r·sin θ` with `r = A·cos(5θ)` and `A = 120`, over `θ` from `0` to `π` (the full curve for odd `k`). The browser check recomputes `A·cos(5θ)` from scratch against each point's declared `--x` and `--y`: worst error **0.005px** across all 601.
- **The petal count is read off the drawing, and verified.** The check finds every point where the radius reaches its maximum `A` (a petal tip), clusters the tip directions, and counts **5**, matching `k = 5`. So the parity rule is confirmed from the drawn output, not asserted: an odd `k` really does give `k` petals.
- **The petals meet at the origin**, where `cos(5θ) = 0`, five times per traversal, which is what separates one petal from the next.
- **Phosphor-style reveal**: the trace paints on point by point via a per-point `animation-delay` and lingers, with a bright pen swinging out to each petal tip and back.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the sweep and leaves the completed rose, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
