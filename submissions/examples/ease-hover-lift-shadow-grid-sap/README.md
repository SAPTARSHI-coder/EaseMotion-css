# Hover Lift Shadow Grid

A grid of link cards that lift up with a growing, softer shadow on hover or
keyboard focus, a common "clickable card" affordance.

**Level:** Beginner

## Usage

Apply `.lift-card` to any anchor or block-level clickable card inside
`.lift-grid`. No JS needed — the lift is a pure CSS `transform` + `box-shadow`
transition on `:hover`/`:focus-visible`.

## Accessibility

- Cards are real `<a>` elements, keyboard-focusable by default, and the lift
  effect triggers on `:focus-visible` as well as `:hover` — not mouse-only.
- `:focus-visible` also adds a visible outline, separate from the shadow lift.
- `prefers-reduced-motion` removes the `translateY` lift transform entirely
  (kept as `none`) while still allowing the shadow to change, so there's
  still a hover/focus cue without the motion.

## Notes

- Both hover and focus-visible share the same lifted state, so keyboard
  users get equivalent visual feedback to mouse users.
- Grid uses a simple 2-column `grid-template-columns`; adjust column count
  for more cards.