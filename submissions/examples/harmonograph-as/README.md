# Harmonograph

A pure CSS/HTML lateral harmonograph: two pendulums, one pen, and a figure that closes in on itself as friction wins.

## What it shows

A Victorian drawing machine. Hang a pen from one pendulum and the paper from another at right angles, set both swinging, and the pen traces the sum of two decaying sine waves.

Everything about the figure comes from one number: the **ratio of the two periods**. A 1:1 ratio gives an ellipse. 2:3 gives the classic looped rosette here. An irrational ratio never closes at all. Detune one pendulum very slightly and the figure slowly precesses, which is the same beat-frequency effect you hear when two strings are almost in tune.

The spiral is friction. Both pendulums are dying the whole time, so each pass is drawn slightly inside the last, and the pen eventually winds down to a dot in the middle. The decay is not a flourish. It is the reason a harmonograph drawing looks the way it does instead of retracing one closed loop forever.

## How it is built

- **The trace is the equations, sampled.** All 880 ink points are placed at

  `x = 100 · sin(2t) · exp(−0.055t)`
  `y = 100 · sin(3t + π/5) · exp(−0.060t)`

  There is no hand-drawn curve here. The browser check recomputes both equations from scratch and compares them against every point's declared `--x` and `--y`: worst error **0.005px** across all 880.

- **The 2:3 is real.** The two pendulum arms have `animation-duration` of `2.4s` and `1.6s`. Measured ratio: **exactly 1.5**. The `2` and `3` on the bobs are what the machine is actually doing, not a caption.

- **Sampling density is a correctness issue.** The first pass used 300 points and the figure came out as a scatter of dots with 25px gaps: a real curve was there in the maths, but you could not see it. At 880 points the mean gap is **3.4px** and the curve reads.

- **The ink accumulates**: each point appears on its own `animation-delay` and stays, so the drawing builds the way the pen builds it, rather than being revealed all at once.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the completed figure drawn. The drawing is the content, so it survives with motion off.

## Files

- `demo.html` - markup
- `style.css` - the whole component
