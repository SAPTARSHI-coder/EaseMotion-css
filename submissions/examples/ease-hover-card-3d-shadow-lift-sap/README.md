# ease-hover-card-3d-shadow-lift-sap

A card that lifts on hover with a *separate* ground shadow beneath it that spreads and darkens independently, simulating the card floating away from a surface.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="shadow-lift-sap"><h3>Title</h3><p>Text</p></div>
```

## Notes
- The ground shadow is a dedicated `::after` radial-gradient blob positioned beneath the card (not the card's own `box-shadow`), so it can animate its spread/opacity independently from the card's lift — the card's own `box-shadow` also softens slightly as it "moves away" from the shadow's light source.
- This two-part shadow system (card box-shadow + separate ground shadow) reads more like a physical object lifting off a surface than a single box-shadow blur increase.
- Respects `prefers-reduced-motion`: the lift transform and ground shadow spread transform are removed; opacity/shadow-color transitions remain as reduced feedback.