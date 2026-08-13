# ease-card-3d-shadow – 3D Card Shadow

A card hover effect that mimics a 3D light source. The shadow shifts and deepens as the card tilts slightly, creating a premium, tactile feel.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto, ease-py-16
- **Background:** ease-bg-gray-100
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-text-xl, ease-font-semibold, ease-text-gray-600
- **Spacing:** ease-mb-2, ease-mb-4, ease-mb-8, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The card container has perspective to enable 3D space.
- On hover, the inner card is rotated slightly (otateX and otateY) and receives a layered ox-shadow that creates the illusion of directional lighting.
- Multiple shadow layers produce depth: a main angled shadow, a subtle highlight on the opposite edge, and a soft bottom shadow for lift.
- All transitions are smooth (0.3s) and respect prefers-reduced-motion.

## How to use
1. Add the .card-3d and .card-3d-inner structure to your project.
2. Copy style.css or integrate the rules into your stylesheet.
3. Ensure the path to easemotion.css is correct.
