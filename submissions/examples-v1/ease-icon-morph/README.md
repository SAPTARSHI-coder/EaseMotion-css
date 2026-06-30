# ease-icon-morph – Play/Pause Icon Morph

A CSS clip‑path icon morph between play (triangle) and pause (two vertical bars), triggered by a class toggle. Common media player UI pattern.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- Two absolutely positioned white shapes sit inside a circular blue button.
- The play icon uses clip-path: polygon(0 0, 100% 50%, 0 100%) for a triangle.
- The pause icon uses a compound polygon for two vertical bars.
- Clicking toggles .is-paused on the button, which swaps opacity and animates clip‑path.
- Transitions are smooth via cubic-bezier easing and respect prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
