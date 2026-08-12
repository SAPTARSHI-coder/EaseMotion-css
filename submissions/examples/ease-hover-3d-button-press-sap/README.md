# 3D Button Press

Buttons with a solid drop-shadow "3D" base that physically compress
downward on press, mimicking a real physical button (common in game UI and
playful product sites).

**Level:** Beginner

## Usage

Apply `.press-btn` plus a color modifier (`press-indigo`, `press-green`) to
any `<button>`. The 3D effect is a solid `box-shadow` offset that shrinks to
zero as the button moves down on `:active`.

## Accessibility

- Built on real `<button>` elements, so it's keyboard-operable by default —
  the `:active` press state also triggers on Enter/Space activation, not
  just mouse/touch press, since `:active` applies during keyboard
  activation of buttons in modern browsers.
- `:focus-visible` outline included, independent of the press-depth effect,
  so focus is never indicated only by button color/shadow.
- `prefers-reduced-motion` removes the `top`/`box-shadow` transition; the
  button still visibly compresses on press (state change is instant rather
  than eased), preserving the core press feedback without an animated glide.

## Notes

- Each color variant defines its own solid shadow color to match, so the
  "3D depth" always reads correctly regardless of which variant is used.
- The compress effect works by animating `top` (relative positioning) paired
  with shrinking `box-shadow` to zero, rather than `transform: translateY`,
  so the shadow's vertical offset and the button's visual position stay
  perfectly in sync through the whole travel distance.