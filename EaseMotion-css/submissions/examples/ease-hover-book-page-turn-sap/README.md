# ease-hover-book-page-turn-sap

A book/page-flip effect where hovering rotates the top page open on its left edge, revealing the page beneath, using 3D `rotateY` on a hinged pseudo-page.

## Usage
1. Include `style.css`.
2. Add markup: `.book-base` (revealed page underneath) + `.book-page` (the flipping top page) inside `.book-turn-sap`.

## Notes
- `transform-origin: left center` on `.book-page` makes it pivot like a real page hinge rather than rotating around its own center.
- Rotating past 90° (to `-160deg`, not a full 180°) leaves the page angled rather than fully flat against the back, which reads more like an actively-turning page mid-motion.
- Respects `prefers-reduced-motion`: the rotation transition is removed, so hover instantly shows the flipped state.