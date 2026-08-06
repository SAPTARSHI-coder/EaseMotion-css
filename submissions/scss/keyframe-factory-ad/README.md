# Keyframe Factory mixin

> Issue: [#63557](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63557)

Generates matched directional entrance and exit keyframes from a single definition, so a four-direction set stays symmetric.

## Mixins

### `keyframe-factory($name, $distance, $directions, $fade)`

```scss
@include keyframe-factory("slide-in-ad", $distance: 24px);
// → @keyframes slide-in-ad-from-left  { … translate(-24px, 0) → translate(0, 0) }
// → @keyframes slide-in-ad-from-right { … translate( 24px, 0) → translate(0, 0) }
// → plus -from-top and -from-bottom
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$name` | `String` | — | Base keyframe name. |
| `$distance` | `Number` | `24px` | Travel distance. Errors if not a number. |
| `$directions` | `List` | all four | Which directions to emit. |
| `$fade` | `Bool` | `true` | Include an opacity ramp. |

### `keyframe-factory-exit($name, ...)`

Emits `<name>-to-<direction>` keyframes travelling outward.

### `keyframe-factory-zoom($name, $scale, $fade)`

Emits `<name>-zoom-in` / `<name>-zoom-out`, sharing the naming convention so zoom and slide compose in one utility set.

### `keyframe-factory-utilities($name, $prefix, $duration, $easing, $directions)`

Emits utility classes bound to the generated keyframes, with reduced-motion handling.

## Configuration

```scss
@use "keyframe-factory" with ($keyframe-factory-distance: 32px);
```

## Why it fits EaseMotion

**Hand-writing four directions means four chances to get a sign wrong.** The classic result is a `-from-left` and `-from-right` that travel different distances, or a `-from-top` that animates upward. Each looks fine in isolation and only reads as broken when two run side by side. Generating from one distance guarantees symmetry, and changing the travel becomes a one-line edit.

The direction map encodes the semantics explicitly: `from-left` starts *left of* its resting position, so it is a negative X. That is worth stating, because it is exactly the convention people invert.

**Exit keyframes are generated separately rather than reusing the entrance in reverse.** That shortcut is common and wrong: `animation-direction: reverse` on `slide-in-from-left` produces something that exits *rightward* while being named for left — the animation visually contradicts its own name. Here `-to-left` genuinely travels left.

The utility classes apply `animation-fill-mode: both`, because entrance animations carry opacity — without it, an element with a delay flashes at full opacity before its animation starts. That is also why `prefers-reduced-motion` **shortens** the duration to 1ms rather than removing the animation: removing it would leave `both` fill holding every element at `opacity: 0`.
