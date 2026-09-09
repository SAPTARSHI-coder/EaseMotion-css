# Animated Badge Ribbon

A diagonal corner ribbon (e.g. "New", "Sale") that pops into place with a
springy scale-in animation when the card first renders.

**Level:** Beginner

## Usage

Add a `<span class="ribbon">Label</span>` as the first child inside any
`position: relative` card with `overflow: hidden`.

## Accessibility

- The ribbon's text ("New") is real text content, readable by screen
  readers as part of the card, not a background-image label.
- The accompanying product image placeholder is `aria-hidden="true"` since
  it's a decorative emoji stand-in in this demo, not meaningful content —
  a real product photo should instead carry descriptive `alt` text.
- `prefers-reduced-motion` removes the pop-in animation; the ribbon still
  renders in its final rotated position immediately.

## Notes

- The ribbon is rotated 45° and positioned to overhang the card's edge
  slightly (`right: -32px`), a common corner-ribbon layout technique;
  `overflow: hidden` on the card clips the overhang cleanly.
- Animation runs once on render (`both` fill mode holds the start/end
  states outside the animation's active duration) rather than looping.