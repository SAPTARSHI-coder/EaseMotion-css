# Scroll Nav Highlight

A sticky top nav with a sliding highlight pill that glides beneath the link
matching the currently-visible page section, similar to the vertical-tabs
indicator but for horizontal scroll-synced navigation.

**Level:** Intermediate

## Usage

Links need `data-target` matching a section `id`. An `IntersectionObserver`
with a centered `rootMargin` band determines the active section and repositions
`#navPill` using the matching link's `offsetLeft`/`offsetWidth`.

## Accessibility

- Nav links are real, working anchor links in a labeled `<nav
  aria-label="Section navigation">`, so navigation works even without JS —
  the pill and active-highlighting are progressive enhancements on top.
- `:focus-visible` outline included on links, separate from the active-pill
  indicator, so keyboard focus is never dependent on the pill alone.
- `prefers-reduced-motion` removes the pill's slide/width transition and the
  link color transition; the correct link and pill position still update
  instantly and correctly.

## Notes

- Pill position/width is computed from the active link's own
  `offsetLeft`/`offsetWidth` (not hardcoded per-link positions), so it
  adapts automatically to different link label lengths.
- `rootMargin: '-45% 0px -45% 0px'` narrows the observer's effective
  viewport to a thin band near vertical-center, matching the pattern used
  in the sticky-sidebar submission, so a section is marked "active" only
  once it's roughly centered in view.