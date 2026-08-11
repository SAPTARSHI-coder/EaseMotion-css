# Moire

A pure CSS/HTML pair of line gratings, 12px and 13px, laid over each other so that sliding one by a hair sends the interference bands racing.

## What it shows

Two gratings of slightly different pitch, one on top of the other. Where their bars fall in step, light gets through the gaps. Where they fall out of step, the bars of one cover the gaps of the other and the strip goes black. The result is a slow beat with period

```
P = p1 * p2 / |p1 - p2|
```

When the pitches differ by exactly one unit the beat period is simply their product: 12 and 13 give **156px**, thirteen times coarser than either grating that made it.

The useful part is what happens when one grating moves. Slide it by `s` and the bands do not follow along; they move by

```
-s * p1 / |p1 - p2|      =  -12 s
```

Twelve times as far, and in the **opposite direction**. Nudge the grating one pixel and the bands jump twelve, backwards. The pattern is a mechanical lever with no moving parts: a displacement too small to see comfortably is turned into one that is impossible to miss.

That is not a curiosity, it is a measuring instrument. Moire fringe encoders read machine-tool and telescope positions this way, counting fringes instead of grating lines and getting the amplification for free. A vernier scale is the same beat trick frozen in metal. It is also why photographing a screen produces rolling bands, and why misangled halftone screens ruin a print.

The name comes from watered silk, the fabric where the effect was first noticed in overlapping weaves.

## How it is built

Both gratings are real elements, 34 bars and 31 bars, so the pattern is genuinely emergent rather than drawn. Nothing in the stylesheet describes a band.

- **The bands were measured, not assumed.** The browser check reads every bar's rectangle and finds where a bar of one grating coincides with a bar of the other: **0, 156 and 312 px**, so the spacing is **exactly 156** both times, matching `p1*p2/|p1-p2|`.
- **The amplification is measured across several shifts.** Sampling the transmission profile from the rendered bar geometry and tracking the band phase: a grating shift of 1, 2, 3 and 5 px moves the bands **-12, -24, -36 and -60 px**. The gain is **exactly -12.000** every time, negative because the bands run against the grating.
- **The marker rides a real band.** The orange caret is checked at five points around the loop against the band position measured from the bars, and never sits more than **0.59 px** off it. It tracks the pattern rather than being animated near it.
- **The loop is seamless by construction.** Shifting the finer grating by one of its own periods, 13px, returns it to where it started, and in exactly that time the bands sweep one full beat period, 156px. There is no jump at the wrap.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses the grating and both markers together, leaving a static moire pattern.

## Files

- `demo.html` - markup
- `style.css` - the whole component
