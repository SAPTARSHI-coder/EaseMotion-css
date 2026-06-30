# ease-achievement-unlock – Achievement Badge Unlock Animation

A badge that swings in, glows, and settles — simulating an achievement unlock notification. Suitable for gamified UIs.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-900
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-white, ease-text-gray-400, ease-text-xl, ease-text-sm, ease-text-gray-500
- **Spacing:** ease-mb-6, ease-mb-8, ease-mt-4, ease-mt-8, ease-mb-10
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- On button click, JavaScript adds .badge-unlocked to the badge wrapper.
- The wrapper transitions from scale(0) rotate(-15deg) to scale(1) rotate(0deg) (swing-in).
- The emoji bounces in with a slight delay.
- A concentric glow ring expands and fades out.
- Title and subtitle fade in last.
- All animations respect prefers-reduced-motion.

## How to use

1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
