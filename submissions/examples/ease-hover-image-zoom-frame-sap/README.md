# Hover Image Zoom Frame

Image cards with a fixed-size clipped frame; the photo inside gently zooms
on hover/focus while a caption gradient stays anchored at the bottom.

**Level:** Beginner

## Usage

Wrap an `<img>` and a `.zoom-caption` span in `.zoom-frame` (an `<a>` in
this demo, since these link to a fuller view). `overflow: hidden` on the
frame clips the scaled-up image to the fixed frame size.

## Accessibility

- Every image carries real descriptive `alt` text.
- Zoom triggers on `:focus-visible` as well as `:hover`, giving keyboard
  users the same feedback as mouse users, plus a separate visible outline.
- The caption text sits over a gradient scrim for contrast, and remains
  static (non-scaling) while only the photo zooms, keeping it legible
  throughout the hover interaction.
- `prefers-reduced-motion` removes the image scale transition entirely.

## Notes

- Only the `<img>` itself scales via `transform`; the containing frame
  size never changes, so `overflow: hidden` reliably clips the zoomed image
  without affecting surrounding grid layout.
- Caption uses a `linear-gradient` scrim (not a solid background) so it
  blends naturally with varying photo content underneath.