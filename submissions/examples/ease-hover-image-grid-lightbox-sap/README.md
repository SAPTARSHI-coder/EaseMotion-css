# Hover Image Grid Lightbox

A thumbnail grid where clicking any image opens a full-size lightbox
overlay with a fade/scale-in animation, full focus management, and
Escape/outside-click/close-button dismissal.

**Level:** Advanced

## Usage

Each thumbnail is a `<button>` with `data-full` pointing to the full-size
image URL. Clicking calls `openLightbox()`, which populates and reveals the
overlay; `closeLightbox()` reverses it.

## Accessibility

- Each thumbnail button has a descriptive `aria-label` ("Open image 1 of 3
  in lightbox"), and every image (thumbnail and full-size) carries real
  descriptive `alt` text.
- The lightbox is `role="dialog" aria-modal="true"` with a labeled close
  button; focus moves to the close button on open and is restored to the
  originating thumbnail on close.
- Escape closes the lightbox; clicking the dark backdrop (not the image
  itself) also closes it.
- The keydown listener is only attached while the lightbox is open and
  removed on close.
- `prefers-reduced-motion` removes the backdrop fade and image scale/fade
  transitions; open/close still function, just instantly.

## Notes

- `lightbox.hidden` is only set back to `true` after `transitionend`, so
  the close animation plays fully before removal from layout/accessibility tree.
- This demo omits a focus trap within the lightbox (unlike
  `ease-modal-fade-backdrop-sap`) since there's only one interactive element
  (the close button) inside it — for a lightbox with next/prev navigation
  controls, a full focus trap (as in the modal component) would become
  necessary and should be added.