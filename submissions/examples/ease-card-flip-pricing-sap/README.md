# Card Flip Pricing

A pricing card that flips on click/tap or keyboard focus to reveal a plan's
feature list on the back, using a 3D `rotateY` transform.

**Level:** Intermediate

## Usage

Toggle the `is-flipped` class on `.flip-card` (via click, in the included
script) to flip between `.flip-front` and `.flip-back`. Keyboard users can
tab to the card and press Enter/Space.

## Accessibility

- Card is focusable (`tabindex="0"`) and responds to Enter/Space, not just click.
- `:focus-visible` also triggers the flip so keyboard users can preview the
  back without needing a separate control.
- `prefers-reduced-motion` removes the flip transition; the card still
  toggles state, it just switches instantly instead of rotating.

## Notes

- Both faces are absolutely positioned with `backface-visibility: hidden`
  and the back pre-rotated 180deg, which is the standard flip-card pattern.
- Flip is triggered by both click and focus so it works reasonably for mouse,
  touch, and keyboard without extra ARIA state management; if used in
  production, consider adding `aria-pressed` or an `aria-live` announcement
  for the state change.