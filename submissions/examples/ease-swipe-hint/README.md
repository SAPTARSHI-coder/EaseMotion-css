# ease-swipe-hint – Swipe Hint Animation

A subtle one‑time card oscillation that hints the element can be swiped. Common in mobile onboarding (Tinder‑style) to teach users a gesture.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-h-32
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-2xl
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-6, ease-mt-8, ease-p-6
- **Components:** ease-card, ease-btn, ease-btn-secondary, ease-max-w-sm
- **Hover Effects:** ease-hover-scale-105, ease-hover-shadow-xl
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- On page load (and on button click), JavaScript adds the class swipe-hint to the card.
- The @keyframes swipe-hint moves the card left‑right several times with decreasing amplitude, simulating a gentle nudge.
- The animation plays **only once** (nimation-iteration-count: 1) and respects prefers-reduced-motion.
- A “Replay Hint” button lets the user see the hint again.

## How to use
1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
