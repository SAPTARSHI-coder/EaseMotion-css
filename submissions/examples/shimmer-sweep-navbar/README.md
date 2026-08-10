# CSS Shimmer-Sweep Navbar for Fintech Dashboard Layouts

A lightweight, responsive fintech dashboard navigation example featuring a subtle CSS shimmer-sweep interaction effect.

The component uses semantic HTML and pure CSS with no JavaScript dependency. The shimmer effect is triggered on navigation-link hover and focus, while the surrounding dashboard layout demonstrates how the navbar can fit into a modern financial interface.

## Features

- Pure HTML and CSS
- No JavaScript required
- No external JavaScript frameworks
- Responsive fintech dashboard navigation
- CSS shimmer-sweep hover effect
- Keyboard-friendly navigation
- Visible `:focus-visible` states
- Sticky desktop navbar
- Responsive horizontal navigation on smaller screens
- Responsive mobile layout
- Fintech dashboard metric cards
- Recent transactions section
- Portfolio performance visualization
- `prefers-reduced-motion` support
- EaseMotion utility class integration
- Customizable CSS custom properties
- Scoped component selectors using the `-ssnf` suffix

## Accessibility

The component includes:

- Semantic `<nav>` markup
- Descriptive `aria-label` for primary navigation
- `aria-current="page"` for the active navigation item
- A keyboard-accessible skip link
- Visible `:focus-visible` navigation states
- Accessible link text
- Reduced-motion support
- No JavaScript dependency

The shimmer animation is also triggered on `:focus-visible`, ensuring keyboard users receive the same visual feedback as pointer users.

## Notes

This implementation intentionally uses pure HTML and CSS. The shimmer effect is interaction-driven and does not run continuously, avoiding unnecessary animation when the navbar is idle.

The active navigation state is represented with `aria-current="page"` and the `nav-link-active-ssnf` class. In a production application, the active state should be updated by the application's routing system.