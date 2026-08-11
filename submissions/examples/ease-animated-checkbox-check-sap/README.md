# Animated Checkbox Check

Custom checkboxes where the checkmark draws itself in with an SVG
stroke-dashoffset animation when checked, instead of just popping in.

**Level:** Intermediate

## Usage

Pure CSS, no JS. Each `.check-option` wraps a real (visually hidden)
`<input type="checkbox">`, a `.check-box` visual square containing an SVG
checkmark, and label text.

## Accessibility

- Real `<input type="checkbox">` elements are used (visually hidden via
  `opacity: 0` positioned off, not `display: none`), so keyboard toggling,
  screen reader state announcement, and native form submission all work
  without any JS or ARIA re-implementation.
- Label wraps the whole option, giving a large click/tap target tied to the
  input via implicit `<label>` association.
- `:focus-visible` on the input drives a visible outline on the styled box.
- `prefers-reduced-motion` removes both the box's background/border
  transition and the checkmark's draw-in animation; the checked state still
  displays immediately and correctly.

## Notes

- The draw-in checkmark uses `stroke-dasharray`/`stroke-dashoffset` on the
  SVG polyline — a common "self-drawing line" CSS technique — animated only
  when the sibling input is `:checked`.
- No JavaScript required — the entire checked/unchecked visual state is
  driven by the `:checked` pseudo-class via the sibling combinator.