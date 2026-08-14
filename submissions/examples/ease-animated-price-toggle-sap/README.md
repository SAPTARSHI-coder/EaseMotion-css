# Animated Price Toggle

A monthly/yearly billing switch that slides its knob with a springy easing,
and a price number that briefly fades/shifts when swapping values.

**Level:** Intermediate

## Usage

The switch is a real `<button role="switch" aria-checked>`. On click, JS
flips `aria-checked`, toggles `.is-on`, and briefly adds `.is-swapping` to
the price number to cross-fade in the new value.

## Accessibility

- Implemented as `role="switch"` with `aria-checked` kept in sync, and
  `aria-labelledby` pointing at both the "Monthly" and "Yearly" labels so
  its accessible name describes what's being toggled, not just on/off.
- Fully keyboard-operable since it's a real `<button>` — Enter/Space toggles
  it natively, with a `:focus-visible` outline shown.
- `prefers-reduced-motion` removes both the knob's slide transition and the
  price number's swap fade/shift; values still update correctly and instantly.

## Notes

- The price swap uses a short `setTimeout` (150ms) to let a fade-out play
  before swapping the text content and fading back in — a simple JS
  cross-fade without needing a full animation library.
- Two numeric plans are hardcoded (`monthly`/`yearly`) for the demo; wire up
  to your actual pricing data as needed.