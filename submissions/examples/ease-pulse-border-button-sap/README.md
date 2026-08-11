# ease-pulse-border-button-sap

A call-to-action button with two continuously expanding, fading border rings pulsing outward to draw attention.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <button class="pulse-border-btn-sap">Get Started</button>
```

## Customization
- Ring color (matches button background by default for a cohesive look).
- Pulse scale/duration in `pulse-ring-sap`.
- Number of rings — currently 2 offset by 1s; add a third `::before`-style layer via an extra wrapping element if more overlap is desired (pseudo-elements are limited to 2 per element).

## Notes
- Two rings (`::before` and `::after`) pulse on a staggered 1-second delay, so a new ring starts expanding right as the other reaches its midpoint — this creates a continuous "radar ping" effect rather than a single isolated pulse.
- Since only `::before` and `::after` are available per element, a third overlapping ring would require an extra wrapper `<span>`.
- Respects `prefers-reduced-motion`: both ring animations are disabled and opacity is set to 0, so no pulsing rings render at all; the button itself remains fully functional.