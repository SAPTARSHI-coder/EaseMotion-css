# Toggle Theme Switch

A sun/moon toggle switch that flips the page between light and dark mode,
with the thumb sliding across via a springy easing and the page colors
cross-fading.

**Level:** Intermediate

## Usage

The toggle is a `role="switch"` button. On click, JS flips `aria-checked`
and toggles a `dark` class on `<body>`, which CSS uses to swap background/
text colors and the track color.

## Accessibility

- Implemented as `role="switch"` with `aria-checked` kept in sync, and a
  descriptive `aria-label` ("Toggle dark mode") since the visual sun/moon
  icons alone aren't an accessible name.
- Fully keyboard-operable as a real `<button>`, with a visible
  `:focus-visible` outline.
- `prefers-reduced-motion` removes the color cross-fade transition on the
  page, and the thumb-slide/track-color transitions on the switch itself —
  the theme still changes correctly, just without animation.

## Notes

- This demo only toggles the switch state and applies a `dark` class; it
  does not persist the choice (e.g. to `localStorage`) or read the user's
  OS-level `prefers-color-scheme` on load — both are natural follow-ups for
  a production dark-mode toggle but are left out here to keep the
  submission focused on the animated switch itself.