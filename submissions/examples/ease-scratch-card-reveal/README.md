# ease-scratch-card-reveal – CSS‑Only Scratch Card

A pure CSS scratch card effect where hovering over the card reveals a hidden prize. No JavaScript – uses mix-blend-mode and opacity transitions.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-bold, ease-text-white, ease-text-sm, ease-font-semibold, ease-text-gray-200, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The card has two layers: a prize text (bottom) and an overlay (top) that obscures it.
- The overlay uses mix-blend-mode: multiply to blend with the background, hiding the prize.
- On hover, the overlay's opacity transitions to 0, revealing the prize, and the blend mode is reset to normal for a clean reveal.
- All interactions are purely CSS – no JavaScript required.
- Respects prefers-reduced-motion by removing transitions.

## How to use
1. Copy the HTML and CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser and hover over the card.
