# Notification Badge Count

A count badge on an icon button (e.g. cart) that bumps/pops with a spring
animation each time the count updates, and hides itself entirely at zero.

**Level:** Beginner

## Usage

Call `render()` after changing the JS `count` variable. It updates the
badge text (capping display at "99+"), toggles visibility at zero, updates
the button's `aria-label`, and replays the bump animation via a reflow reset.

## Accessibility

- The actual count is announced through the button's own `aria-label`
  (e.g. "Cart, 2 items"), not conveyed by the badge's visual number alone.
- At zero, the badge is hidden via a class that sets `display: none`
  (removed from the accessibility tree, not just visually), and the label
  updates to "Cart, 0 items" so state stays accurate.
- `prefers-reduced-motion` disables the bump animation; the number and
  `aria-label` still update correctly.

## Notes

- Count is capped at a "99+" display for large values while `aria-label`
  still reads the exact count for anyone relying on it.
- Bump animation is restarted via the standard reflow-reset technique (`void
  countEl.offsetWidth`) so consecutive quick increments each get their own bump.