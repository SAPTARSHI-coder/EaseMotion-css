# Animated ::marker Staggered Pulse List

## What does this do?

Three list variants where each item's bullet pulses independently using a staggered `animation-delay`. Each list item sets `--i` inline; the CSS multiplies it against a fixed delay step so items beat sequentially rather than in unison.

## How is it used?

Set `--i` on each `<li>` to control its phase offset:

```html
<ul class="pulse-list dot-list">
  <li style="--i:0">First item</li>
  <li style="--i:1">Second item</li>
  <li style="--i:2">Third item</li>
</ul>
```

The CSS reads it as:

```css
animation-delay: calc(var(--i, 0) * 0.22s);
```

## Variants

| Class | Marker type | Core technique |
|---|---|---|
| `dot-list` | Round dot | `box-shadow` ripple expansion |
| `hue-list` | Colour disc | `@property --pulse-hue` angle interpolation |
| `tick-list` | Dash tick | `scaleX` stretch with `transform-origin: left` |

## Why `::before` instead of `::marker`?

CSS `::marker` pseudo-element animation is inconsistently implemented across browsers — many properties (including `transform`) are not animatable on `::marker`. Using `::before` with `position: absolute` gives full animation support while achieving the same visual role.
