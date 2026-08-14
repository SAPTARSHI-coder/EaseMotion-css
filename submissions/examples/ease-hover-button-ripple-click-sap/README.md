# Hover Button Ripple Click

Buttons combining a hover lift with a click-triggered ripple that expands
from the exact click point, layered together for a two-stage tactile feel.

**Level:** Intermediate

## Usage

Apply `.dual-btn` (plus optional `.dual-btn-danger` variant) to any button.
Hover applies a small lift via `transform`; clicking spawns a ripple `span`
at the pointer position, same technique as `ease-hover-button-ripple-sap`.

## Accessibility

- Ripple is layered behind the button's text (`z-index: -1` +
  `isolation: isolate`), never obscuring the label, and `pointer-events:
  none` keeps it from intercepting clicks.
- Bound to the `click` event, so it also fires for keyboard-activated
  (Enter/Space) button presses, giving keyboard users the same feedback as
  mouse users.
- Each ripple self-removes on `animationend`, avoiding buildup from rapid
  repeated clicks.
- `prefers-reduced-motion` disables both the hover lift `transform` and the
  ripple animation (hiding the ripple layer entirely), leaving only the
  background color change as interactive feedback.

## Notes

- This is a close variant of `ease-hover-button-ripple-sap`, adding a
  persistent hover-lift `transform` on top of the click ripple — the two
  effects layer without conflicting since the lift is a continuous
  hover-state transform and the ripple is a one-shot spawned element.
- Includes a `.dual-btn-danger` color variant to demonstrate the effect
  isn't tied to one specific button color.