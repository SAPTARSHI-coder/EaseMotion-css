# fluid-scale-advk

A `clamp()` generator for fluid type and spacing, solved so the value is exact at
both viewport ends.

## Configuration

```scss
@use "fluid-scale-advk" as fs with (
  $min-vw: 22rem,
  $max-vw: 90rem
);
```

## API

- `fluid($min, $max, $from, $to)` — returns a `clamp()` hitting `$min` at `$from` and `$max` at `$to`.
- `@include fluid-type($min, $max, $min-lh, $max-lh)` — fluid size with a line-height that tightens as size grows.
- `@include type($step)` — pull from the built-in scale (`sm`, `base`, `lg`, `xl`, `2xl`, `3xl`).

## Usage

```scss
@use "fluid-scale-advk" as fs;

h1 { @include fs.type("3xl"); }
.hero { padding-block: fs.fluid(2rem, 6rem); }
.card { gap: fs.fluid(0.75rem, 1.5rem); }
```

## Why it fits EaseMotion CSS

Hand-written fluid type is usually `clamp(1.5rem, 4vw, 3rem)` with the middle
term guessed. The guess is almost never right at the boundaries: the value
typically reaches its maximum well before the large breakpoint, or sits below the
minimum on narrow screens until the clamp floor catches it — so the design is
correct only in the middle of the range.

Solving the linear equation gives an intercept and slope that pass exactly through
both intended points, so `type("3xl")` really is `2.1rem` at 320px and `3.75rem`
at 1280px. The maths is done once at build time and compiles to a plain `clamp()`
with no runtime cost.

This matters for an animation framework specifically because transforms are
frequently sized in the same units as type. A heading that scales unpredictably
makes any `translateY` tuned against it drift at unintended viewports, so a
predictable scale is a prerequisite for motion that stays proportionate.

The `-strip` helper exists because Sass cannot divide values with mismatched
units; normalising to plain numbers keeps the arithmetic valid whether the caller
passes `rem`, `px` or unitless values.
