# ease-glass-morphism-panel-sap

A frosted-glass styled panel using `backdrop-filter: blur()` over a semi-transparent background, with a subtle hover lift.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="glass-panel-sap">
     <h3>Title</h3>
     <p>Description</p>
     <button class="glass-btn">Action</button>
   </div>
```
3. Best displayed over a colorful/gradient background so the blur effect is visible.

## Customization
- `backdrop-filter: blur(16px)`: blur intensity.
- `rgba(255,255,255,0.15)` background opacity: glass transparency level.
- Border opacity for the glass edge highlight.

## Notes
- Requires a background *behind* the panel (image, gradient, or other content) to actually see the frosted-glass effect — on a plain solid background the blur has nothing to blur.
- `-webkit-backdrop-filter` prefix is included for Safari support alongside the standard property.
- Respects `prefers-reduced-motion`: hover lift transform is removed; background-color transition on the button remains as non-motion feedback.