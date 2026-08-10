# ease-particle-burst-hover-sap

A button that emits a small burst of colored particles radiating outward each time the cursor enters it.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <button class="particle-hover-sap">Hover Me</button>
```
3. Attach the `mouseenter` particle-spawn logic from `demo.html`.

## Customization
- Particle count per burst, size, and colors.
- `dist` range: spread distance from the button center.
- Animation duration for particle lifespan.

## Notes
- Uses `mouseenter` (fires once per hover) rather than `mousemove` (fires continuously), so the burst triggers once per hover rather than spamming particles while the cursor sits still.
- Each particle self-removes on `animationend`, preventing accumulation of stale DOM nodes on repeated hovers.
- Respects `prefers-reduced-motion`: particles are set to `display: none`, so the burst effect doesn't render at all (the button remains fully usable).