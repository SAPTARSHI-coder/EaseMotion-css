# ease-scroll-linked-progress-bar-sap

A thin fixed gradient bar at the top of the page that fills exactly in proportion to scroll progress through the document — a reading-progress indicator.

## Usage
1. Include `style.css`.
2. Add markup as the first element in `<body>`:
```html
   <div class="scroll-linked-bar-sap"><div class="bar-fill" id="barFill"></div></div>
```
3. Attach the scroll listener from `demo.html`.

## Customization
- Bar height/gradient colors.
- Fixed vs sticky positioning if the bar should scroll with a specific section instead of the whole page.

## Notes
- Percentage is computed against the true scrollable range (`scrollHeight - innerHeight`), so the bar reaches exactly 100% at the actual bottom of the page regardless of content length or viewport size.
- `{ passive: true }` on the scroll listener avoids blocking scroll performance.
- Respects `prefers-reduced-motion`: no eased transition is applied to width in the first place (direct 1:1 scroll-linked update), so the media query mainly guards against future additions of a smoothing transition.