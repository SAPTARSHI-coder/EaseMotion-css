# Easing Curves – Visual Reference

A visual cheat sheet for every major easing function available in EaseMotion CSS. Each curve is demonstrated by a ball that moves across a track on hover.

## Easing functions shown
- **ease** – default gentle acceleration
- **ease-in** – slow start, ideal for exit animations
- **ease-out** – fast start, ideal for entrance animations
- **ease-in-out** – symmetrical slow‑fast‑slow, good for emphasis
- **linear** – constant speed (mechanical feel)
- **spring** – bouncy settle via cubic‑bezier

## EaseMotion classes used in the demo
- **Layout:** ease-container, ease-grid, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-xs, ease-text-gray-400, ease-text-sm
- **Spacing:** ease-mb-1, ease-mb-3, ease-mb-4, ease-mb-8, ease-mt-8, ease-p-4
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Each card contains a track with a small ball.
- Hovering over a card moves the ball from left to right using a CSS transition with the easing function assigned via a custom property.
- The transition duration is 2 seconds, making the difference between easings clearly visible.

## How to use
1. Open demo.html in any modern browser.
2. Hover over the tracks to see each easing in action.
3. Copy the code patterns into your own projects.
