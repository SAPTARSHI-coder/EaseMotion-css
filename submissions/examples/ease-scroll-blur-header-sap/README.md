# Scroll Blur Header

A sticky header that gains a frosted-glass blur, a slightly more opaque
background, and a soft shadow once the page is scrolled past the top.

**Level:** Beginner

## Usage

`.site-header` is `position: sticky; top: 0`. A scroll listener toggles
`is-scrolled` once `window.scrollY > 20`, which switches on
`backdrop-filter: blur(...)`, higher background opacity, and a shadow.

## Accessibility

- Scroll listener is registered with `{ passive: true }` so it doesn't block
  scroll performance.
- Purely visual/decorative change — nav links, focus order, and content
  remain unaffected by the scrolled state.
- `prefers-reduced-motion` removes the transition on the header so state
  changes are instant rather than animated (the blur/shadow still apply,
  just without an eased transition).

## Notes

- Uses both `backdrop-filter` and `-webkit-backdrop-filter` for Safari support.
- `onScroll()` is called once on load (in addition to being bound to the
  scroll event) so a page loaded already scrolled down (e.g. via anchor
  link or refresh) shows the correct header state immediately.