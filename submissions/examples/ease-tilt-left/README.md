# ease-tilt-left – Tilt Left

A subtle hover animation: the element rotates a few degrees to the left using a customisable angle via --ease-tilt-deg.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-mx-auto
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-lg, ease-font-semibold, ease-text-sm, ease-text-gray-400, ease-text-gray-500
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-2, ease-mt-8, ease-p-8
- **Components:** ease-card
- **Hover Effects:** ease-hover-shadow-xl
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500, ease-transition

## How it works
- The card starts at otate(0deg) with a smooth transition.
- On hover, it rotates to the value of --ease-tilt-deg (default -5deg).
- The rotation reverses when the cursor leaves.
- Respects prefers-reduced-motion by disabling the effect.

## How to use
1. Add the class 	ilt-left-card to any element.
2. Override --ease-tilt-deg to change the tilt angle.
3. Copy style.css into your project and ensure the path to easemotion.css is correct.
