# Hover Underline Grow

Nav links whose underline grows in from the left edge on hover/focus,
instead of a plain always-on or instant-toggle underline.

**Level:** Beginner

## Usage

Apply `.grow-link` to any inline link. The underline is a `::after`
pseudo-element scaled via `transform: scaleX()` from `transform-origin: left`.

## Accessibility

- Effect triggers on `:focus-visible` as well as `:hover`, so keyboard users
  tabbing through the nav see the same growing-underline feedback.
- `:focus-visible` also adds a separate visible outline, so focus isn't
  indicated by the underline animation alone.
- `prefers-reduced-motion` removes the transition; the underline still
  appears on hover/focus, just instantly instead of growing.

## Notes

- Uses `transform: scaleX()` (not `width`) for the grow animation, which is
  compositor-friendly and avoids layout recalculation on every frame.
- `transform-origin: left` ensures the line grows rightward from the start
  of the word, matching reading direction for LTR text — mirror to `right`
  for RTL contexts if needed.