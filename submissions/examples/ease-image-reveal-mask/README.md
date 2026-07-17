# ease-image-reveal-mask – Image Reveal with Clip Mask

A collection of image reveal animations using CSS clip-path animations instead of simple opacity fades. Includes diagonal wipe, circle expand, and diamond reveal.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-grid, ease-grid-cols-1, ease-md-grid-cols-3, ease-gap-6, ease-py-16
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-font-semibold
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-6
- **Components:** ease-btn, ease-btn-secondary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- Each image is wrapped in a container that has an initial clip-path set to a zero‑area shape (e.g., circle(0%) or polygon(0 0, 0 0, 0 0, 0 0)).
- JavaScript adds the class .animate after a short delay, which transitions the clip-path to a full‑size shape.
- The 	ransition property on the wrapper animates the reveal smoothly.
- Three variants are demonstrated: diagonal wipe, circle expand, and diamond.
- The "Replay Reveals" button removes and re‑applies the animation class.
- All animations respect prefers-reduced-motion, showing the full image immediately.

## How to use
1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
