# clamp-lines-advk

A Sass mixin for multi-line text truncation with a real fallback for
engines that don't support `-webkit-line-clamp`.

## Usage

```scss
@use 'clamp-lines' as *;

.card-summary {
  @include clamp-lines(3);
}

.card-summary--tight {
  @include clamp-lines(2, 1.35);
}
```

| Param | Default | Description |
|---|---|---|
| `$lines` | `3` | Number of lines to show before truncating. |
| `$line-height` | `1.5` | Unitless line-height, also used to size the fallback box. |

## Why is it useful?

Most line-clamp snippets are just the three `-webkit-line-clamp`
declarations, which do nothing in an engine that doesn't recognize them —
the text overflows its container uncapped instead of truncating. This mixin
wraps the vendor declarations in `@supports` and, outside that block, sets a
`max-height` computed from `$lines * $line-height` with `overflow: hidden`,
so unsupported engines still get a hard-capped box rather than a layout
break. Text isn't ellipsized in the fallback path, but it can no longer spill
past the card.

Using `math.div()` instead of `/` keeps the module deprecation-free under
Dart Sass, where `/` as division is removed.
