# ease-card-skeleton-pulse – Full Card Skeleton with Pulse

A card skeleton loading component that uses a breathing (opacity oscillation) effect instead of a shimmer sweep. Lightweight and simple.

## EaseMotion classes used
- **Layout:** ease-container, ease-grid, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Components:** ease-card
- **Spacing:** ease-p-4, ease-gap-8, ease-py-16, ease-mb-8, ease-mt-8
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-center, ease-text-sm, ease-text-gray-400
- **Animation:** ease-fade-in, ease-delay-500

## How it works
- Uses @keyframes skeleton-pulse that oscillates opacity between 1 and 0.4.
- Custom property --ease-skeleton-pulse-speed controls speed (default 1.5s).
- Each skeleton block (image, title, text, button) is a simple grey rectangle with border-radius.
- Staggered delays create a subtle cascading breath.
- Respects prefers-reduced-motion by freezing the animation.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
