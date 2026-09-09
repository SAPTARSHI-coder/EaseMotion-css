# ease-toast-progress-bar – Toast with Countdown Progress Bar

A toast notification with a thin progress bar that depletes over the toast's display duration, showing time remaining before auto-dismiss.

## EaseMotion classes used
- **Layout:** ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-100
- **Components:** ease-card, ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105, ease-hover-text-gray-600
- **Animation:** ease-fade-in, ease-transition
- **Typography:** ease-font-semibold, ease-text-sm, ease-text-lg

## How it works
- Clicking "Show Toast" reveals the toast and starts a 4‑second width transition from 100% to 0%.
- When the progress bar reaches 0%, the toast auto‑dismisses.
- The progress bar pauses on hover (optional enhancement).
- A manual dismiss button is also provided.

## How to use
1. Copy demo.html and style.css into your project.
2. Ensure the path to easemotion.css is correct (usually from core/).
3. Open demo.html in any modern browser.
