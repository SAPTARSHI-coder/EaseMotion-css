# ease-scroll-blur-text-focus-sap

Text where each word sharpens into focus from a blurred state as the paragraph scrolls into view, like a camera racking focus.

## Usage
Include `style.css`, wrap each word in a `.bf-word` span, attach the `IntersectionObserver` from `demo.html`.

## Notes
- Uses `filter: blur()` rather than opacity alone, giving a true optical "coming into focus" read distinct from a plain fade.
- Respects `prefers-reduced-motion`: blur filter is removed entirely (no blur even at rest), leaving only an opacity transition as the reveal cue.