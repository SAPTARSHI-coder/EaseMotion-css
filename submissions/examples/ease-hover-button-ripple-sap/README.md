# Hover Button Ripple

Buttons that emit a Material-Design-style expanding ripple from the exact
click point, cleaning itself up from the DOM once the animation finishes.

**Level:** Intermediate

## Usage

Apply `.ripple-btn` to any button (with an optional `.ripple-outline`
variant). JS creates a positioned `.ripple` span at the click coordinates on
every `click` event and removes it after the ripple animation completes.

## Accessibility

- Ripple is a purely decorative click-feedback effect layered behind the
  button's own text (`z-index: -1` with `isolation: isolate` on the
  button), so it never obscures or interferes with the label.
- `pointer-events: none` on the ripple ensures it can't intercept clicks
  meant for the button.
- Triggered by the `click` event (not `mousedown`/pointer-only), so it also
  fires for keyboard-activated (Enter/Space) clicks on the button, giving
  keyboard users the same visual feedback.
- `prefers-reduced-motion` disables the ripple animation and hides the
  layer entirely, so no stray unanimated circle is left visible.

## Notes

- Each ripple removes itself from the DOM on `animationend`, so rapid
  repeated clicks don't accumulate leftover ripple elements.
- Ripple size is calculated as double the button's largest dimension,
  ensuring it fully covers the button regardless of click position before
  fading out.
- For keyboard-triggered clicks (no `clientX`/`clientY` from a real pointer
  event in some browsers), the ripple may originate from `0,0` of the
  button; centering the ripple in that fallback case would be a reasonable
  follow-up refinement.