# Glowing Infinite Carousel (Neumorphism Variant)

An accessible, responsive, pure-CSS infinite horizontal carousel that combines classic soft Neumorphism styling with vivid outer/inner glow state transitions.

## Features
- **Zero JavaScript Dependencies**: Infinite loop and interaction states are entirely CSS-driven.
- **EaseMotion Integration**: Utilizes standard CSS design tokens for duration curves, surface backgrounds, shadow offsets, and glow colors.
- **Accessibility Friendly**: Fully compliant with `prefers-reduced-motion: reduce` (falls back to a native scroll container) and supports keyboard focus states (`:focus-visible`).
- **Smooth Interaction**: Track animation automatically pauses on hover/focus.

## Installation & Usage
1. Copy `style.css` into your stylesheet directory or include it in your build pipeline.
2. Structure your markup matching `demo.html`, ensuring card sets are duplicated inside `.carousel-track` to maintain a seamless CSS infinite keyframe loop.
