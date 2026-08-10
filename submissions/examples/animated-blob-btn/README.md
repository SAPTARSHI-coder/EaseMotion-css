# ease-blob-btn

A button whose border-radius continuously morphs into organic "blob" shapes on hover — pure CSS, no SVG.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <button class="blob-btn">Hover Me</button>
```

## Customization
- Edit the `border-radius` values (each keyframe uses 8 values: 4 for horizontal, 4 for vertical corner radii) to change the blob shapes.
- Animation duration (`3s`) controls morph speed.
- Base `background`/`color` for theming.

## Notes
- The organic look comes entirely from asymmetric elliptical `border-radius` shorthand (`X% Y% Z% W% / X% Y% Z% W%`), animated between three keyframe states.
- Animation only runs on `:hover`, so the button is static (fixed rounded-pill shape) at rest.
- No SVG, clip-path, or JS required — this is achievable because `border-radius` supports independent horizontal/vertical radii per corner.