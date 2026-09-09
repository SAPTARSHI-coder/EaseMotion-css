# Hover Card Flip Preview

A card that flips to reveal a detail preview on hover or keyboard focus,
similar in mechanism to the pricing flip card but styled for a
person/profile preview use case.

**Level:** Intermediate

## Usage

`.preview-card` is a focusable `perspective` container; `.preview-inner`
rotates on `:hover`/`:focus-visible` to reveal `.preview-back`.

## Accessibility

- Card is focusable (`tabindex="0"`) and the flip triggers on
  `:focus-visible` as well as `:hover`, so keyboard users can preview the
  back content without needing a pointer.
- `:focus-visible` also shows a distinct box-shadow ring around the whole
  card, independent of the flip state itself.
- Both faces' text content exists in the DOM at all times (not injected on
  flip), so it's available to assistive tech and text search regardless of
  visual flip state.
- `prefers-reduced-motion` removes the rotate transition; hover/focus still
  reveals the back face, just as an instant switch.

## Notes

- This is a hover/focus preview effect — there's no click-to-pin/toggle
  behavior in this demo, so the back content is only visible while
  hovering or focused. If a persistent (click-to-flip-and-stay) variant is
  needed, see the toggle-based approach in `ease-card-flip-pricing-sap`
  instead, which uses a click handler rather than pure `:hover`/`:focus-visible`.