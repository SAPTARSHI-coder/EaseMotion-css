# keyframe-factory-advk

SCSS mixins that generate directional entrance and exit keyframes from a single
definition.

## Mixins

| Mixin | Emits |
|---|---|
| `entrance-set($prefix, $distance, $fade)` | `<prefix>-in-up/-down/-left/-right` |
| `exit-set($prefix, $distance, $fade)` | `<prefix>-out-up/-down/-left/-right` |
| `zoom-set($prefix, $from, $overshoot)` | `<prefix>-in` and `<prefix>-out` |
| `entrance-classes($prefix, $class, $duration)` | Utility classes plus a shared reduced-motion fade |

## Usage

```scss
@use "keyframe-factory-advk" as k;

@include k.entrance-set("ease-kf-slide", 1.5rem);
@include k.exit-set("ease-kf-slide", 1.5rem);
@include k.zoom-set("ease-kf-zoom", 0.85, $overshoot: 1.03);
@include k.entrance-classes("ease-kf-slide", "ease-slide", 420ms);
```

Override the direction table before use:

```scss
@use "keyframe-factory-advk" as k with (
  $directions: ("up": (0, 1), "down": (0, -1))
);
```

## Why it fits EaseMotion CSS

`core/animations.css` hand-writes each `@keyframes` block. That is fine for a
handful, but a four-direction slide set with matching exits is eight nearly
identical blocks where the only difference is the sign of one number — and every
new distance variant multiplies them again. Sign errors in that kind of
repetition are easy to make and hard to spot in review.

Generating from a direction vector table makes the relationship explicit: an exit
is the entrance with the vector negated, expressed once. Adding a diagonal
direction means one entry in `$directions`, not four new blocks.

`entrance-classes` deliberately emits a shared reduced-motion fade rather than
repeating a fallback per direction. Under `prefers-reduced-motion` all four
directions collapse to the same plain fade — travel is exactly what should be
removed — so one keyframe block serves the whole set and the generated CSS stays
small.
