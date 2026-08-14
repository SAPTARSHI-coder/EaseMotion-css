# Animated Slider Thumb

A native `<input type="range">` restyled with a gradient-filled track and a
thumb that scales up with a glow ring while actively being dragged.

**Level:** Intermediate

## Usage

Standard `<input type="range">`. JS updates a `--fill` custom property on
`input` to draw the filled portion of the track, and toggles `.is-active`
on press/release to trigger the thumb's scale-up state.

## Accessibility

- Uses a native `<input type="range">`, so it's keyboard-operable
  (Arrow keys, Home/End, Page Up/Down) and screen-reader friendly by default
  — no custom ARIA slider reimplementation needed.
- The current value is also shown as visible text (`#volumeValue`), tied to
  the input via a `<label for>`, not conveyed by thumb position alone.
- `:focus-visible` outline is included separately from the drag-active state.
- `prefers-reduced-motion` removes the thumb's scale/glow transition; the
  value and fill still update instantly and correctly.

## Notes

- Track fill uses a `linear-gradient` driven by a `--fill` percentage custom
  property recalculated on every `input` event — avoids needing a second
  overlay element for the filled portion.
- Thumb styling is duplicated for `::-webkit-slider-thumb` and
  `::-moz-range-thumb` since range inputs don't have a unified pseudo-element yet.