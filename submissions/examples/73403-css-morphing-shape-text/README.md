# CSS Morphing Shape Text

## Overview

Issue #73403 demonstrates a fluid morphing text treatment using scale, skew, and letter-spacing changes in CSS.

## Features

- Smooth shape transition
- Responsive typography
- Lightweight CSS animation
- Semantic text
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The component keeps the text in the normal document flow while animating its visual geometry around the center. The restrained movement avoids abrupt layout changes.

## Accessibility

The text is semantic and selectable. Reduced-motion preferences disable the decorative animation.

## Responsive behavior

The showcase and fact grid stack on smaller screens, while display sizes use fluid typography.

## Files

- `demo.html` — morphing text showcase
- `style.css` — morphing animation and responsive styling
- `README.md` — documentation

## Issue

EaseMotion CSS issue #73403.
