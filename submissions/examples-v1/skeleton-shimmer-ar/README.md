# Skeleton Loading Shimmer Effect

A CSS-only skeleton loading placeholder with a diagonal shimmer animation that sweeps across placeholder shapes. Ideal for content loading states, card placeholders, and list skeletons.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-grid, ease-gap-6, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8, ease-p-6
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Each placeholder shape (image, title, text) uses a linear-gradient with multiple stops (light-to-dark-to-light) and a doubled ackground-size.
- The ackground-position is animated from left to right, creating a continuous shimmer sweep.
- Shapes have different widths and heights to mimic real content.
- The animation respects prefers-reduced-motion by showing a static solid placeholder.

## How to use
1. Copy the HTML and CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
