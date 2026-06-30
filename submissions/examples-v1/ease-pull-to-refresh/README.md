# ease-pull-to-refresh – Pull to Refresh Spinner

A pull‑to‑refresh indicator that reacts to a CSS custom property --ease-pull-progress (0–1). As the user pulls down, the ring fills and the arrow rotates and scales.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-block, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-font-semibold
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-w-64
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- A slider (simulating touch distance) updates --ease-pull-progress via JavaScript.
- The ring’s stroke-dashoffset is calculated as circumference × (1 − progress), making it fill as progress increases.
- The arrow rotates up to 180° and scales slightly with progress.
- In a real implementation, a touch‑move listener would set the custom property.
- All animations respect prefers-reduced-motion.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. In your own code, set --ease-pull-progress on the .ptr-spinner element based on touch distance.
3. Ensure the path to easemotion.css is correct.
