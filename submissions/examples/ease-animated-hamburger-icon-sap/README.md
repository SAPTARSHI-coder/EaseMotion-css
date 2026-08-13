# Animated Hamburger Icon

A hamburger menu button whose three bars morph into an "X" on toggle, with
the accompanying mobile menu fading/sliding into view.

**Level:** Intermediate

## Usage

`aria-expanded` toggles between `false`/`true`; the same click handler
toggles `.is-open` on the button (drives the X morph) and shows/hides
`.mobile-menu` in sync.

## Accessibility

- Button uses `aria-expanded` and `aria-controls` pointing to the menu's
  `id`, kept in sync with actual state, plus `aria-label` updated between
  "Open menu"/"Close menu".
- The menu itself uses `hidden` when closed (after its close transition
  completes), removing its links from the accessibility tree and tab order,
  not just visually hiding them.
- `:focus-visible` outlines shown on both the toggle button and each menu link.
- `prefers-reduced-motion` removes the bar-morph and menu fade/slide
  transitions; both still toggle correctly, just instantly.

## Notes

- The X-morph uses `translateY` + `rotate` on the top/bottom bars and
  `opacity: 0` on the middle bar — a standard three-bar hamburger-to-X
  technique.
- `menu.hidden` is only set back to `true` after `transitionend` on close,
  so the fade/slide-out animation gets a chance to play before removal.