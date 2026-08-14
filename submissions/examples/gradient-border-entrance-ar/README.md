# Gradient Border Entrance Animation

A CSS-only animated gradient border that sweeps into view using a conic gradient and then continuously shifts colors via hue rotation. Ideal for featured cards, hero accents, or CTA emphasis.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The card has a ::before pseudo‑element that creates the gradient border (inset with negative margin).
- The border first fades in and scales up (order-entrance keyframe).
- After the entrance, a hue-rotate animation runs continuously, cycling the gradient colors.
- The effect respects prefers-reduced-motion by showing a static, fully‑visible gradient border.

## How to use
1. Add the class gradient-border-card to any container.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
