# Typewriter Code Block

A code-editor-styled window where a code snippet types itself out character
by character with a blinking caret, mimicking a live-coding demo.

**Level:** Intermediate

## Usage

Set `snippet` in the script to any code string. `typeNext()` reveals it one
character at a time via `setTimeout`; a CSS-animated `.caret` blinks after
the currently-revealed text.

## Accessibility

- Checks `prefers-reduced-motion` in JS before typing: reduced-motion users
  get the full snippet rendered instantly instead of the character-by-
  character animation, and the caret's blink animation is also disabled via CSS.
- An `aria-live="polite"` region (visually hidden via `.sr-only`, not
  `display:none`) announces completion so screen reader users aren't stuck
  listening to nothing during/after typing, without narrating every character.
- The animated caret is `aria-hidden="true"` since it's purely decorative.

## Notes

- Typing speed is 18ms/character in this demo; tune via the `setTimeout`
  delay in `typeNext()`.
- Uses `textContent` (not `innerHTML`) when revealing the snippet, so no
  markup injection risk even with special characters in the code sample.