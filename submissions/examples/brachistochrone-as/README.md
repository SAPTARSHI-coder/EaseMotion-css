# Brachistochrone

A pure CSS/HTML race between three frictionless beads sliding from the same point to the same finish, down three different tracks.

## What it shows

In June 1696 Johann Bernoulli put a challenge to "the sharpest mathematicians in the world": given two points at different heights, find the curve down which a bead slides, under gravity alone, in the least time. He called it the **brachistochrone**, from the Greek for "shortest time", and gave six months. At Leibniz's request he extended it to a year.

The obvious answer is the straight line, and the obvious answer is wrong.

The winner is a **cycloid**: the curve traced by a point on the rim of a rolling wheel. It is longer than the straight line, and it wins anyway. The bead's speed at any height is fixed by how far it has fallen, `v = sqrt(2 g y)`, no matter which track it took. So the only lever you have is *when* you fall. The cycloid drops steeply at the start, buying speed early, then spends that speed across the flatter run-in. The straight line is the shortest path and the slowest one.

Newton received the problem and, the story goes, solved it in an evening after a day's work at the Mint. He published anonymously. Bernoulli is said to have recognised the author immediately: *ex ungue leonem*, the lion is known by its claw.

There is a second surprise. The same cycloid is also the **tautochrone**: release a bead anywhere on it and it reaches the bottom in the same time, which Huygens had found in 1659 while trying to build an accurate pendulum clock. Bernoulli remarked on the coincidence that one curve answers two unrelated questions.

## The numbers

Descent time along any track is

```
T = integral of ds / sqrt(2 g y)
```

For a drop of 220px across and 120px down, at g = 980 px/s2:

| track | time | |
| --- | --- | --- |
| straight line | 1.0285 s | shortest path |
| circular arc | 0.8764 s | |
| cycloid | 0.8421 s | fastest |

The cycloid beats the straight line by **18.1%** and still beats a well-chosen circular arc by **3.9%**.

## How it is built

- **The times are computed, not chosen.** The cycloid parameter is found by bisection so the curve passes exactly through the finish, then each track's descent time is evaluated from the integral above over 4000 steps. Those times set the keyframes, so the race result is a consequence of the physics rather than a decision about which bead should win.
- **The race is measured in the browser, on the rendered beads.** Sweeping the paused animation and watching for each bead to reach the finish: **cycloid 1.956s, arc 2.036s, straight 2.388s**, in that order. The 18.1% margin over the straight line matches the computed figure exactly.
- **All three genuinely start together.** The check measures each bead against the start marker at t = 0 and gets **0px** offset for all three, so nothing is given a head start.
- **The tracks are drawn from the same data that times them**, 121 points each, sharing both endpoints.
- Playback is slowed about 2.3x so the finish is watchable. The ratios between the three are untouched.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses the three beads mid-descent, leaving the tracks and the times readable.

## Files

- `demo.html` - markup
- `style.css` - the whole component
