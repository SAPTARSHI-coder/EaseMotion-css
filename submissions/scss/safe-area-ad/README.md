# Safe Area mixin

> Issue: [#63559](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63559)

Applies `env(safe-area-inset-*)` padding so fixed headers and bottom bars are not obscured by the notch, rounded display corners, or the home indicator.

## Prerequisite

**The insets are zero unless the document opts in.** Add `viewport-fit=cover` to the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

Without it every inset resolves to `0px` and this mixin appears to do nothing.

## Mixins

### `safe-area($sides, $extra)`

```scss
.bottom-bar { @include safe-area(bottom, $extra: 0.75rem); }
.page       { @include safe-area(all); }
.rail       { @include safe-area((left, right)); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$sides` | `String \| List` | `all` | Side(s) to pad. Unknown sides raise a build error. |
| `$extra` | `Number` | `0px` | Padding added on top of the inset. |

### `safe-area-margin($sides, $extra)`

Same treatment applied to margin.

### `safe-area-height($base)`

Height for a fixed bottom bar, including the home-indicator inset.

### `safe-area-sticky($position, $extra, $z)`

A complete fixed header or footer, correctly inset on three sides.

```scss
.app-footer { @include safe-area-sticky(bottom, $extra: 0.5rem); }
```

### `safe-area-vars($prefix)`

Exposes the insets as `--sa-top` / `--sa-right` / `--sa-bottom` / `--sa-left`.

## Why it fits EaseMotion

**`env()` fails destructively without support.** An unsupported `env()` makes the *entire declaration* invalid — so `padding-bottom: env(safe-area-inset-bottom)` on an older browser yields no padding at all, not a sensible default. The two-argument form `env(safe-area-inset-bottom, 0px)` carries its fallback inside the function, which is why it is used everywhere here. A plain declaration is also emitted first, for engines with no `env()` support whatsoever.

**`safe-area-height` exists for a specific bug.** A fixed bottom bar sized without the inset places its touch targets underneath the home indicator, where iOS intercepts the gesture — the buttons render fine and simply do not respond to taps. Adding the inset to both height and padding moves the targets above it.

`safe-area-sticky` applies the inset to three sides only, never the opposite edge, since padding the top of a bottom-pinned bar just adds dead space.
