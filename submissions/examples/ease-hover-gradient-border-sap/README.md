# Hover Gradient Border

Cards whose border becomes a slowly rotating rainbow gradient ring on
hover/focus, built from a masked, spinning conic-gradient pseudo-element.

**Level:** Advanced

## Usage

Apply `.grad-card` to any card-like link. The gradient ring is a masked
`::before`, hidden (`opacity: 0`, animation paused) by default and revealed
with rotation running on `:hover`/`:focus-visible`.

## Accessibility

- Cards are real `<a>` elements, so keyboard focus works by default, and
  the gradient ring appears on `:focus-visible` as well as `:hover` — equal
  feedback for keyboard and mouse users.
- `:focus-visible` also adds a separate outline, independent of the
  decorative gradient ring.
- The ring's rotation is paused (`animation-play-state: paused`) whenever
  it's not visible, so it isn't silently spinning in the background/DOM
  when hidden.
- `prefers-reduced-motion` removes the spin animation entirely — only the
  opacity fade-in of a static gradient ring remains.

## Notes

- Border-only appearance uses the same masked-pseudo-element technique as
  the card-hover-border-glow component: a `conic-gradient` clipped with
  `mask-composite: exclude` against the card's content-box.
- `isolation: isolate` + `z-index: -1` on the pseudo-element keeps the
  spinning ring layered behind the card's own text content.