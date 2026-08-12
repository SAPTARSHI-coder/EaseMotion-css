# ease-drag-rating-slider-sap

A draggable rating slider on a red-to-green gradient track, with the numeric rating updating live as the thumb moves.

## Usage
1. Include `style.css`.
2. Add markup: `.rating-track` (gradient background) + `.rating-thumb` + a value display.

## Notes
- Numeric rating is derived from thumb position percentage, rounded to the nearest whole unit out of 10.
- `:active` on the track scales up the thumb for tactile drag feedback.
- Respects `prefers-reduced-motion`: thumb scale-up transition is disabled.