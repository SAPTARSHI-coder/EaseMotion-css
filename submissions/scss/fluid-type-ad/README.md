# Fluid Type function

> Issue: [#63555](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63555)

Generates `clamp()` type scales that hit their bounds at exactly the viewport widths you specify.

## Functions

### `fluid-type($min-size, $max-size, $min-vw, $max-vw)`

```scss
.title { font-size: fluid-type(1.5rem, 2.5rem, 400px, 1200px); }
// → clamp(1.5rem, 1rem + 2vw, 2.5rem)
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$min-size` | `Number` | — | Size at and below `$min-vw`. px or rem. |
| `$max-size` | `Number` | — | Size at and above `$max-vw`. |
| `$min-vw` | `Number` | `400px` | Where scaling starts. |
| `$max-vw` | `Number` | `1200px` | Where scaling stops. |

### `fluid-space(...)`

Same arithmetic, named for spacing tokens.

### `fluid-type-scale($steps, $prefix, $min-vw, $max-vw)`

```scss
@include fluid-type-scale((sm: (0.875rem, 1rem), lg: (1.5rem, 2.5rem)));
// → :root { --fs-sm: clamp(...); --fs-lg: clamp(...); }
```

## Configuration

```scss
@use "fluid-type" with ($fluid-type-root: 16px);
```

## Why it fits EaseMotion

**The arithmetic is the point.** A clamp built by eye — `clamp(1.5rem, 4vw, 2.5rem)` — hits its bounds at arbitrary viewport widths that have nothing to do with the breakpoints the design specified. This solves for the slope of the line through `(min-vw, min-size)` and `(max-vw, max-size)`, so the type reaches exactly `$max` at exactly `$max-vw`.

You can verify it by hand: `fluid-type(1.5rem, 2.5rem, 400px, 1200px)` yields `clamp(1.5rem, 1rem + 2vw, 2.5rem)`. At a 400px viewport (25rem), `1rem + 2vw` = `1rem + 0.5rem` = **1.5rem**. At 1200px (75rem), `1rem + 1.5rem` = **2.5rem**.

**The `rem` term is not optional.** A pure `vw` preferred value ignores the user's browser font-size setting entirely, so text can no longer be resized to 200% — a WCAG 1.4.4 failure. Keeping a `rem` intercept in the expression preserves user zoom.

Inverted `$min-size` / `$max-size` raises a build error rather than emitting a valid-looking clamp that makes text **shrink as the viewport grows**. That is almost always transposed arguments, and it is the kind of bug that survives review because the CSS is syntactically fine.
