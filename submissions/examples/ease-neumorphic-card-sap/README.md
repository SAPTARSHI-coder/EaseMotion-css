# ease-neumorphic-card-sap

A soft-UI (neumorphic) card using dual-direction box-shadows to simulate a raised, embossed surface, with an inset-shadow icon well and a pressable button.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="neumorphic-card-sap">
     <div class="nc-icon">🔔</div>
     <h3>Title</h3>
     <p>Description</p>
     <button class="nc-btn">Action</button>
   </div>
```

## Customization
- Base background `#e0e5ec` — light/dark shadow colors must be recalculated (roughly ±20% lightness) if you change this base color for the effect to look correct.
- Shadow blur/offset for a flatter or deeper emboss.
- `.nc-btn:active` inset shadow for the "pressed" feedback.

## Notes
- Neumorphism relies on the shadow colors closely matching the background — a light shadow (highlight) on one side and a dark shadow on the other, both derived from the same base hue, is what sells the raised/carved illusion.
- The icon well uses `inset` shadows (opposite direction from the card) so it reads as pressed *into* the surface rather than raised.
- Respects `prefers-reduced-motion`: hover lift and shadow-depth transition are disabled; button press feedback (instant shadow swap) remains since it's a direct interaction response, not decorative motion.