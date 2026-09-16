# Dynamic Hero Section

Documentation showcase for EaseMotion CSS issue #78669.

## Overview

This example presents a responsive hero section designed around strong typography, layered gradients, focused calls to action, and a restrained entrance animation. It is implemented with semantic HTML and CSS without a JavaScript dependency.

## Structure

```text
submissions/examples/dynamic-hero-section-78669/
├── demo.html
├── style.css
└── README.md
```

## Features

- Responsive headline sizing with `clamp()`.
- Layered radial-gradient lighting.
- Primary and secondary calls to action.
- Keyboard-visible focus states.
- Compact component metadata chips.
- Mobile action layout.
- Reduced-motion fallback.

## Usage

Open `demo.html` directly in a browser, or copy the hero section into an existing page and include `style.css`.

Replace the sample action targets with real destinations. The component can also be adapted to include an illustration, product preview, or supporting navigation without changing its core layout model.

## Accessibility

The hero uses a labelled semantic section and normal anchor elements for navigation. Focus indicators remain visible for keyboard users, and the animation is disabled when the user has requested reduced motion through the operating system.

## Responsive Behavior

The desktop layout keeps the content centered with generous whitespace. At narrow widths, the actions become full-width stacked controls and the hero padding is reduced so the content remains comfortable on small screens.

## Customization

The primary visual values are exposed as CSS custom properties in `style.css`. Adjust the background, text, accent, and border variables to match an application's design system.

## Files

- `demo.html` — complete semantic hero showcase.
- `style.css` — layout, visual effects, responsive behavior, and motion.
- `README.md` — implementation, usage, and accessibility notes.
