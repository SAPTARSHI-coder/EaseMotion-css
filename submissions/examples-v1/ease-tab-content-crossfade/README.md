# ease-tab-content-crossfade – Tab Content Crossfade

Smooth crossfade between tab panels using absolute positioning and opacity transitions. No layout jump, pairs with the ease-tabs-underline component.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-max-w-lg
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold, ease-text-gray-600
- **Spacing:** ease-mb-2, ease-mb-6, ease-mt-6, ease-p-6, ease-pl-5
- **Components:** ease-card, ease-tabs-underline, ease-list-disc
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Tab buttons use the ease-tabs-underline class for the active underline indicator.
- All tab panels are absolutely positioned on top of each other with opacity: 0 and isibility: hidden.
- The active panel is switched to position: relative (so it takes up natural space) and given opacity: 1.
- The transition on opacity and visibility creates a smooth crossfade.
- The approach avoids layout jumps because the container maintains a fixed min-height and only the active panel contributes to the flow.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
