# ease-hover-card-tilt-shadow-sap

A card that tilts slightly and lifts on hover, with the shadow shifting offset to match the tilt direction — simulating a light source reacting to the card's angle.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="tilt-shadow-card-sap">
     <h3>Title</h3>
     <p>Description</p>
   </div>
```

## Customization
- Tilt angles (`rotateX`/`rotateY`) and lift distance on hover.
- Shadow offset/blur/opacity — should roughly correspond with the tilt direction for a believable light-source effect.
- `perspective(700px)`: 3D depth intensity.

## Notes
- Unlike a cursor-tracking tilt card, this uses a single fixed hover tilt angle (not computed from cursor position), making it much simpler while still adding depth — a lightweight alternative to full mouse-tracking tilt.
- The shadow's offset direction (`-12px 20px`) is chosen to roughly match the direction the card appears to lean toward on hover, reinforcing the illusion of a light source.
- Respects `prefers-reduced-motion`: the tilt/lift transform is removed; shadow depth transition remains as non-motion hover feedback.