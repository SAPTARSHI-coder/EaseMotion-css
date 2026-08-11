# ease-color-picker-sap

An animated, accessible color picker built around the native HTML `<input type="color">`, with a styled circular swatch and live hex value display.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="color-picker-sap">
     <div class="swatch-wrap" style="background:#2563eb;">
       <input type="color" value="#2563eb" aria-label="Pick a color">
     </div>
     <span class="color-value">#2563EB</span>
   </div>
```
3. Attach the `input` event listener from `demo.html` to sync swatch background and hex label.

## Customization
- `width`/`height` on `.swatch-wrap`: swatch size.
- `.color-value` styling for the hex readout.
- Hover scale/ring color on `.swatch-wrap:hover`.

## Notes
- Built on the native `<input type="color">` rather than a custom color wheel, so it's fully accessible and keyboard-operable out of the box — the native control is just visually hidden (`opacity: 0`) and stretched to cover the swatch circle.
- `aria-label` is included on the input since it has no visible native label.
- Respects `prefers-reduced-motion`: hover scale/ring transitions are disabled.