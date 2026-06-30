# ease-animated-tooltip-bounce – CSS‑Only Bouncing Tooltip

A tooltip that appears with a playful bounce animation when hovering over a trigger element. Purely CSS – no JavaScript required.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- The tooltip is a <span> positioned absolutely above the button, hidden by default (isibility: hidden, opacity: 0).
- On hover of the wrapper, the tooltip becomes visible and plays the ooltip-bounce keyframe: it slides up slightly, overshoots past its final position, and settles back.
- The arrow triangle is created with a ::after pseudo‑element using borders.
- All animations respect prefers-reduced-motion, falling back to a simple fade in.

## How to use

1. Copy the HTML and CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser and hover over the button.
