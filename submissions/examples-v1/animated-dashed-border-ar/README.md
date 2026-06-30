# Animated Dashed Border (Marching Ants)

A CSS-only animated dashed border effect where the dashes appear to march continuously along the border. Ideal for loading skeletons, selection indicators, or interactive hover feedback.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- A ::before pseudo‑element is positioned over the card.
- It uses four
  epeating-linear-gradient strips to create dashed lines along each edge.
- The ackground-position of these strips is animated to move them along the border, simulating marching ants.
- On hover, the animation runs continuously; on reduced motion, it falls back to a static dashed border.

## How to use

1. Add the class marching-border-card to any container.
2. Copy style.css into your project.
3. Ensure the path to easemotion.css is correct.
