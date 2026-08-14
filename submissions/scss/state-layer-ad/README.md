# State Layer mixin

> Issue: [#63808](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63808)

Interaction overlays that work on any button variant without a per-variant colour.

## Mixins

### `state-layer($hover, $focus, $press, $radius, $color)`

```scss
.btn { @include state-layer; }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$hover` | `Number` | `0.08` | Hover overlay opacity. |
| `$focus` | `Number` | `0.12` | Focus-visible opacity. |
| `$press` | `Number` | `0.16` | Active opacity. |
| `$radius` | `Number` | `inherit` | Overlay radius. |
| `$color` | `Color` | `currentcolor` | Overlay colour. |

### `state-layer-tinted($tint, …)` — explicit tint for white-on-brand buttons
### `state-layer-inset(…)` — square overlay for list rows and table cells
### `state-layer-selected($opacity, $selector)` — persistent selected state

## Why it fits EaseMotion

**The problem with hand-written hover states is combinatorial.** A button with 5 variants across 2 themes needs 10 hover colours, 10 active colours and 10 focus colours — 30 values that must all stay in step when the palette changes. They drift, and a "subtle" hover on one variant ends up twice as strong as on another.

Overlaying `currentcolor` at a fixed opacity replaces all of it with one rule. Because `currentcolor` resolves to the button's own text colour, the overlay is automatically in-family for every variant and theme, and the *perceived* strength stays constant.

Three details do real work:

**`:focus-visible`, not `:focus`.** A mouse press leaves the focus state applied afterwards, so a plain `:focus` overlay stays lit after every click and reads as a stuck hover.

**`:active` is declared last.** An active button is also hovered, and the two rules have equal specificity — source order is what makes the press state actually win.

**`pointer-events: none` on the overlay.** Without it the pseudo-element sits above the button and swallows every click. This is the classic way this pattern is broken, and it fails silently: the button looks right and simply does nothing.

`state-layer-tinted` exists for the one case the pattern does not cover on its own — a white-on-brand button would overlay white, which lightens rather than deepens. Supplying an explicit tint fixes that case without abandoning the approach everywhere else.

`forced-colors: active` discards the overlay entirely, so a border substitutes — otherwise the only remaining feedback would be the focus ring, and hover would have none at all.
