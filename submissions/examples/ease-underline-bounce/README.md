# ease-underline-bounce – Playful Underline Bounce

A hover animation where the underline bounces with an elastic motion, adding a playful touch to navigation links or interactive text.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-xl, ease-font-semibold (via link styling)
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Each link has a ::after pseudo‑element that acts as an underline, initially scaled to scaleY(1).
- On hover, a @keyframes underline-bounce animation plays: the underline stretches upward, compresses, overshoots, and settles back to normal.
- The animation uses a cubic‑bezier timing function for a bouncy, elastic feel.
- A static variant is provided for users who prefer reduced motion.

## How to use
1. Add the class ounce-underline to any <a> or text element.
2. Copy the CSS into your project.
3. Ensure the path to easemotion.css is correct.
