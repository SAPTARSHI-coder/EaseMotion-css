# ease-icon-spin-hover – Icon Spin on Hover

A simple, satisfying micro-interaction: an icon performs a full 360° rotation when hovered. Ideal for refresh, settings, or loading icons.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-gap-10, ease-flex-wrap
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-font-semibold
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- The icon is an inline element with display: inline-block to allow transforms.
- On hover, the class .ease-icon-spin-hover:hover triggers a @keyframes icon-spin that rotates from 0° to 360° in 0.6s.
- After the mouse leaves, a base ransition on the icon provides a smooth return to its original orientation.
- The animation respects prefers-reduced-motion.

## How to use

1. Add the class ease-icon-spin-hover to any icon element (emoji, SVG, etc.).
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
