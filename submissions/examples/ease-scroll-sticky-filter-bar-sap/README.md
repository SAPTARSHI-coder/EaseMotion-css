# Scroll Sticky Filter Bar

A filter-chip toolbar that sticks to the top of the viewport on scroll and
compacts itself (smaller padding/text) once pinned, keeping filters
accessible without eating excessive screen space.

**Level:** Intermediate

## Usage

`.filter-bar` is `position: sticky; top: 0`. A scroll listener toggles
`.is-compact` once the bar's own bounding rect reaches the top of the
viewport (i.e., once it's actually stuck), shrinking padding/font-size.

## Accessibility

- The filter bar is `role="toolbar"` with an `aria-label`, and each filter
  is a real `<button>` — clicking toggles `.is-active` for the selected filter.
- `:focus-visible` outline shown on each chip, independent of the
  active/inactive color state.
- The compacting is purely a visual density change; it doesn't remove any
  chip from the DOM or tab order, so keyboard navigation through filters is
  unaffected by scroll state.
- `prefers-reduced-motion` removes the padding/font-size/color transitions;
  the compact state still applies correctly, just as an instant size change.

## Notes

- Detects "stuck" state by checking if the bar's own `getBoundingClientRect().top
  <= 0` — a lightweight way to know a `position: sticky` element has
  actually reached its pinned position, without a separate sentinel element
  or `IntersectionObserver`.
- This demo only implements single-select filtering (one active chip at a
  time); extend the click handler for multi-select if needed for a real
  filtering UI, and wire actual product filtering logic to the click handler.