# ease-notification-slide-stack – Notification Slide Stack

A notification stack where new items slide in from the top while existing items smoothly shift downward using the FLIP technique.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-6, ease-mb-8, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Hover Effects:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works

- New notifications are prepended to the container with initial opacity: 0 and ranslateY(-20px).
- Adding .visible transitions them to full opacity and normal position.
- Before adding a new item, JavaScript records the bounding rectangles of existing items.
- After insertion, it calculates the positional difference and applies an inverse ranslateY to each item, then smoothly animates it to zero — this is the FLIP technique.
- Notifications auto‑dismiss after 4 seconds or on close button click.
- The animation respects prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
