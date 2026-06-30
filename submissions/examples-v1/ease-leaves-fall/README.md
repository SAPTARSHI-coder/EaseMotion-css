# ease-leaves-fall – Autumn Leaves Falling

A seasonal animation: leaf‑shaped elements drift downward with rotation and horizontal sway, simulating autumn leaves falling. Great for nature‑themed pages, seasonal decorations, or ambient background effects.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-2, ease-mb-8, ease-mt-6
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- JavaScript injects leaf emojis at random horizontal positions with custom properties for fall duration, sway distance, and rotation.
- The @keyframes leaf-fall animates ranslateY from top to bottom, while ranslateX oscillates left/right using the custom property --sway-distance, and
  otate turns the leaf gradually.
- Each leaf has a random speed and drift, creating a natural, varied look.
- Leaves are removed from the DOM after their animation ends to avoid memory buildup.
- The animation respects prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
