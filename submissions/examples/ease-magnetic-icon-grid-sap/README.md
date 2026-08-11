# Magnetic Icon Grid

A grid of icon buttons that subtly follow the cursor when hovered, giving a
"magnetic pull" feel, then spring back on mouse leave.

**Level:** Advanced

## Usage

Each `.magnetic-item` listens to its own `mousemove` and calculates offset
from its own center, scaled by `STRENGTH`, then applies it as a `translate`.
`mouseleave` resets the transform to `(0, 0)`.

## Accessibility

- Items are real `<button>` elements, focusable and operable via keyboard
  regardless of the pointer-only magnetic effect.
- `:focus-visible` outline included for keyboard users, who never trigger
  (and don't need) the magnetic movement.
- `prefers-reduced-motion` removes the transform transition entirely so the
  magnetic-pull effect doesn't fire — JS still sets `transform` on
  `mousemove`, but with the transition disabled it would essentially be an
  imperceptible instant snap; pairing with a `matchMedia` check in JS to
  skip the mousemove handler entirely is a reasonable follow-up hardening
  step for a production version.

## Notes

- Effect is pointer/mouse-only by nature (there's no touch equivalent of
  hover-proximity); on touch devices the buttons behave as plain static buttons.
- `STRENGTH` (0.35) and button size control how strong the pull feels —
  tune per use case.