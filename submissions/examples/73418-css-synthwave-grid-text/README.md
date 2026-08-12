# CSS Synthwave Grid Line Text

## Overview

Issue #73418 demonstrates a synthwave-inspired text animation using CSS grid lines, neon color, and a moving horizon highlight.

## Features

- Synthwave grid background
- Neon text glow
- Animated horizon highlight
- Responsive typography and layout
- Semantic HTML
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The grid is produced with layered linear gradients while the text uses a restrained background highlight and text-shadow. The animation is limited to the decorative layer so the surrounding layout remains stable.

## Accessibility

The effect is applied to real HTML text. Reduced-motion users receive a static presentation through `prefers-reduced-motion`.

## Responsive behavior

Cards and supporting facts stack on smaller screens. Fluid heading sizes keep the display readable without overflowing narrow viewports.

## Files

- `demo.html` — synthwave text showcase
- `style.css` — grid, glow, animation, and responsive styling
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73418.
