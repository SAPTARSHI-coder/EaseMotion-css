# Animated Brutalist Datepicker

A responsive datepicker calendar concept with a bold brutalist visual style and lightweight CSS motion.

## Features

- Pure HTML and CSS
- No JavaScript dependencies
- Responsive calendar layout
- Brutalist borders and offset shadows
- Animated calendar entrance
- Interactive day and navigation-button states
- Keyboard-focus indicators
- `prefers-reduced-motion` support
- `forced-colors` support
- Uses configurable EaseMotion-style timing variables

## Animation

The calendar uses a short entrance animation that combines opacity, vertical movement, and a subtle rotation.

Interactive controls use CSS transitions for:

- Hover movement
- Offset shadows
- Background changes
- Active-state feedback

The motion is intentionally short so the interface remains responsive rather than decorative for decoration's sake.

## Responsive behavior

The layout adapts at smaller viewport widths:

- Header content changes from horizontal to vertical.
- Calendar spacing is reduced.
- Typography scales using `clamp()`.
- Footer content stacks vertically on narrow screens.

## Accessibility

The demo includes:

- Semantic heading structure
- Native `<button>` elements for interactive controls
- Accessible labels for month navigation
- `aria-current="date"` for the current date
- Visible `:focus-visible` indicators
- `prefers-reduced-motion: reduce`
- `forced-colors: active` support

## Files

```text
animated-datepicker-brutalism/
├── demo.html
├── style.css
└── README.md