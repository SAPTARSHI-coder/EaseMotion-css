# ease-flip-out-y – 3D Flip Exit on Y Axis

An exit animation where an element flips away around its vertical axis (rotateY) and fades out. Often paired with ease-flip-in-y for a complete card flip sequence.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-2xl, ease-font-semibold
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Hover Effects:** ease-hover-shadow-xl
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition
- **Interactivity:** ease-cursor-pointer, ease-select-none

## How it works
- The card wrapper has perspective set on the body (or any ancestor) to enable 3D space.
- On click, JavaScript adds the class lip-out to the card.
- The @keyframes flip-out-y rotates the element from otateY(0deg) to otateY(90deg) while fading opacity from 1 to 0.
- The animation lasts 0.5 seconds and is removed after completion, allowing the element to be re‑used.
- Respects prefers-reduced-motion by instantly hiding the element.

## How to use
1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
