# ease-infinite-scroll-loader – Infinite Scroll Loader

A loading indicator that appears at the bottom of a list when more content is being fetched. Suitable for infinite‑scroll feeds, social media timelines, and article lists.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-max-w-md
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-2, ease-mb-6, ease-mt-2, ease-mt-4, ease-mt-6, ease-mb-4, ease-mb-3, ease-p-4
- **Components:** ease-card, ease-btn, ease-btn-secondary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- The loader is a container with a CSS spinner and a “Loading more…” message.
- It is hidden by default (opacity: 0, isibility: hidden). JavaScript adds the .show class to fade it in.
- A “Load More” button simulates fetching new items. After a short delay, new list items are appended and the loader fades out.
- A scroll listener also triggers loading when the button is near the viewport.
- When no more pages are available, the loader disappears and an end‑of‑list message appears.
- The animation respects prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
