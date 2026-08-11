# ease-image-lazy-load-blur – Blur‑up Image Load

A classic LQIP (Low‑Quality Image Placeholder) pattern: an image starts heavily blurred and transitions to sharp once it finishes loading.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-8, ease-mt-4, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200

## How it works
- The image initially has ilter: blur(20px) and a subtle scale‑up to hide rough edges.
- When the browser fires the load event, JavaScript adds the class .ease-loaded to the <img> tag.
- The CSS transition then smoothly removes the blur and scales the image back to normal.
- Respects prefers-reduced-motion by immediately showing the sharp image without animation.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
