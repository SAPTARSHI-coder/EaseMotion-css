# ease-button-success-state – Button Success Morph

Button transitions through a state machine: idle → loading (spinner) → success (green + checkmark) → back to idle.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- On click, JavaScript adds .is-loading → shows a CSS spinner, greys the button.
- After 1.5s, .is-loading is replaced by .is-success → button turns green, checkmark scales in.
- After 2s of success, the button reverts to its idle state.
- All transitions are smooth via CSS and respect prefers-reduced-motion.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
