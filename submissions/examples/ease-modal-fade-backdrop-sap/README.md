# Modal Fade Backdrop

A dialog that fades in with a darkening backdrop while the modal panel
itself rises and scales into place, with full focus-trap and Escape/outside-click handling.

**Level:** Advanced

## Usage

Call `openModal()`/`closeModal()` (wired to the demo's open/cancel/confirm
buttons). The backdrop is `hidden` when closed and toggled visible before
the fade-in transition starts.

## Accessibility

- The modal is `role="dialog" aria-modal="true"` with `aria-labelledby`
  pointing to its heading.
- Focus moves to the modal on open and is trapped inside it via a Tab/
  Shift+Tab handler (cycling between first and last focusable buttons), and
  is restored to the previously focused element on close.
- Escape closes the modal; clicking the backdrop (not the modal itself)
  also closes it.
- The keydown listener is only attached while the modal is open and removed
  on close, so it doesn't leak global key handling.
- `prefers-reduced-motion` removes the backdrop fade and modal rise/scale
  transitions; open/close still function, just instantly.

## Notes

- `backdrop.hidden` is only set back to `true` after `transitionend`, so the
  close animation gets a chance to play before the modal is fully removed
  from the accessibility tree/layout.
- Focus trap only cycles between `<button>` elements in this demo; extend
  the `focusables` selector if the modal grows more interactive elements.