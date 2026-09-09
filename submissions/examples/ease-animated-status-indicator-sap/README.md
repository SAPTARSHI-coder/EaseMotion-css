# ease-animated-status-indicator-sap

A status badge with a pulsing green dot for "online" state, switching to a static gray dot for "offline" via a modifier class.

## Usage
1. Include `style.css`.
2. Add markup: `.status-indicator-sap` (add `.offline` for the inactive state) with a `.status-dot` inside.

## Notes
- Pulse ring is a `::after` pseudo-element scaling/fading behind the solid dot; the `.offline` modifier disables the animation and recolors both elements gray.
- Respects `prefers-reduced-motion`: pulse animation is disabled, solid dot remains as a static status indicator.