# Card Tilt 3D Hover

A card that tilts in 3D following the cursor position, with a soft radial
"shine" highlight that tracks alongside it, and springs back flat on mouse leave.

**Level:** Advanced

## Usage

`mousemove` computes normalized cursor position (0–1) within the card and
maps it to `rotateX`/`rotateY` via `perspective(...) rotateX() rotateY()
scale()`. The same position drives a `--shine-x`/`--shine-y` custom property
pair for the highlight's radial-gradient center.

## Accessibility

- Card is focusable (`tabindex="0"`) with a visible `:focus-visible`
  outline, though the 3D tilt itself is inherently a pointer/mouse-position
  effect with no meaningful keyboard equivalent — this is acknowledged as
  an accepted limitation of this specific effect type, similar to the
  magnetic-icon-grid component, rather than worked around.
- `prefers-reduced-motion` forces the card's transform to `none` even on
  hover/focus (`!important`), so motion-reduced users get a fully static
  card regardless of any residual inline style from `mousemove`.

## Notes

- Tilt strength is controlled by the `MAX_TILT` constant (12°); increasing
  it produces a more dramatic effect.
- The shine highlight and the tilt both derive from the same normalized
  cursor position calculation, so they stay visually coupled rather than
  needing two separate position-tracking systems.
- This is a pointer-only decorative effect; the card's actual textual
  content is always fully present and readable regardless of tilt state.