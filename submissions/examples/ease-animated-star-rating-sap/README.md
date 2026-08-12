# Animated Star Rating

A 5-star rating picker built from native radio inputs (reverse-ordered in
the DOM to allow the CSS sibling-highlight trick), with a bounce on the
hovered star.

**Level:** Intermediate

## Usage

Pure CSS, no JS. Stars are laid out `row-reverse` with radio inputs in
5→1 DOM order so `~` sibling selectors can highlight "this star and all
stars before it in visual order" on both `:checked` and `:hover`.

## Accessibility

- Built on real `<input type="radio">` elements grouped in a
  `<fieldset><legend>`, so the whole control has an accessible group name
  ("Rate your experience") and each star has its own `aria-label` ("3
  stars") — keyboard users get full native radio-group behavior (Arrow
  keys move selection, Tab enters/exits the group).
- `:focus-visible` on each hidden input drives a visible outline on its
  associated label.
- `prefers-reduced-motion` removes the hover bounce (`transform`), keeping
  only the color-fill transition for feedback.

## Notes

- The `row-reverse` + reverse-DOM-order + `~` sibling selector combination
  is the standard technique for a "select N of M, highlight N and
  everything before it" CSS-only star rating — no JS required for the
  core interaction.
- Each label carries its own descriptive `aria-label` (e.g. "4 stars")
  since the visual star glyph alone isn't accessible text.