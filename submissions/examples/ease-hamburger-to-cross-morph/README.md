# ease-hamburger-to-cross-morph – Hamburger to Cross Morph

A CSS‑only hamburger menu icon that smoothly transforms into a close (X) icon. No JavaScript required – uses a hidden checkbox and CSS transforms on three lines.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- A hidden <input type="checkbox"> stores the toggle state.
- The <label> wraps the three <span> bars, making the entire icon clickable.
- When checked, the top bar rotates 45° and moves down; the bottom bar rotates -45° and moves up; the middle bar fades out.
- All transitions are smooth (0.3s) and respect prefers-reduced-motion.

## How to use
1. Copy the HTML, CSS, and JS from demo.html into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser.
