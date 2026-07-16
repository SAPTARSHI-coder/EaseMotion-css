# @property OKLCH Hue-Cascade

## What does this do?
Five cards cascade through the full color spectrum using `oklch()`, with each card offset in the hue cycle via `animation-delay`. A second row does the same in `hsl()` to show the perceptual brightness difference.

## How is it used?
Set `--i` on each card to offset its phase in the animation:

```html
<div class="hue-card oklch-card" style="--i:0"></div>
<div class="hue-card oklch-card" style="--i:1"></div>
<div class="hue-card oklch-card" style="--i:2"></div>
```

## Why is it useful?
Two things are demonstrated simultaneously:

**`@property` for color animation**: without registering `--hue` as `syntax: "<angle>"`, CSS treats it as an opaque string. The browser cannot interpolate between `0deg` and `360deg` — the color either jumps or does not animate at all. `@property` fixes this by giving the engine the type information it needs for proper mod-360 interpolation.

**oklch perceptual uniformity**: in `hsl()`, yellow (`hsl(60deg)`) is visually much brighter than blue (`hsl(240deg)`) at the same lightness value. In `oklch()`, `L` is a perceptually uniform lightness channel — every hue at `oklch(65% 0.22 Hdeg)` appears equally bright. This makes rainbow effects, theme gradients, and color cascades more visually balanced without manual per-hue lightness tweaks.
