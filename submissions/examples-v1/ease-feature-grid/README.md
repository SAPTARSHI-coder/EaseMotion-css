# ease-feature-grid – Animated Feature Showcase Grid

A responsive grid of feature cards with staggered entrance animations and subtle icon hover effects. Ideal for landing page “Why Choose Us” sections.

## EaseMotion classes used

- **Layout:** ease-container, ease-grid, ease-grid-cols-1, ease-md-grid-cols-2, ease-lg-grid-cols-4, ease-gap-6, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-8, ease-p-6
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- Each card uses a CSS animation eature-fade-up that fades in and slides up.
- th-child selectors apply staggered delays, creating a wave effect as cards appear.
- Icons scale up slightly and rotate on hover for a playful micro‑interaction.
- The animation respects prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
