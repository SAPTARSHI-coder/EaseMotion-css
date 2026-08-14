# hover-lift-qz9k

A Sass mixin for a card hover-lift effect, animating `transform` and
`box-shadow` together on matched timing rather than only one of the two.

## Usage

```scss
@use 'hover-lift' as *;

.product-card {
  @include hover-lift($distance: 8px, $duration: 200ms);
}
```

| Param | Default | Description |
|---|---|---|
| `$distance` | `6px` | How far the element lifts on hover. |
| `$duration` | `180ms` | Transition duration for both properties. |
| `$shadow-rest` | `0 1px 3px rgba(0,0,0,0.12)` | Shadow at rest. |
| `$shadow-hover` | `0 12px 24px rgba(0,0,0,0.18)` | Shadow on hover/focus. |

## Why is it useful?

A hover-lift effect is meant to read as "this card physically rose off the
surface," which depends on both halves of that illusion moving together: the
`translateY` (the rise) and the `box-shadow` growing softer and larger (the
increased distance from the surface casting a bigger, blurrier shadow). A
version that only transitions one of the two breaks the illusion in a
specific way — transform-only makes the card slide up with a shadow that
snaps instantly to its new size, which reads as the shadow being
disconnected from the card's actual position; shadow-only with no
transform makes the card feel flat, since nothing about its position
visually changed even though the shadow implies it should have. Animating
both on the same `$duration` keeps the rise and the shadow growth
perceptually locked together.

The `:focus-visible` branch applies the same lift as `:hover`, so the
effect (and whatever affordance it communicates — "this is interactive")
isn't exclusively a mouse-hover behaviour; a keyboard user tabbing to the
same card sees the identical visual feedback. The reduced-motion branch
keeps the shadow transition (a purely visual emphasis change) but drops the
`translateY`, since vertical motion is the specific effect
`prefers-reduced-motion` exists to let users opt out of.

## Why translateY instead of margin or top

```scss
transform: translateY(-$distance);
```

The lift is implemented as a `transform`, not by adjusting `margin-top` or
`top` (with `position: relative`), specifically because `transform` doesn't
trigger layout recalculation — the browser can animate it on the
compositor thread without recomputing the position of surrounding
elements on every frame. Animating `margin-top` instead would force a
layout reflow on each frame of the transition, which is both more
expensive and more likely to visibly stutter once a page has more than a
handful of these cards, especially in a grid where neighbouring cards
would also need their layout recalculated as one card's margin changes.

## Card grids and z-index

In a grid of cards using this mixin, a lifted card's larger box-shadow can
visually overlap its neighbours, which sometimes needs an explicit
`z-index` bump to render correctly above adjacent cards rather than
partially behind them:

```scss
.card-grid .card {
  @include hover-lift;
  position: relative;

  &:hover,
  &:focus-visible {
    z-index: 1;
  }
}
```

This isn't included in the mixin itself since it depends on the
surrounding grid's own stacking context — a card grid with generous gaps
between cards may never need it, while a tightly-packed grid usually does.

## Combining with existing card shadows

If the target element already has its own `box-shadow` for a different
purpose (a coloured border-shadow indicating status, for instance), passing
that as `$shadow-rest` keeps it as the resting state rather than this mixin
silently overwriting it — `@include hover-lift($shadow-rest: 0 0 0 2px
#4c6ef5)` preserves a status ring at rest while still applying the lift
shadow on hover.
