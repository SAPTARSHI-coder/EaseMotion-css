# truncate-shadow-advk

A Sass mixin that fades a scrollable container's trailing edge into its
background colour, signalling "more content" without a hard cut, and fades
out once scrolled to the end.

## Usage

```scss
@use 'truncate-shadow' as *;

.chip-row {
  @include truncate-shadow($bg: #f8f9fb, $side: right);
  overflow-x: auto;
  white-space: nowrap;
}
```

```js
// Toggle the end class from a scroll listener:
el.classList.toggle(
  'truncate-shadow-end',
  el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
);
```

| Param | Default | Description |
|---|---|---|
| `$bg` | `#fff` | Container's actual background colour — the gradient fades toward this, not toward transparent. |
| `$width` | `2.5rem` | Fade width. |
| `$side` | `right` | Which edge fades (`right` or `left`). |

## Why is it useful?

A horizontally-scrollable row of chips, tabs, or cards with no visual
affordance looks like a dead end at the container's right edge — nothing
communicates that scrolling reveals more content. A hard `overflow: hidden`
clip cuts content mid-element with no warning either. Fading the last
`$width` of the container into `$bg` gives a soft visual cue that content
continues, and toggling `.truncate-shadow-end` off once scroll position
reaches the end (via a small JS scroll listener) removes the fade so it
doesn't imply more content when there isn't any.

Using `linear-gradient(..., rgba(red($bg), green($bg), blue($bg), 0), $bg)`
rather than a plain `transparent` start keeps the gradient's hue consistent
with `$bg` all the way through the fade — `transparent` alone can shift
toward a different colour mid-fade in some rendering engines when the two
endpoints are otherwise unrelated colours.
