# Pure CSS Toggle Switch

## Summary

An animated toggle switch built entirely with CSS — a real `<input type="checkbox">`
styled to look and behave like a switch. No JavaScript, fully keyboard accessible,
and screen-reader friendly since it's a genuine checkbox under the hood.

## How it works

- The checkbox itself is visually hidden (not `display: none`, so it stays
  focusable and operable) but remains the actual interactive/accessible element.
- A sibling `.pcts-track` + `.pcts-thumb` pair is purely decorative and styled
  based on the checkbox's `:checked` state via the `~` sibling combinator.
- The thumb slides with `transform: translateX(...)`, and the track's
  background color transitions — both animatable with a plain CSS `transition`.

## Files

- `demo.html` — off, on-by-default, disabled, and small-size examples
- `style.css` — switch structure, checked/disabled/focus states, size variant

## Accessibility

- Uses a real `<input type="checkbox">`, so screen readers announce it as a
  checkbox with its current state — no custom ARIA roles needed.
- `:focus-visible` outline for keyboard navigation.
- `:disabled` state is respected and visually distinct.

## Notes for maintainer review

Filed against issue #88616 ("Add pure CSS advanced component iteration 158").
As with #88584, the issue body was a generic auto-generated template with no
concrete spec, so this submission proposes a genuinely useful, commonly-needed
component (checkbox-based animated toggle) rather than a placeholder.
