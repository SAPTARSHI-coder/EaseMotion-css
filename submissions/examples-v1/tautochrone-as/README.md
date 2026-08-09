# Tautochrone

A pure CSS/HTML cycloid bowl with four beads released from four different heights, all reaching the bottom at the same instant.

## What it shows

Drop a bead into a bowl and it slides to the bottom. Drop it from higher up and it has further to travel, but it also picks up more speed. For almost every bowl shape those two effects do not cancel, and the trip takes longer from higher up.

For one shape they cancel **exactly**. On an upside-down arch of a **cycloid**, the time to reach the bottom is

```
T = pi * sqrt(R / g)
```

with no reference at all to where the bead started. That is the **tautochrone** property, from the Greek for "same time". A bead let go just above the bottom and a bead let go from the rim arrive together.

Christiaan Huygens found this in 1659, and he was not doing it for fun. A pendulum clock loses time as its swing decays, because an ordinary circular arc is *not* tautochronous: a wide swing takes fractionally longer than a narrow one. Huygens realised the cure was to make the bob travel a cycloid instead of a circle, and built a pendulum hung between two cycloidal cheeks so the string wrapped against them and forced exactly that path. The clock's rate would then be independent of how far it swung.

The curve has a second life. It is also the **brachistochrone**, the curve of fastest descent between two points, which Johann Bernoulli posed as a challenge in 1696. One curve, two unrelated questions, same answer. Bernoulli remarked on the coincidence.

## The numbers

Descent time from an angle `t0` is `integral ds / sqrt(2 g (y - y0))`. The integrand blows up at the release point, where the bead is at rest, so the integral is evaluated after a substitution that cancels the singularity. For R = 44px at g = 980 px/s2:

| released from | descent time |
| --- | --- |
| 81.5 px above the bottom | 0.665676 s |
| 65.9 px | 0.665676 s |
| 42.7 px | 0.665676 s |
| 19.9 px | 0.665676 s |

Four starting heights spanning a factor of four, and the four times agree to **3e-11 s**. The exact value `pi*sqrt(R/g)` is 0.665676 s.

## How it is built

- **The motion is the exact solution, not an easing curve.** Measured as arc length `s` from the bottom, a bead on a cycloid obeys `s'' = -(g/4R) s`, which is simple harmonic motion exactly, at any amplitude. Each bead's position is `s = s0*cos(wt)` mapped back onto the curve, so all four share one period, `4*pi*sqrt(R/g)` = 2.663 s, no matter how far they swing.
- **The synchrony is measured in the browser, on the rendered beads.** Sweeping the paused animation at 2400 steps and detecting every crossing of the lowest point: all four beads cross at **the same instants**, with **0 ms** disagreement and **0 px** spread between them at the crossing.
- **The four starts are genuinely different**, and that is checked too: the drop heights measure **81.5, 65.9, 42.7 and 19.9 px**, four distinct values. Without that the synchrony would prove nothing.
- **The bowl is a real cycloid**, `x = R(t - sin t)`, `y = R(1 - cos t)`, drawn from 161 points, and the beads are constrained to it rather than animated near it.
- Keyframes are sampled so linear interpolation between them never deviates more than **0.22 px** from the true path.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses the four beads mid-swing, leaving the bowl and the release markers readable.

## Files

- `demo.html` - markup
- `style.css` - the whole component
