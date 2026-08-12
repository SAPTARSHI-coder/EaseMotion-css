# ease-liquid-blob-loader-sap

A loading indicator that continuously morphs between organic blob shapes, giving a "liquid" feel — pure CSS `border-radius` animation, no SVG.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="blob-loader-sap"></div>
```

## Customization
- `width`/`height`: loader size.
- `background` gradient for theming.
- `blob-morph-sap` keyframe `border-radius` values: shape variety — add more keyframe steps for a more fluid, less predictable morph.

## Notes
- All shape variation comes from the 8-value elliptical `border-radius` shorthand animated across 4 keyframe states — no SVG path or JS shape interpolation needed.
- Respects `prefers-reduced-motion`: animation is disabled and the shape settles to a plain static circle, which still functions as a loading indicator via convention (e.g. paired with a spinner or just left as a static shape).