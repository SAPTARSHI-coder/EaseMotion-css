# ease-hover-reveal-caption-sap

An image card where hovering slowly zooms the photo and reveals a gradient-backed caption sliding up from the bottom.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="reveal-caption-sap">
     <img src="..." alt="...">
     <div class="caption-overlay">
       <div class="caption-text">
         <h4>Title</h4>
         <p>Subtitle</p>
       </div>
     </div>
   </div>
```

## Customization
- `scale(1.08)` on hover: zoom intensity.
- Gradient overlay darkness/height.
- Caption slide distance (`translateY(16px)`) and stagger delay relative to the overlay fade.

## Notes
- Overlay fade and caption slide use a slight delay offset (`0.05s`) on the text so the gradient appears fractionally before the text slides in, reading as one smooth reveal rather than simultaneous pop-in.
- `overflow: hidden` on the card clips the zoomed image to the fixed card bounds.
- Respects `prefers-reduced-motion`: image zoom and caption slide-up transforms are removed; only the overlay/caption opacity fade remains as the reveal mechanism.