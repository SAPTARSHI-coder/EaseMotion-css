# Flip Vertical Menu

A dropdown menu that flips open with a 3D `rotateX` motion from its top
edge, like a hinged panel, instead of a plain fade or slide.

**Level:** Intermediate

## Usage

Follows the WAI-ARIA menu button pattern: a `button` with `aria-haspopup`
and `aria-expanded`, controlling a `role="menu"` list of `role="menuitem"`
links. Closes on outside click or Escape.

## Accessibility

- Trigger button has `aria-haspopup="true"` and `aria-expanded`, kept in
  sync with actual menu visibility.
- Menu uses `role="menu"`/`role="menuitem"` with `hidden` toggled (not just
  a CSS class) so it's removed from the accessibility tree and tab order
  when closed.
- Escape closes the menu and returns focus to the trigger button.
- Clicking outside the menu closes it.
- `prefers-reduced-motion` removes the 3D rotate transform, keeping only a
  simple opacity fade for the open/close state.

## Notes

- `hidden` is removed just before adding `.is-open` (via
  `requestAnimationFrame`) on open, and added via `setTimeout` after the
  close transition duration on close, so the flip animation gets a chance
  to play both ways before the element is fully hidden.
- This demo covers click/outside-click/Escape; a production version should
  add ArrowDown/ArrowUp roving focus between menu items per the full ARIA
  menu button pattern.