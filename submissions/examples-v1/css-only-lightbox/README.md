# CSS-only Image Lightbox Gallery

A high-performance, fully functional image gallery and lightbox built entirely without JavaScript. It utilizes the CSS `:target` pseudo-class to handle state management, enabling modal overlays, zoom animations, and image navigation completely natively.

## Files

- `demo.html` - Interactive demonstration featuring a responsive grid of thumbnails and 4 interconnected lightbox modals.
- `style.css` - The CSS implementation defining the grid, hover effects, and the `:target` logic.

## Details

Creating a lightbox usually requires JavaScript to listen for clicks, append an overlay to the DOM, trap focus, and handle closing events.

This component achieves the same result by wrapping thumbnails in anchor tags that point to specific IDs (e.g., `<a href="#lightbox-1">`). When clicked, the browser updates the URL hash. The CSS rule `.ease-lightbox-overlay:target` catches this URL change and instantly makes the corresponding hidden lightbox visible.

Because it uses the browser's URL hash history, users can actually use the native **Back** button on their browser or phone to close the lightbox—a massive accessibility and UX win that most JS libraries struggle to implement!
