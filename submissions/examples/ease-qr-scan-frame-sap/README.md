# ease-qr-scan-frame-sap

A QR/barcode scanner overlay frame with four corner brackets and a glowing scan line that sweeps up and down continuously — pure CSS.

## Usage
1. Include `style.css`.
2. Add markup: a container with 4 `.corner` divs (`.tl`, `.tr`, `.bl`, `.br`) and one `.scan-line`.
3. Overlay this on top of a camera feed or image in a real implementation.

## Customization
- Corner bracket size/color/thickness.
- `scan-move-sap` keyframes: sweep range and speed.
- Scan line glow intensity (`box-shadow`).

## Notes
- Corner brackets are built from partial borders (2 sides only, rounded on the outer corner) rather than 4 separate image assets or SVGs.
- The scan line uses a horizontal gradient (transparent → green → transparent) so its edges fade out rather than having hard-cut ends.
- Respects `prefers-reduced-motion`: sweep animation is disabled, scan line rests at the vertical center as a static indicator.