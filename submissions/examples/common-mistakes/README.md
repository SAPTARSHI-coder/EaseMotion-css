# Common Mistakes – EaseMotion Anti‑Patterns

A documentation resource that illustrates four frequent mistakes when using EaseMotion CSS, along with the correct approaches. Each anti‑pattern is presented as a card with a live demo comparison.

## Anti‑Patterns covered

1. **Animating non‑GPU properties** – using left/	op instead of 	ransform: translate().
2. **Forgetting nimation-fill-mode** – missing orwards causes snap‑back.
3. **Hard‑coding styles** – overriding component colors directly instead of using --ease-* CSS variables.
4. **Stacking conflicting animation classes** – applying two classes that both animate opacity/	ransform.

## EaseMotion classes used in the demo
- **Layout:** ease-container, ease-grid, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-gap-4, ease-gap-6, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-8, ease-p-6
- **Components:** ease-card, ease-btn, ease-btn-primary, ease-btn-ghost, ease-badge
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How to use
1. Open demo.html in any modern browser to see the comparisons.
2. Copy the corrected patterns into your own projects.
3. Ensure the path to easemotion.css is correct.
