# Glowing Gradient Border Card (`ease-glow-card`)

## Overview
This submission introduces a visually striking, animation-first card component featuring a smooth, rotating gradient border. The animation intensifies and speeds up on hover, providing delightful micro-interaction feedback while maintaining a clean, modern aesthetic.

## Features
- **Pure CSS Animation**: Uses `conic-gradient` and `@keyframes` for a smooth, continuous rotation without JavaScript.
- **Hover Micro-interactions**: The card lifts slightly (`translateY`), the shadow deepens, and the gradient rotation speed doubles on hover.
- **Theming Ready**: Leverages CSS variables (`--ease-color-primary`, `--ease-color-accent`) to seamlessly adapt to the core EaseMotion theme.
- **Accessibility First**: Includes a `prefers-reduced-motion` media query to disable the rotation and transform effects for users who prefer reduced motion.

## Files Included
- `demo.html`: Interactive showcase of the card in a dark-mode environment.
- `style.css`: Clean, well-commented CSS ready for maintainer review and integration.

## How to Test
1. Ensure you are in the `submissions/examples/ease-glow-border-card-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Hover over the card to observe the border animation speed up and the card lift.

## Notes for Maintainer
- The animation duration is set to `4s` by default and `2s` on hover.
- The inner content uses a solid background to mask the center of the conic gradient, creating the "border" illusion.
- Ready to be refactored into standard `ease-*` utility classes and integrated into the `components/` directory.