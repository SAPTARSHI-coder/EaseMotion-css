# Color Ramp function

> Issue: [#63800](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63800)

Generates a tint/shade scale from a single seed colour, plus a readable-foreground picker.

## Functions

### `color-ramp($seed)` → `Map`

Returns `50 … 900` keyed to colours, with the seed at step `500`.

### `ramp-step($seed, $step)` → `Color`

One step in isolation. Unknown steps raise a build error.

### `ramp-on($background, $light, $dark)` → `Color`

Picks a readable foreground for a given background.

## Mixins

### `ramp-vars($name, $seed, $selector)`

```scss
@include ramp-vars("brand", #38bdf8);
// → :root { --brand-50: …; --brand-500: #38bdf8; --brand-900: …; }
```

### `ramp-vars-multi($palette, $selector)`

```scss
@include ramp-vars-multi((brand: #38bdf8, danger: #f87171, success: #34d399));
```

## Configuration

```scss
@use "color-ramp" with ($color-ramp-steps: (100, 300, 500, 700, 900), $color-ramp-base: 500);
```

## Why it fits EaseMotion

**This is not `lighten()` in a loop, and that matters.** `lighten()` adjusts HSL lightness, and equal HSL steps are not equal perceptual steps — a ramp built that way bunches up in the yellows and stretches out in the blues, so the 400 and 500 of a blue look nearly identical while the same steps of a yellow look miles apart. `color.scale()` scales *proportionally toward the channel limits* instead of by fixed increments, which keeps the steps far more even. (`lighten()` and `darken()` are also deprecated in Dart Sass.)

**`ramp-on` uses WCAG relative luminance, not lightness**, and there is a clean demonstration of why. Pure blue `#0000ff` and pure yellow `#ffff00` **both** report an HSL lightness of exactly **50%** — so any naive lightness threshold returns the same foreground for both, and is necessarily wrong for one of them. Weighting the channels perceptually (green contributes 0.7152, blue only 0.0722) correctly yields white on blue and near-black on yellow.

The base step is configurable, so a seed that is genuinely a light brand colour can sit at `300` rather than being forced to the middle of the scale and generating shades nobody wants.
