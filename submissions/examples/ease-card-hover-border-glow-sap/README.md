# Card Hover Border Glow

Cards whose border glows with a radial gradient that follows the cursor
position, built with a masked pseudo-element so only the border ring (not
the fill) lights up.

**Level:** Advanced

## Usage

Attach a `mousemove` listener per `.glow-card` that sets `--x`/`--y` custom
properties to the pointer position relative to the card. The `::before`
pseudo-element uses those to position a `radial-gradient`, masked to only
show along the border.

## Accessibility

- The glow is cursor-position-driven and purely decorative; it doesn't
  affect card content, reading order, or contrast of the text itself.
- Glow also appears on `:focus-visible` (defaulting to the CSS variables'
  initial 50%/50% center values, since there's no cursor position for
  keyboard users), so focused cards get equivalent — if centered rather
  than cursor-tracking — visual feedback instead of no glow at all.
- `prefers-reduced-motion` removes the opacity-in transition on the glow
  layer; `mousemove`-driven position updates are instantaneous property
  writes rather than an animation loop, so they aren't separately gated,
  but the glow reveal itself no longer eases in.

## Notes

- The border-only glow is achieved via a masked `::before`: a
  `radial-gradient` background clipped with `mask-composite: exclude`
  against the card's own content-box, leaving only the ~1.5px border ring visible.
- Cards are `tabindex="0"` here purely to demonstrate the focus-visible
  glow state in this standalone demo; a real usage would likely make the
  whole card a link/button if it's actually interactive, or drop
  `tabindex` entirely if it's not.