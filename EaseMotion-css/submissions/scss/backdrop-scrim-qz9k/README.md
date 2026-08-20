# backdrop-scrim-qz9k

Sass mixins for modal/drawer backdrop scrims: a flat semi-transparent fill,
and a gradient variant that darkens progressively toward one edge.

## Usage

```scss
@use 'backdrop-scrim' as *;

.modal-overlay {
  @include scrim-flat;
}

.bottom-sheet-overlay {
  @include scrim-gradient($direction: to top, $from-opacity: 0.1, $to-opacity: 0.65);
}
```

| Param | Default | Description |
|---|---|---|
| `$color` | `rgba(15, 18, 24, 0.5)` (flat) / `#0f1218` (gradient) | Scrim colour. |
| `$from-opacity` / `$to-opacity` | `0.15` / `0.6` | Gradient endpoints (gradient only). |
| `$direction` | `to bottom` | Gradient direction (gradient only). |

## Why is it useful?

A flat semi-transparent scrim behind a modal darkens the entire page
uniformly, which works fine for a centered dialog but reads poorly behind
a bottom sheet or a side drawer where the scrim's job is really to draw
focus toward one edge of the screen while dimming the rest — a uniform
darkness doesn't create that gradient of emphasis. `scrim-gradient` instead
fades from a lighter opacity to a darker one across the screen, so content
near the drawer/sheet (where the scrim is darkest) recedes more than
content further away, which reads as a more deliberate visual hierarchy
than a flat dim.

Both mixins derive the gradient's two rgba stops from a single `$color`
input via `color.channel()` (Dart Sass's modern replacement for the
deprecated global `red()`/`green()`/`blue()` functions) rather than
requiring two separately-specified rgba colours — changing the base colour
only requires updating one value, and the two opacity stops stay correctly
tied to the same hue.

## Choosing a direction

`$direction` accepts any valid CSS gradient direction, so the darkening
edge can be matched to wherever the sheet/drawer actually sits:

```scss
.right-drawer-overlay {
  @include scrim-gradient($direction: to left);
}
```

`to left` darkens the right edge of the screen, appropriate for a drawer
sliding in from the right — the scrim's darkest point lines up with where
the drawer itself will appear.
