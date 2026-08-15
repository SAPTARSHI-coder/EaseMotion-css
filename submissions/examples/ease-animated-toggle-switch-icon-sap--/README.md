# ease-animated-toggle-switch-icon-sap

A day/night toggle switch whose knob carries a sun/moon icon that swaps content as it slides.

## Notes
- Knob position uses the standard bouncy-slide toggle technique; the icon SVG content is swapped at the moment of click rather than morphed, since sun/moon paths don't share compatible point structures for smooth `d` interpolation.
- Respects `prefers-reduced-motion`: knob slide/bounce transition disabled, only background color animates.