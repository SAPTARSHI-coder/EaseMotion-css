# Card Stack Swipe Away

A stack of task cards where clicking "Mark done" flies the top card off to
the side, revealing the next card underneath — a button-driven (not
drag-required) card-dismiss pattern.

**Level:** Intermediate

## Usage

Cards stack via `position: absolute` with depth-based scale/offset per
`:nth-child`. Clicking `#dismissBtn` adds `.is-leaving` to the current top
card (`:last-child`), which animates it off-screen, then removes it from
the DOM on `transitionend`.

## Accessibility

- Dismissal is triggered by a real, clearly labeled button ("Mark done ✓"),
  not a swipe gesture — the entire interaction is keyboard- and
  screen-reader-operable without any drag requirement.
- An `aria-live="polite"` region (visually hidden via `.sr-only`)
  announces which task was completed and how many remain after each
  dismissal, and announces "No tasks left" if pressed on an empty stack.
- `prefers-reduced-motion` removes the fly-off `translateX`/`rotate`
  transform, keeping only a simple opacity fade-out for the dismissed card.

## Notes

- The card is only removed from the DOM after `transitionend` fires (using
  `{ once: true }`), so the exit animation always completes visually before
  the next card in the stack becomes the new top.
- Unlike the `ease-drag-swipe-stack-sap` component, this one is intentionally
  button-only (no pointer/drag handling), making it a simpler, fully
  keyboard-native alternative for the same "dismiss top item" pattern.