# Animated Input Underline

Text inputs with a floating label (rising and shrinking on focus/filled
state) and an underline that grows from the center outward on focus.

**Level:** Intermediate

## Usage

Pure CSS, no JS. Requires `placeholder=" "` (a single space, not empty) on
each input so `:not(:placeholder-shown)` can detect a filled state, paired
with a real `<label for>` sibling.

## Accessibility

- Uses real `<label for="...">` elements associated with their inputs, so
  the floating-label visual doesn't compromise the accessible name — screen
  readers get the label regardless of its animated position.
- The underline grow and label float both trigger on genuine `:focus`, so
  keyboard Tab navigation gets the same visual feedback as a mouse click.
- `prefers-reduced-motion` removes both transitions; the floated/filled
  label position and underline visibility still apply correctly, just instantly.

## Notes

- The `placeholder=" "` trick (a non-empty space) is required for the
  `:not(:placeholder-shown)` CSS selector to correctly detect "has a value"
  without JS — an empty `placeholder=""` does not trigger this correctly in
  all browsers.
- Underline uses `transform: scaleX()` from `transform-origin: center` so it
  grows outward symmetrically from the middle, rather than left-to-right.