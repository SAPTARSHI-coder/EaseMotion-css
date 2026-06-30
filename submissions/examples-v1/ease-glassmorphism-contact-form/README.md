# ease-glassmorphism-contact-form – Glassmorphism Contact Form

A modern contact form with a frosted glass effect (backdrop‑filter) and floating labels. Built with pure CSS and enhanced by EaseMotion utility classes.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-flex-col, ease-gap-6, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-50 (overridden by gradient)
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-white, ease-text-sm, ease-text-white/70, ease-text-white/50, ease-text-center
- **Spacing:** ease-mb-2, ease-mb-8, ease-mt-8, ease-p-8
- **Components:** ease-btn, ease-btn-primary, ease-w-full
- **Hover:** ease-hover-scale-105
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition
- **Effects:** ease-rounded-2xl, ease-shadow-2xl

## How it works

- The form card uses a semi‑transparent background and ackdrop-filter: blur() to create the glass effect.
- Each input field has a corresponding label that floats above the input when focused or filled (pure CSS using :focus and :not(:placeholder-shown) selectors).
- The colorful gradient background makes the glass effect stand out.
- All animations respect prefers-reduced-motion.

## How to use

1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
