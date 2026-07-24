# ease-gradient-x – Horizontal Gradient Shift
Background gradient continuously shifts horizontally between two colors using custom properties.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-white, ease-font-semibold, ease-text-lg
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Effects:** ease-rounded-xl, ease-shadow-lg
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Uses ackground-size: 200% 100% and animates ackground-position from 0% to 100% and back.
- Colors are set via --ease-grad-from and --ease-grad-to.
- Respects prefers-reduced-motion.

## How to use
1. Add the class gradient-box to any container.
2. Optionally override --ease-grad-from and --ease-grad-to.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
