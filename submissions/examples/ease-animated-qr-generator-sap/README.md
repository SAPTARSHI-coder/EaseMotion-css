# ease-animated-qr-generator-sap

A simulated QR-style grid whose cells pop in with a randomized stagger, mimicking a QR code "generating" animation.

## Usage
1. Include `style.css`.
2. Add markup: an empty `.qr-grid` container.
3. Populate cells via JS (see `demo.html`) — real integration would replace the random pattern with an actual QR-encoding library's cell output.

## Customization
- Grid column count / cell size for QR resolution.
- Cell pop-in stagger randomness range.
- Real QR data — swap the random on/off pattern for actual encoded module data from a QR library.

## Notes
- This demo generates a **visually plausible random pattern**, not a scannable QR code — actual QR encoding requires a dedicated library (e.g., `qrcode.js`) to compute correct error-correction modules; the README calls this out explicitly so consumers don't mistake it for functional QR generation.
- Each "on" cell has a randomized `animation-delay` so cells pop in with organic, non-sequential timing rather than a mechanical row-by-row sweep.
- Respects `prefers-reduced-motion`: pop-in animation is disabled, the full pattern renders instantly.