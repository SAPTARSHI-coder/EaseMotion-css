# Drag Swipe Stack

A Tinder-style card stack: drag the top card left/right to reject/accept,
or use the labeled buttons — the card flies off with rotation on dismiss.

**Level:** Advanced

## Usage

Cards stack via `position: absolute` with slight scale/offset per depth.
Dragging uses Pointer Events on the top card only; releasing past a 100px
threshold dismisses it in that direction, otherwise it springs back to center.

## Accessibility

- Accept/Reject are also available as clearly labeled buttons (`aria-label`
  "Accept top card" / "Reject top card"), so the interaction doesn't require
  drag gestures at all — critical since drag-based swiping alone isn't
  keyboard-accessible.
- An `aria-live="polite"` region (visually hidden via `.sr-only`, not
  `display:none`) announces each dismissal and remaining card count, and
  announces "No more cards" if a button is pressed on an empty stack.
- `prefers-reduced-motion` removes the button hover scale; card fly-off/
  drag transforms are functional state changes tied to gesture/action
  rather than purely decorative, so they're left as instant `transform`
  updates rather than removed outright — flagged here as a nuance worth
  revisiting if stricter motion guarantees are needed.

## Notes

- Uses Pointer Events with `setPointerCapture` for reliable dragging, same
  pattern as the resize-handle component.
- Only the actual top card (`:last-child`) responds to drag; lower cards in
  the stack are inert until they become the top card.