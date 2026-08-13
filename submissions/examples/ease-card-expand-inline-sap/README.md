# Card Expand Inline

An accordion-style card whose body smoothly grows/shrinks in place to reveal
or hide detail content, with a rotating "+" icon indicator.

**Level:** Intermediate

## Usage

Each card is a `.expand-header` button paired with an `.expand-body` panel.
JS measures `scrollHeight` and animates the `height` property from `0` to
that measured value (then to `auto` once open) since CSS can't natively
transition to/from `auto`.

## Accessibility

- Header buttons use `aria-expanded` and `aria-controls`, kept in sync with
  actual state.
- The body panel is toggled with the `hidden` attribute in addition to
  height, so collapsed content is fully removed from the accessibility tree
  and tab order — not just visually clipped.
- `:focus-visible` outline included on the header button.
- `prefers-reduced-motion` removes both the icon rotation and the height
  transition; expand/collapse still functions, just instantly.

## Notes

- Height animation follows the standard "measure `scrollHeight`, animate to
  it, then set `height: auto`" pattern so content isn't clipped if it later
  reflows (e.g. window resize) while expanded.
- Uses `transitionend` to know when to finalize `height: auto` (opening) or
  set `hidden = true` (closing), avoiding a hardcoded duration matching the
  CSS transition length.