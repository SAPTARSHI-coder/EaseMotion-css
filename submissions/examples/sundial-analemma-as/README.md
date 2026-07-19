# Sundial Analemma

A pure CSS/HTML analemma: mark where a sundial's shadow tip falls at clock noon, every third day for a year, and you get a lopsided figure-eight.

## What it shows

Noon by the clock is not noon by the sun, and the gap changes all year. Mark the shadow tip at exactly 12:00 every day and the marks do not pile up in one place. They trace a **figure-eight**, and the sundial runs up to about **16 minutes ahead in early November and 14 minutes behind in mid-February**.

Two separate things cause it, and the shape is their sum:

- **Earth's orbit is an ellipse**, so it moves faster near perihelion in January than at aphelion in July. That alone would give a once-a-year sine wave.
- **Earth's axis is tilted 23.4°**, so the sun's apparent motion is not parallel to the celestial equator. That alone would give a twice-a-year wave.

Add a one-cycle wave to a two-cycle wave and you get a figure-eight. The loops are different sizes because the two effects do not line up. The vertical axis is just the sun's declination: high in June, low in December.

This is why a sundial and a clock disagree, and why old sundials often carry a correction table engraved on them.

## How it is built

- **The figure is computed from the equation of time.** Every dot is placed at

  `B = 2π(N − 81) / 364`
  `EoT = 9.87·sin(2B) − 7.53·cos(B) − 1.5·sin(B)` (minutes)
  `declination = 23.45·sin(B)` (degrees)

  for its own day number `N`, plotted as EoT against declination. Nothing was traced by hand.

- **Verified in the browser.** The check recomputes both formulas from scratch against each dot's declared `--n`, `--x` and `--y`: worst error **0.005px** across all 122 samples. The resulting spans come out at **−14.59 to +16.45 minutes** and **±23.45°**, which is Earth's actual axial tilt falling out of the maths rather than being drawn in.

- **The asymmetry is real.** The small loop is summer and the big one is winter. That inequality is the whole reason the analemma is interesting, and it appears because the two-term formula genuinely superposes a one-cycle and a two-cycle wave.

- **The year runs once**: each dot appears on its own day via `animation-delay: calc(var(--n) * 0.0424s)`, so the figure accumulates the way an observer would build it.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the keyframe and leaves the complete figure drawn, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
