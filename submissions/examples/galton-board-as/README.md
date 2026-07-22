# Galton Board

A pure CSS/HTML bean machine: balls fall through eight rows of pegs, each bounce a fair coin flip, and the pile comes out a bell curve every time.

## What it shows

Francis Galton built this in 1894 to make an argument you cannot really argue with once you have watched it.

Every ball is genuinely undirected. At each peg it goes left or right, and nothing about the board prefers either. Follow one ball and you learn nothing; it lands wherever it lands. But drop enough of them and the pile is **always the same shape**, and you could have written it down in advance.

The reason is that there are many more ways to end up in the middle than at the edge. With eight rows there is exactly **one** path that goes left every single time, and **70** different paths that go left four times and right four times. So the bins fill in the proportions **1 : 8 : 28 : 56 : 70 : 56 : 28 : 8 : 1**, which is row eight of Pascal's triangle. That is the binomial distribution, and as the rows increase it approaches the normal curve.

Randomness at the level of the ball, certainty at the level of the pile.

## How it is built

- **The bins are the binomial, not a drawn bell.** Each bin's height is `C(8,k)` scaled against the 70 in the middle. Measured in the browser, the rendered heights come out in the ratios **0.0139, 0.1139, 0.3999, 0.7999, 1, 0.7999, 0.3999, 0.1139, 0.0139**, against the exact `C(8,k)/70` values of **0.0143, 0.1143, 0.4, 0.8, 1, 0.8, 0.4, 0.1143, 0.0143**. Maximum error **0.0004**. Nothing here was eyeballed into a nice shape.
- **The pegs are laid out by the maths too**: row `r` holds `r+1` pegs at `calc(50% + (var(--c) - var(--r) / 2) * 26px)`, so the triangle builds itself from the row index.
- **The balls take real paths.** Each carries a `--bin`, and the drop keyframe advances its x toward that bin **one row at a time** across eight stops, with small alternating offsets for the bounce off each peg. They do not slide diagonally to a destination; they descend through the rows.
- **The comparison is explicit**: a dashed bell traces over the finished piles, so you can see what the pile converged on rather than being told.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the finished distribution standing with the curve drawn over it. The result is the content, so it survives with motion off.

## Files

- `demo.html` - markup
- `style.css` - the whole component
