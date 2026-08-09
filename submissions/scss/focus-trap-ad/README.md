# Focus Ring mixin

> Issue: [#63801](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63801)

Dual-stroke focus rings that stay visible on any background, without per-context colour overrides.

## Mixins

### `focus-ring($inner, $outer, $width, $offset)`

```scss
.btn { @include focus-ring; }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$inner` | `Color` | `#0b1120` | Inner (dark) stroke. |
| `$outer` | `Color` | `#ffffff` | Outer (light) stroke. |
| `$width` | `Number` | `2px` | Stroke width. |
| `$offset` | `Number` | `2px` | Gap between element and ring. |

### `focus-ring-outline($color, $width, $offset)`

Outline-based variant — use where an ancestor's `overflow: hidden` would clip a box-shadow.

### `focus-ring-inset($inner, $outer, $width)`

Inset ring for elements flush against a container edge — table rows, list items, tabs.

### `focus-within-ring(...)`

Ring on a container when focus lands inside it — for input groups and composite widgets.

### `focus-ring-utilities($prefix)`

Emits `.focus-ad`, `.focus-ad-inset`, `.focus-ad-outline`.

## Why it fits EaseMotion

**A single-colour ring is invisible on some surface, always.** A blue ring on a blue-tinted card, a white ring on a light modal — the indicator is technically present and practically undetectable. That is a WCAG 2.4.7 failure, and no automated checker catches it because the CSS is there. A dual stroke means whichever background sits behind the ring, one of the two colours contrasts.

**`:focus-visible`, not `:focus`.** A ring appearing on every mouse click is precisely why developers reach for `outline: none` in the first place — and that is how sites end up with no indicator at all. Scoping to `:focus-visible` keeps the ring for keyboard users and out of the way for pointer users, so nobody is tempted to remove it.

`outline: none` is only ever set **inside** the `:focus-visible` block, alongside the replacement ring. Setting it at the base would leave the element with no indicator in any context where the box-shadow does not render.

**`forced-colors` needs the outline back.** High-contrast mode discards `box-shadow` entirely, so a box-shadow ring simply vanishes for the users who most need it. Every variant restores a real `outline` with the system `Highlight` colour in that mode.

The default variant uses `box-shadow` rather than `outline` because it follows `border-radius` exactly on every engine — a square ring around a pill button reads as a rendering bug. The outline variant exists for the case where that trade-off flips: box-shadow is clipped by an ancestor's `overflow: hidden`, and outline is not.
