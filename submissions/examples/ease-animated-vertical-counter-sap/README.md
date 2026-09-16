# Animated Vertical Counter

A 3-digit odometer-style counter where each digit column slides vertically
to reveal its new value, like a mechanical tally counter or flight-board digit.

**Level:** Advanced

## Usage

Each `.digit-col` is pre-populated with digits 0–9 stacked vertically. `render()`
translates each column by `-digit * 10%` to bring the correct digit into view.
Buttons increment/decrement the underlying `value`.

## Accessibility

- The counter container has `role="status" aria-live="polite"` and its
  `aria-label` is updated with the full current numeric value on every
  change, so screen readers announce the actual number rather than trying
  to interpret sliding digit columns.
- Increment/decrement controls are real buttons with clear `aria-label`s
  ("Increase"/"Decrease").
- `font-variant-numeric: tabular-nums` keeps digit glyph widths consistent.
- `prefers-reduced-motion` removes the slide transition; the correct digits
  still land in place instantly.

## Notes

- Each digit column contains all ten digits (0–9) stacked in a fixed-height
  `overflow: hidden` well; changing the value is just a `translateY`
  percentage shift, no DOM text replacement needed per tick.
- Value is clamped at a minimum of 0 in this demo; extend `render()`'s
  string handling if negative values or more digits are needed.