# Theme Contrast function

> Issue: [#63558](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63558)

Computes WCAG 2.1 contrast ratios at build time and warns when a token pair falls below threshold.

## Functions

### `contrast-ratio($fg, $bg)` → `Number`

Returns the WCAG contrast ratio, 1–21.

```scss
contrast-ratio(#ffffff, #000000)  // → 21
contrast-ratio(#767676, #ffffff)  // → 4.54
```

### `meets-contrast($fg, $bg, $level)` → `Bool`

| `$level` | Threshold |
|---|---|
| `"AA"` (default) | 4.5 |
| `"AA-large"` | 3 |
| `"AAA"` | 7 |

### `contrast-safe($col, $on, $level, $label)` → `Color`

Returns the colour unchanged, emitting a build **warning** if it fails.

```scss
.muted { color: contrast-safe(#334155, $on: #0b1120, $label: "muted"); }
// WARNING: Contrast AA FAIL — muted: ratio 1.82:1.
```

### `pick-contrast($bg, $light, $dark)` → `Color`

Picks whichever candidate contrasts better — for text on a dynamic accent colour where neither light nor dark is always right.

### `contrast-audit($tokens, $on, $level)`

Audits a whole token map in one pass.

```scss
@include contrast-audit((muted: #64748b, body: #94a3b8), #0b1120);
```

## Configuration

```scss
@use "theme-contrast" with ($theme-contrast-aa: 4.5);
```

## Why it fits EaseMotion

**The value is timing.** Contrast problems are normally found in a manual audit, long after the tokens have spread through a codebase — at which point fixing one muted-grey value means re-checking every surface it appears on. Computing the ratio where the token is *defined* moves the finding to the moment the mistake is made.

The implementation follows WCAG 2.1 exactly. The sRGB linearisation threshold `0.03928` is the specified constant, not an approximation, and the luminance coefficients (`0.2126` / `0.7152` / `0.0722`) are the spec values. You can check it against the two reference points: white on black returns exactly `21`, and `#767676` on white returns `4.54` — the canonical minimum-passing grey.

**`contrast-safe` warns rather than errors, deliberately.** Contrast is a judgement call at the margins — disabled text, decorative dividers, and placeholder copy all legitimately sit below AA. Failing the build on those would push people to stop using the function entirely, which loses the checking everywhere else. A warning is visible in CI without being a hard block.

`$label` exists because the default message identifies a failure by hex pair, which is not obviously actionable in a large theme. Passing the token name makes the warning point at the thing you need to edit.
