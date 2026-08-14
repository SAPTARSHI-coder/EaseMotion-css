# CSS Micro-interaction Collection

A collection of 20 reusable CSS-only micro-interactions for common UI states and user interactions.

## Features

- 20 independent micro-interactions
- Pure CSS implementation
- No JavaScript or external dependencies
- CSS custom properties for easy theming
- Light and dark mode support
- Responsive demo layout
- Accessible semantic markup
- Reduced-motion support
- Clear comments explaining key animation techniques

## Included Interactions

1. Lift Button
2. Glow Button
3. Underline Reveal
4. Icon Nudge
5. Ripple-style Hover
6. Border Draw
7. Shimmer Text
8. Bounce Badge
9. Shake Error
10. Pulse Indicator
11. Rotate Icon
12. Scale Card
13. Tilt Card
14. Color Shift
15. Slide Reveal
16. Dot Loading
17. Checkmark Success
18. Notification Bell
19. Heart Like
20. Tooltip Reveal

## Usage

Include `style.css` in your project and copy the markup for the interaction you want from `demo.html`.

Each interaction uses a dedicated class so individual effects can be reused without requiring JavaScript.

## Theming

CSS custom properties are defined in `:root` and can be overridden to customize the collection.

The demo also supports light and dark color schemes using `prefers-color-scheme`.

## Accessibility

The demo uses semantic HTML and accessible labels where appropriate.

Animations respect `prefers-reduced-motion` so users who prefer reduced motion do not receive continuous or unnecessary animation.

## Browser Support

Requires a modern browser with support for CSS custom properties, transitions, transforms, animations, and related CSS features.