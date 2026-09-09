# ease-loading-ellipsis – Animated Ellipsis

A pure CSS text effect that cycles through ., .., ... to create a classic loading indicator. No JavaScript required.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The ::after pseudo‑element uses a @keyframes animation that cycles through different content values: '.', '..', '...', and an empty string.
- The animation runs infinitely with steps(1, end) to instantly switch between states, creating the appearance of a moving ellipsis.
- When prefers-reduced-motion is enabled, the animation is disabled and the ellipsis shows as ... static.

## How to use
1. Add the class ease-loading-ellipsis to any element that follows a loading text.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
