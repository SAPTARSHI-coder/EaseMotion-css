# Ease Breadcrumb Fade

A breadcrumb navigation component where items fade and slide into position sequentially, creating a subtle entrance animation for navigation paths.

## Features
- Pure CSS keyframe animations (no JS required)
- Sequential staggered entrance using `:nth-child` targeting
- Accessible semantic HTML (`nav`, `ol`, `li`, `aria-label`, `aria-current`)
- Respects `prefers-reduced-motion` settings for accessibility
- Visually appealing dark mode theme

## Implementation Notes
- The animation starts with `opacity: 0` and a slight negative X translation.
- Each list item (`li`) has a progressively larger `animation-delay` targeting it via `nth-child`.
- Uses `forwards` on the animation to maintain the final `opacity: 1` and `transform: translateX(0)` state after the animation completes.
