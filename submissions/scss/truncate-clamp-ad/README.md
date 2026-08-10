# Truncate Clamp mixin

> Issue: [#61722](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61722)

Multi-line text truncation with a real fallback, an optional gradient fade, and a responsive variant.

## What it does

Clamps text to a line count using `-webkit-line-clamp`, backed by a `max-height` ceiling derived from line-height so unsupported engines still bound the text instead of letting it overflow.

## Mixins

### `truncate-clamp($lines, $line-height, $fade)`

```scss
.card__copy {
    @include truncate-clamp($lines: 3);
}

.card__title {
    @include truncate-clamp($lines: 1);   // single-line ellipsis path
}

.card__copy--faded {
    @include truncate-clamp($lines: 2, $fade: #101a2c);
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$lines` | `Number` | `3` | Lines to keep. `1` switches to the single-line ellipsis path. Must be positive. |
| `$line-height` | `Number` | `1.5` | **Unitless.** Used to compute the `max-height` fallback; errors if a unit is supplied. |
| `$fade` | `Color` | `transparent` | Set to your surface colour to enable the gradient fade. |

### `truncate-clamp-responsive($map, $line-height)`

```scss
.card__copy {
    @include truncate-clamp-responsive((
        default: 2,
        640px: 3,
        1024px: 4
    ));
}
```

Emits the full rule set once for `default`, then only the line count and ceiling at each breakpoint — re-declaring the whole mixin per breakpoint would re-emit every fallback rule.

## Configuration

```scss
@use "truncate-clamp" with ($truncate-clamp-line-height: 1.6);
```

## Why it fits EaseMotion

**`-webkit-line-clamp` has a hard failure mode.** Where it is unsupported the declaration is ignored entirely and the text simply overflows its container, breaking the surrounding layout. Pairing it with a `max-height` ceiling means the text is bounded either way.

The ordering is deliberate: `max-height` is declared *first*, then released inside `@supports (-webkit-line-clamp: 1)`. Where the real clamp works it does a better job — a fixed `max-height` can slice a descender on the final line — so the ceiling is only kept as the fallback path.

The gradient fade is scoped the same way. It exists to make the hard `max-height` cut read as intentional; with a working clamp the ellipsis already signals truncation, so the fade is switched off rather than left dimming perfectly readable text.

`$line-height` is required to be unitless and errors otherwise, because the `em`-based ceiling arithmetic is only correct for a unitless multiplier — silently accepting `24px` would produce a `36em` max-height and a wildly wrong result.

Worth knowing: the clamp path requires `display: -webkit-box`, which resets the element's formatting context. If the clamped element also needs to be flex or grid, wrap the text in an inner element and clamp that instead.
