# ease-hover-flip-icon-button-sap

A round icon button that flips 180° on hover to reveal a second icon on its back face (e.g., "+" flips to a checkmark).

## Usage
1. Include `style.css`.
2. Add markup: `.flip-front`/`.flip-back` faces inside `.flip-inner` inside `.flip-icon-btn-sap`.

## Notes
- Standard 3D flip-card technique scaled down to a circular icon button; both faces round via `border-radius: 50%` alongside `backface-visibility: hidden`.
- Respects `prefers-reduced-motion`: flip transition is disabled, hovering shows the back icon instantly.