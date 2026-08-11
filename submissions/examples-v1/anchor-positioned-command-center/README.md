# Anchor-Positioned Contextual Command Center

A self-contained EaseMotion CSS example demonstrating the native **CSS Anchor
Positioning API** — overlays (popovers, menus, notification cards, command
suggestions) that snap precisely to the element that triggered them, using
only CSS. No JavaScript is used to calculate placement.

Live in this folder:

    submissions/examples/anchor-positioned-command-center/
    ├── demo.html
    ├── style.css
    └── README.md

## What it demonstrates

- **anchor-name / position-anchor / anchor()** — every trigger
  (the *New File* button, the search box, the notification bell, the
  profile avatar, and each card's kebab menu) declares an `anchor-name`.
  Its corresponding overlay sets `position-anchor` to that name and reads
  coordinates straight off it with `anchor(top)`, `anchor(bottom)`,
  `anchor(left)`, `anchor(right)`.
- **anchor-size()** — the command-suggestions popover matches the width
  of its search input with `width: anchor-size(width)`.
- **position-try-fallbacks** — each popover can flip to the opposite
  side automatically if it would overflow the viewport, with zero
  JavaScript re-measuring.
- **The native Popover API** (`popover="auto"` / `popovertarget`) — every
  overlay is a real top-layer popover, so it gets light-dismiss,
  Esc-to-close, and correct stacking for free.
- **:has() + :popover-open** — the optional "Highlight anchor ↔
  overlay link" toggle lights up a trigger while its popover is open,
  purely as a CSS relational selector. This is the example's signature
  touch: it makes the otherwise-invisible anchor relationship visible.
- **Graceful degradation** — `@supports not (anchor-name: --cc-a)` falls
  back to a simple centered layout on browsers that don't yet support
  anchor positioning, so the interface never breaks, only de-anchors.
- **Accessibility** — every popover has an appropriate ARIA role, focus
  moves to the first menu item on open, arrow keys move focus between
  items, and `prefers-reduced-motion` disables the open/close animation.

## Browser support

CSS Anchor Positioning currently ships in Chromium-based browsers
(Chrome/Edge 125+). On browsers without support, the @supports fallback
keeps every popover fully usable — it just isn't pinned to its trigger —
and a short on-page note explains this automatically via a CSS.supports()
check.

## Try it

Open demo.html in a recent Chromium browser and:

1. Click New File, the search box, the bell, or the avatar.
2. Click the kebab (three dots) on any card for a per-card contextual menu.
3. Toggle "Highlight anchor ↔ overlay link" to see the trigger glow
   while its overlay is open.
4. Resize the window near an edge to see position-try-fallbacks flip
   a popover to stay on-screen.
