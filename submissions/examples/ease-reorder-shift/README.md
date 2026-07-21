# ease-reorder-shift – Smooth Reorder Animation (FLIP)

List items animate smoothly to new positions when reordered (via move buttons or shuffle). Uses the classic FLIP (First‑Last‑Invert‑Play) technique to avoid layout jumps.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-font-semibold
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8, ease-gap-4, ease-mb-3, ease-p-4
- **Components:** ease-card, ease-btn, ease-btn-secondary, ease-btn-ghost, ease-btn-sm
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-transition

## How it works
- **First:** JavaScript records the bounding rectangles of all list items before the DOM change.
- **Last:** The DOM is modified (item moved up/down or shuffled).
- **Invert:** For each item, the difference between old and new positions is calculated and applied as a 	ransform: translate(dx, dy) instantly (no transition).
- **Play:** The transform is removed with a CSS transition, causing the item to smoothly slide into its new place.
- The technique respects prefers-reduced-motion and uses will-change for performance.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
