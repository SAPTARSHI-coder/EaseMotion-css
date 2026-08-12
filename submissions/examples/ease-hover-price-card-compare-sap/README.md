# ease-hover-price-card-compare-sap

A row of pricing cards where hovering any one lifts and highlights it while dimming the others, emphasizing comparison.

## Usage
1. Include `style.css`.
2. Add markup: `.price-card` elements inside `.price-compare-sap`.

## Notes
- Group-level hover on the wrapper dims all cards; the specifically hovered card's own `:hover` overrides that dimming and adds the lift/highlight, using CSS specificity rather than JS.
- Respects `prefers-reduced-motion`: lift transform is removed, only opacity dimming/highlighting remains.