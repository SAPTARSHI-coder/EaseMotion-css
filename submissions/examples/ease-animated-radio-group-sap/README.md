# Animated Radio Group

A custom-styled radio group where the selected dot pops in with a spring
easing and the selected option gets a highlighted border + soft glow.

**Level:** Beginner

## Usage

Standard `<input type="radio">` markup with a visually-hidden input plus a
styled `.radio-dot` sibling. Uses `:has()` for selected-state card styling,
so no JS is required at all.

## Accessibility

- Real `<input type="radio">` elements are used (visually hidden, not
  `display: none`), so screen readers and keyboard nav work natively.
- `fieldset`/`legend` group the options with a proper accessible name.
- Focus is shown via `:focus-visible` on the option card, not just the
  hidden input, so keyboard focus is always visible.
- `prefers-reduced-motion` removes all transitions; selection still updates
  instantly.

## Notes

- Relies on `:has()` (widely supported in current evergreen browsers) to
  style the parent label based on its child input's checked state, avoiding
  any JS for visual state.
- No JavaScript included — this is a pure CSS component.