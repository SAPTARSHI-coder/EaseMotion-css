# ease-focus-aura-collection – Animated Focus Aura Collection

Four accessible, animated focus indicators built with the outline-offset property. All effects activate on :focus-visible, keeping the actual browser focus ring for accessibility while adding beautiful motion.

## Effects

1. **Expanding Aura** – outline starts inside the element and expands outward.
2. **Pulse Ring** – after the initial expansion, the outline pulses like sonar.
3. **Inset-to-Outset Sweep** – outline sweeps from inside to outside with a color transition.
4. **Neon Glow Aura** – combines animated outline-offset with a matching ox-shadow for a layered glow.

## EaseMotion classes used

- **Layout:** ease-container, ease-flex, ease-flex-col, ease-gap-6, ease-items-center, ease-justify-center, ease-min-h-screen, ease-py-16
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400
- **Spacing:** ease-mb-4, ease-mb-8, ease-mt-8
- **Components:** ease-btn, ease-btn-primary
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works

- Each focusable element uses a custom class that defines a unique @keyframes animation.
- The outline-offset property is animated from negative to positive values, creating an “aura” effect.
- All animations are gated behind :focus-visible (keyboard navigation) to avoid distracting mouse users.
- prefers-reduced-motion ensures the outline remains visible but static.

## How to use

1. Copy the HTML and CSS into your project.
2. Ensure the path to easemotion.css is correct.
3. Open demo.html in any modern browser and tab through the buttons.
