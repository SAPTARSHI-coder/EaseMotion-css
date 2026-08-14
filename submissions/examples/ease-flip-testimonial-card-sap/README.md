# ease-flip-testimonial-card-sap

A testimonial quote card that flips on hover to reveal the reviewer's name, avatar, and title — 3D flip built the same way as a standard flip card.

## Usage
1. Include `style.css`.
2. Add markup: `.tf-front` (quote) + `.tf-back` (attribution) inside `.tf-inner` inside `.testimonial-flip-sap`.

## Customization
- Quote/attribution content.
- Front/back background and text colors.
- Flip trigger — hover by default; swap for a click-toggle class if touch support is a priority.

## Notes
- Standard 3D flip-card technique (`preserve-3d` + `backface-visibility: hidden` + pre-rotated back face) applied specifically to a testimonial use case — quote on front, attribution on back.
- Hover-only trigger works well on desktop but has no touch equivalent by default; README calls this out as worth pairing with a click-toggle class for full touch support if needed.
- Respects `prefers-reduced-motion`: flip transition is disabled, so hovering shows the back face instantly rather than rotating into view.