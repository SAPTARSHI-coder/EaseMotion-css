# ease-circle-draw – SVG Circle Draw Animation

An SVG circle that progressively draws its outline using stroke-dashoffset animation. Often paired with checkmark or cross icons for completion/error states.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-gap-8, ease-flex-wrap
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-2, ease-mb-8, ease-mt-8
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- The circle uses stroke-dasharray equal to the circumference (2π × 40 ≈ 251.2).
- stroke-dashoffset starts at the same value (fully hidden) and animates to 0 (fully drawn).
- A custom property --ease-circle-draw-speed controls the duration (default 1.2s).
- Checkmarks and crosses follow with their own stroke-dashoffset animations after the circle finishes.
- All animations respect prefers-reduced-motion.

## How to use
1. Use <circle class="ease-circle-draw" cx="50" cy="50" r="40" fill="none" stroke="..." stroke-width="..." /> in any SVG.
2. Adjust stroke-dasharray to match your circle's circumference.
3. Optionally set --ease-circle-draw-speed to change the draw speed.
