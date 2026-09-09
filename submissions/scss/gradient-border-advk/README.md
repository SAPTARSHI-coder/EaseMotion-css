# gradient-border-advk

A Sass mixin for gradient borders on rounded elements, using a
padding-box/border-box layered background instead of a `::before` mask
pseudo-element.

## Usage

```scss
@use 'gradient-border' as *;

.highlight-card {
  @include gradient-border(
    $gradient: linear-gradient(135deg, #f59e0b, #ef4444),
    $width: 3px,
    $radius: 1rem
  );
}
```

| Param | Default | Description |
|---|---|---|
| `$gradient` | `linear-gradient(90deg, #4c6ef5, #a855f7)` | Border gradient. |
| `$width` | `2px` | Border thickness. |
| `$radius` | `0.75rem` | Corner radius, applied to both the border and the inner fill. |
| `$bg` | `#fff` | Fill colour behind the padding box (must match the element's real background). |

## Why is it useful?

The most common gradient-border recipe wraps the element in a `::before`
pseudo-element sized slightly larger, filled with the gradient, and masked
to a rounded rectangle with a hole cut out — which works, but consumes the
element's one available pseudo-element and needs careful `inset`/`padding`
arithmetic to avoid a visible seam. This mixin instead paints two
backgrounds on the element itself: a solid fill clipped to the
`padding-box`, and the gradient clipped to the full `border-box` showing
through only where the (now-transparent) border is. That leaves `::before`
and `::after` free for other use on the same element, e.g. an icon or badge.

The one constraint is `$bg` must match the element's actual background —
if the card sits on a non-white surface, `$bg` needs to match that surface
color or the padding-box fill will show as a visible mismatched rectangle.
