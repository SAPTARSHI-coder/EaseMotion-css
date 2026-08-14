# ease-sliding-underline-hover – Sliding Underline Hover Effect

A pure CSS navigation link hover effect where an underline slides in from the left and exits to the right. No JavaScript required.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-gap-8, ease-flex-wrap, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Each link has an ::after pseudo‑element acting as an underline, initially hidden (scaleX(0)).
- On hover, the underline scales in from the left (	ransform-origin: left).
- When the mouse leaves, the underline scales out to the right (	ransform-origin: right), creating a sliding exit effect.
- All transitions use ease timing and respect prefers-reduced-motion.

## How to use
1. Add the class slide-underline to any link.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
