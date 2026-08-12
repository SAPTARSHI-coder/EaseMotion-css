# Grid Autofit mixin

> Issue: [#63561](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63561)

Responsive grids without per-breakpoint column counts, with guards for both viewport extremes.

## Mixins

### `grid-autofit($min, $gap, $max-cols, $fill)`

```scss
.cards { @include grid-autofit($min: 240px, $max-cols: 4); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$min` | `Number` | `240px` | Minimum track width. |
| `$gap` | `Number` | `1rem` | Gap between tracks. |
| `$max-cols` | `Number \| null` | `null` | Cap on column count. Must be positive. |
| `$fill` | `Bool` | `false` | Use `auto-fill` instead of `auto-fit`. |

### `grid-autofit-dense($min, $gap, $max-cols)`

Dense packing for mixed-span grids. **Note the accessibility cost** — dense packing reorders items visually without changing DOM order, so tab order and reading order diverge.

### `grid-span($cols, $rows)`

Span multiple tracks, clamped so an item cannot overflow a single-column grid.

### `grid-autofit-rows($min-height)`

Equal-height rows, for card grids where ragged bottoms read as broken.

## Configuration

```scss
@use "grid-autofit" with ($grid-autofit-min: 280px);
```

## Why it fits EaseMotion

Plain `repeat(auto-fit, minmax(240px, 1fr))` is the usual answer, and it fails at both extremes.

**Wide viewports.** `auto-fit` collapses empty tracks and stretches the survivors — three cards on a 2560px display become three 800px-wide cards. `$max-cols` caps this by bounding the *container*: `n` columns at `$min` plus `n - 1` gaps is the widest the grid should ever be. Capping the container rather than the track keeps the columns fluid below that width.

**Narrow viewports.** A 240px minimum plus gaps overflows a 320px phone and produces horizontal scroll. `minmax(min(240px, 100%), 1fr)` clamps the track floor against the available width, so the column shrinks instead of overflowing. This is the more important of the two guards — it is what makes the mixin safe to use without also hand-writing a mobile media query.

`grid-span` carries a `@supports` fallback because an item spanning two columns on a single-column grid overflows its container. Clamping the span to the real track count avoids that.
