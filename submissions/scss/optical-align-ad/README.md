# Optical Align mixin

> Issue: [#63798](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63798)

Compensates for the gap between geometric and optical centring in icons and text.

## Mixins

### `optical-align($shape, $size)`

```scss
.play-icon { @include optical-align("triangle-right", 1em); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$shape` | `String` | — | Key from `$optical-shapes`. Unknown keys raise a build error listing valid ones. |
| `$size` | `Number` | `1em` | Size the offset is scaled against. |

Shapes: `triangle-right/left/up/down` · `chevron-right/left` · `circle` · `square` · `diamond` · `plus`

### `optical-text-align($ratio)`

Lifts uppercase or small-caps text that sits low in its line box.

### `optical-icon-button($shape, $size, $icon-size)`

A complete centred icon button — the icon is offset, the button is not.

### `optical-inset($inline, $trim, $side)`

Trims padding on the icon side of a trailing-icon button.

### `optical-align-reset` / `register-optical-shape($name, $x, $y)`

## Why it fits EaseMotion

**These corrections are not subjective.** A play triangle centred by bounding box looks shifted left because its visual mass sits toward the point. Uppercase text sits low because the line box reserves descender space that uppercase glyphs never occupy. Both are consequences of how a bounding box relates to perceived centre of mass — which is why every design system ends up hand-nudging them, usually inconsistently.

Naming the offsets means they are applied the same way everywhere rather than re-derived per component, and a shape change is one keyword rather than a fresh round of eyeballing.

**The offset goes on the icon, not the button.** `optical-icon-button` translates the child while leaving the button geometrically placed. Offsetting the button itself would shift it relative to its neighbours — fixing the icon by breaking the row.

`optical-align-reset` exists for runtime shape swaps: a triangle replaced by a circle would otherwise keep the triangle's shift and look wrong in the opposite direction.

Offsets are fractions of `$size` rather than fixed pixels, so an icon that scales keeps its correction proportional — a 4% shift stays a 4% shift at any size.
