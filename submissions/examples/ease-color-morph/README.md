# ease-color-morph – Color Morph Animation

A background color cycling animation that smoothly transitions through a sequence of colors in an infinite loop.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-white, ease-font-semibold, ease-text-lg
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Effects:** ease-rounded-xl, ease-shadow-lg
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The box uses a @keyframes animation with multiple background color stops (blue → purple → pink → orange → blue).
- The animation runs for 6 seconds with ease-in-out timing and repeats infinitely.
- Colors can be customised by editing the keyframes or overriding with a custom variable.
- The effect respects prefers-reduced-motion.

## How to use
1. Add the class morph-box to any container to apply the color cycle.
2. To change colors, edit the @keyframes color-morph stops in your stylesheet.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
