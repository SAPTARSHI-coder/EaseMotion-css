# ease-image-mask-reveal-sap

An image that wipes into view left-to-right on load, using an animated `clip-path: inset()` mask rather than opacity or transform.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="mask-reveal-sap">
     <img src="..." alt="...">
   </div>
```

## Customization
- `clip-path: inset()` direction: change `inset(0 100% 0 0)` to `inset(0 0 0 100%)` for a right-to-left wipe, or use top/bottom insets for a vertical wipe.
- Animation duration/easing.
- Trigger on scroll instead of load by combining with an `IntersectionObserver` (swap the `animation` for a class toggle).

## Notes
- `clip-path: inset(top right bottom left)` progressively reveals the image as the right-inset value shrinks from 100% to 0%, producing a true wipe rather than a fade or slide.
- Unlike `overflow: hidden` + `transform: translateX()` reveals, this doesn't require the image to be larger than its container or offset outside it — the full image stays in place and is simply masked.
- Respects `prefers-reduced-motion`: animation is disabled, `clip-path` is set directly to the fully-revealed state.