# Animated Loading Text

Each letter of a "Loading" label bobs up and down in a staggered wave, a
lightweight text-only alternative to a spinner.

**Level:** Beginner

## Usage

Wrap each letter in its own `<span style="--i:N">`, where `N` is the
letter's index — used to stagger `animation-delay`. Wrap the whole thing in
`role="status" aria-live="polite"` with a plain-text `.sr-only` fallback
label for assistive tech.

## Accessibility

- The animated per-letter spans are `aria-hidden="true"`; the actual
  announced text is a separate, plain, visually-hidden `.sr-only` string
  ("Loading, please wait") — so screen readers get one clean announcement
  instead of reading out individual single-letter spans.
- `role="status" aria-live="polite"` announces the loading state without
  needing focus to move to it.
- `prefers-reduced-motion` removes the wave animation and sets all letters
  to full opacity, so the word remains fully legible and static.

## Notes

- Stagger is driven by a `--i` custom property per letter multiplied by a
  fixed delay step in the `animation-delay` calc — adding/removing letters
  just means updating each span's `--i`.
- This is a decorative loading indicator; pair with real loading-state logic
  (showing/hiding it, updating the live region text on completion) in actual use.