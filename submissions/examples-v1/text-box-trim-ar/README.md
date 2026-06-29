# CSS Text Box Trim Leading

A demo of the experimental 	ext-box-trim property, which eliminates excess leading space at the top of the first line and bottom of the last line, enabling precise typographic alignment.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-grid, ease-gap, ease-flex-wrap, ease-py-16, ease-mx-auto
- **Background:** ease-bg-gray-50, ease-bg-white
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-2xl, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-xs, ease-text-gray-500
- **Spacing:** ease-mb-2, ease-mb-4, ease-mb-6, ease-mb-10, ease-mb-12, ease-mt-12, ease-p-6
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The 	ext-box-trim property is applied to headings and buttons to trim the top and bottom leading space.
- Side-by-side comparisons show the difference in vertical alignment.
- The property is experimental and supported in Chromium 130+.
- Graceful fallback: browsers that don't support it will simply ignore the property, and the standard text rendering will be used.

## How to use
1. Open demo.html in a modern Chromium browser (Chrome 130+ or Edge 130+) to see the effect.
2. Add 	ext-box-trim: trim-both to headings, buttons, or any text element for tighter alignment.
3. Ensure the path to easemotion.css is correct.
