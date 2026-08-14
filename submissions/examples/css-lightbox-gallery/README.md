# CSS-Only Interactive Lightbox Gallery

An interactive image gallery where clicking a thumbnail smoothly expands the image into a full-screen lightbox overlay, built entirely without JavaScript.

## Features

- **No JavaScript:** Built 100% with HTML and CSS using the `:target` pseudo-class.
- **Responsive Grid:** Utilizes CSS Grid for a fluid thumbnail layout that adapts to any screen size.
- **Glassmorphism:** Premium frosted glass effect for the lightbox background overlay.
- **Animations:** Smooth transitions for hovering thumbnails and expanding images using cubic-bezier curves for a natural feel.
- **Click-to-close:** Allows closing the lightbox by clicking the close button or anywhere on the transparent overlay background.

## How it Works

The gallery relies on the CSS `:target` pseudo-class. 
1. Thumbnails are wrapped in anchor tags pointing to specific IDs (e.g., `<a href="#img1">`).
2. Lightbox overlays are created with corresponding IDs and are hidden by default (`opacity: 0`, `pointer-events: none`).
3. When an anchor is clicked, the URL hash changes, triggering the `:target` state on the corresponding lightbox overlay.
4. CSS handles the animation into view and enables pointer events.
5. The close button and transparent background overlay link back to `#`, clearing the target state and hiding the lightbox smoothly.
