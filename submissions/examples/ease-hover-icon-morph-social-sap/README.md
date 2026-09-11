# ease-hover-icon-morph-social-sap

Social icon buttons that morph from circles to rounded squares, tilt slightly, and take on their brand color on hover.

## Usage
1. Include `style.css`.
2. Add markup: `.social-btn` links with a brand class (`.tw`/`.fb`/`.ig`) and an inline SVG icon.

## Notes
- Shape and color transitions run together, so hovering reads as a single cohesive morph rather than separate effects.
- Respects `prefers-reduced-motion`: rotation/scale is removed and border-radius no longer morphs; only background color changes on hover.