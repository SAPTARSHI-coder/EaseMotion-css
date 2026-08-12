# Scroll Sticky Sidebar

A sticky "on this page" sidebar that tracks scroll position and highlights
the link for the currently-in-view article section, using `IntersectionObserver`.

**Level:** Intermediate

## Usage

Sections need matching `id`s and sidebar links need `data-target` pointing
to those `id`s. `.sidebar` is `position: sticky; top: ...`; the observer
toggles `.is-active` on the matching link as sections cross a mid-viewport
`rootMargin` band.

## Accessibility

- Sidebar is a labeled `<nav aria-label="On this page">` with real `
  href="#...">` links, so it works as normal in-page navigation (including
  without JS) — the active-state highlighting is a progressive enhancement.
- `:focus-visible` outline included for keyboard users tabbing through links.
- `prefers-reduced-motion` removes the color/border transition on link
  active-state changes; the correct link still highlights instantly.

## Notes

- Uses `rootMargin: '-40% 0px -50% 0px'` to shrink the observer's
  "viewport" to a thin horizontal band near vertical-center, so the active
  link updates when a section is roughly centered rather than merely
  peeking into view.
- Native `position: sticky` handles the sidebar staying in place — no
  scroll-position math or JS positioning needed for that part.