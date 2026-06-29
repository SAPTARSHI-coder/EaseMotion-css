# ease-wizard-spell – Wizard Spell Animation

A pure CSS animation of a magical spell being cast. Hovering over the wand causes a glowing orb to burst into existence and sparkles to fly outward, mimicking a fantasy spell effect.

## EaseMotion Classes Used in Demo
- **Layout:** `ease-container`, `ease-flex`, `ease-items-center`, `ease-justify-center`, `ease-min-h-screen`
- **Background:** `ease-bg-gray-900`
- **Typography:** `ease-text-4xl`, `ease-font-bold`, `ease-text-white`, `ease-text-gray-400`, `ease-text-sm`, `ease-text-gray-500`
- **Spacing:** `ease-mb-4`, `ease-mb-8`, `ease-mt-8`
- **Hover Effects:** `ease-hover-scale-105`
- **Animations:** `ease-fade-in`, `ease-delay-200`, `ease-delay-500`, `ease-transition`

## How It Works
- The wand is centered in a relative container.
- On hover of the container, a glowing orb scales up from nothing using a springy cubic-bezier transition.
- Five sparkle elements fly outward to different positions with staggered delays.
- All effects are pure CSS transitions — no JavaScript.
- The animation respects `prefers-reduced-motion`.

## How to Use
1. Add the HTML structure (wand, orb, sparkles) to your project.
2. Copy the CSS from `style.css`.
3. Ensure the path to `easemotion.css` is correct.