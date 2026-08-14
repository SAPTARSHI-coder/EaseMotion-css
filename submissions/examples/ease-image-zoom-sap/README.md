# ease-image-zoom-sap

A framed image that smoothly zooms in on hover, clipped by an overflow-hidden container so the zoom stays contained within fixed bounds.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="image-zoom-sap">
     <img src="your-image.jpg" alt="Description">
   </div>
```

## Customization
- `scale(1.25)` on hover: zoom intensity.
- Transition duration/easing for zoom speed.
- Container `width`/`height`/`border-radius` for framing.

## Notes
- `overflow: hidden` on the wrapper is what clips the scaled-up image to the frame — without it the zoom would just make the image spill outside its box.
- `object-fit: cover` keeps the image filling its frame with correct aspect ratio both before and during zoom.
- Respects `prefers-reduced-motion`: zoom transition is removed; hover still enlarges the image instantly rather than not at all, since the visual change itself isn't distressing motion at that point — but if stricter compliance is desired, this can be gated further.