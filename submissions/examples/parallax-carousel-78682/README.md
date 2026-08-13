# Parallax Carousel

Documentation showcase for EaseMotion CSS issue #78682.

## Overview

This example presents a lightweight horizontal carousel built with CSS Grid, horizontal scrolling, scroll snapping, layered gradients, and a subtle hover lift. It does not require a JavaScript carousel library for the visual showcase.

## Structure

```text
submissions/examples/parallax-carousel-78682/
├── demo.html
├── style.css
└── README.md
```

## Features

- Horizontal scroll layout.
- CSS scroll snapping.
- Responsive card widths.
- Layered gradient surfaces.
- Hover depth effect.
- Reduced-motion fallback.
- Semantic article content.

## Usage

Open `demo.html` directly or replace the example cards with product, project, article, or portfolio content. The carousel can be placed inside a wider page without changing the card structure.

## Responsive Behavior

Desktop layouts show multiple cards at once. Narrow screens increase the visible card width so users can identify the next item and naturally continue horizontal scrolling.

## Accessibility

Each card uses semantic article markup and meaningful text. The carousel section has an accessible label. For a production interactive carousel with controls, add explicit previous/next buttons and update the accessible state as slides change.

## Motion

The hover lift uses a short transform transition. `prefers-reduced-motion` disables the transition for users who request less motion.

## Customization

Change the gradient definitions, card dimensions, gap, border, and shadow values in `style.css`. The grid uses `grid-auto-columns` so the number of visible cards can be adjusted without rewriting the markup.

## Files

- `demo.html` — complete carousel content and semantic structure.
- `style.css` — scrolling layout, depth treatment, responsive behavior, and motion.
- `README.md` — implementation and integration documentation.
