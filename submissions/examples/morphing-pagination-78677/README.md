# Morphing Pagination

Documentation showcase for EaseMotion CSS issue #78677.

## Overview

This example demonstrates a CSS-only pagination component with rounded controls that morph into circular active and interaction states. The markup remains semantic while the visual treatment is handled entirely by CSS.

## Structure

```text
submissions/examples/morphing-pagination-78677/
├── demo.html
├── style.css
└── README.md
```

## Features

- Semantic pagination navigation.
- Current-page indication with `aria-current`.
- Previous and next labels for screen readers.
- Rounded-to-circular morphing states.
- Keyboard-visible focus styling.
- Responsive control sizing.
- Reduced-motion support.

## Usage

Open `demo.html` directly or copy the `<nav>` structure into an application. Replace the example fragment targets with real page URLs or application routes.

## Accessibility

Pagination is exposed through a labelled `<nav>` element. Each control remains a native anchor and therefore works with keyboard navigation and normal browser navigation. The active page uses `aria-current="page"`.

## Responsive Behavior

The control wraps when necessary and reduces button dimensions on narrow screens. The spacing remains consistent so the controls remain easy to identify and operate.

## Customization

Update the custom properties in `style.css` to change the background, text, accent, and focus colors. Adjust the transition timing if the component needs to match a larger design system.

## Motion

The morphing effect is produced with transitions on border radius, transform, background, and color. The `prefers-reduced-motion` media query removes those transitions when requested by the user.

## Files

- `demo.html` — complete semantic pagination example.
- `style.css` — layout, morphing states, responsive rules, and accessibility styling.
- `README.md` — implementation and integration notes.
