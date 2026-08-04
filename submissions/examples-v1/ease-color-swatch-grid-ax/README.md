# ease-color-swatch-grid – Color Selection Grid

A CSS‑only color swatch grid with animated selection feedback. Each swatch is a radio input styled as a colored circle; when selected, a ring scales in and a checkmark appears.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-gap-4, ease-flex-wrap
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Hidden radio inputs are paired with a <label> containing a <span> for the colored circle.
- The :checked pseudo‑class applies a white ring + colored outer ring via ox-shadow, and a checkmark via ::after.
- The checkmark has a pop‑in animation (check-pop) that overshoots slightly.
- Hover increases the swatch size and adds a soft blue halo.
- All animations respect prefers-reduced-motion.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
