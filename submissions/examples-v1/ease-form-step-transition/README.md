# ease-form-step-transition – Multi‑Step Form Transitions

A CSS‑driven multi‑step form with directional transitions: forward steps slide in from the right while fading in, and backward steps slide in from the left.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-max-w-lg, ease-gap-3
- **Background:** ease-bg-gray-50, ease-bg-white
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-lg, ease-font-semibold
- **Spacing:** ease-mb-3, ease-mb-4, ease-mb-6, ease-mb-8, ease-mt-8, ease-p-6
- **Components:** ease-card, ease-btn, ease-btn-primary, ease-btn-ghost, ease-input
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500
- **Interactivity:** ease-cursor-pointer

## How it works

- Hidden radio inputs track the current step.
- Each step panel is absolutely positioned and hidden. When its radio is selected, it becomes visible and slides into view.
- Forward transitions use ranslateX(30px) → 0, backward transitions use ranslateX(-30px) → 0.
- Step dots at the top indicate progress and are clickable.
- All animations respect prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
