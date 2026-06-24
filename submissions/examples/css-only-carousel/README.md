# CSS-only Scroll-Snap Carousel

A high-performance, touch-friendly carousel built utilizing native CSS `scroll-snap-type`. It avoids the heavy overhead of traditional JavaScript slider libraries while maintaining interactive pagination dots and incredibly smooth physics.

## Files
- `demo.html` - Interactive demonstration.
- `style.css` - The CSS implementation defining the scroll track, snap points, and radio button state hacks.

## Details
Carousels are notoriously complex, but native browser APIs have evolved. By using `scroll-snap-type: x mandatory`, the browser handles all touch events, momentum scrolling, and slide snapping natively on the GPU.

To provide pagination dots, we use a hidden radio button hack. When a dot (`<label>`) is clicked, it checks a hidden radio button. The CSS `~` sibling selector then styles the active dot. A tiny, optional 5-line inline JavaScript snippet is included in the demo just to trigger `scrollIntoView()` and keep the dots synced when a user manually swipes, but the core layout and animation is strictly CSS.
