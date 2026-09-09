# Animated Search Expand

A collapsed search icon button that expands into a full search input field
on click, sliding open via a `width` transition, then collapses on Escape
or outside click.

**Level:** Intermediate

## Usage

`.search-toggle` toggles `.is-open` on `.search-wrap`, which grows
`.search-form`'s width. Opening moves focus into the input; closing (via
Escape) returns focus to the toggle button.

## Accessibility

- Toggle button has `aria-expanded` kept in sync, and its `aria-label`
  switches between "Open search"/"Close search" to reflect current state.
- Focus moves into the search input on open, and back to the toggle button
  on Escape-close, so keyboard users aren't left with focus in a
  now-hidden context.
- Clicking outside the search area also closes it, matching common
  disclosure-pattern expectations.
- The form uses `role="search"` implicitly satisfied by the native `<form
  role="search">`, with the input carrying its own `aria-label`.
- `prefers-reduced-motion` removes the width transition; expand/collapse
  still functions, just as an instant width change.

## Notes

- The input remains in the DOM at all times (just visually clipped via
  `overflow: hidden` on a 44px-wide wrapper when closed), so its value
  isn't lost if a user types, closes, and reopens the search — though the
  field is not focusable/tabbable in a meaningful way while collapsed since
  it's effectively zero-width.
- Width-based transition (rather than `max-width` guesswork) uses a fixed
  target width (`260px`) for predictable animation timing.