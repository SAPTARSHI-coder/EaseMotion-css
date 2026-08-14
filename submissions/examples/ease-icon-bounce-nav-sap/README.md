# Icon Bounce Nav

A bottom/top nav bar where the tapped icon plays a springy bounce animation
and the tab becomes visually active.

**Level:** Beginner

## Usage

Click a `.nav-item` — the script toggles `.is-active` and re-triggers the
`.bounce` class (via a reflow reset) so the animation replays even if the
same-ish item is clicked again quickly.

## Accessibility

- Nav items are real `<a>` elements inside a labeled `<nav>`, so they're
  reachable and operable via keyboard and screen readers by default.
- `:focus-visible` outline is included for keyboard users.
- `prefers-reduced-motion` disables the bounce keyframes entirely; the
  active/hover color and background states still update normally.

## Notes

- The bounce is re-triggered by removing the `bounce` class, forcing a
  reflow (`void item.offsetWidth`), then re-adding it — the standard
  technique for restarting a CSS animation via JS.
- Demo uses emoji as icon placeholders; swap `.nav-icon` content for an SVG
  or icon font in real usage — the animation targets the icon wrapper, not
  the glyph itself, so it works either way.