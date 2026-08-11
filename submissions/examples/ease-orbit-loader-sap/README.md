# ease-orbit-loader-sap

A loading spinner made of 3 concentric rings, each spinning at a different speed/direction with only one colored border edge visible per ring.

## Usage
1. Include `style.css`.
2. Add markup: 3 `.orbit-ring` divs inside `.orbit-loader-sap`.

## Customization
- Ring count/inset spacing for more/fewer orbits.
- Per-ring color (via `border-*-color`) and spin duration/direction.
- Overall loader size.

## Notes
- Each ring has only one border side colored (`border-top-color`, `border-right-color`, etc.) with the rest transparent, so spinning reveals a single moving arc rather than a solid rotating ring.
- Mixing spin directions (`normal` vs `reverse`) and durations across the 3 rings avoids a mechanically synchronized look.
- Respects `prefers-reduced-motion`: all ring animations are disabled, leaving static colored arc segments.