# CSS Waterfall Text

## Overview

Issue #70652 demonstrates a letter-by-letter waterfall animation using only HTML and vanilla CSS.

## Implementation

Each displayed letter is an inline element with a shared keyframe animation and a staggered delay. The animation uses transforms and opacity so the layout remains stable while the letters descend.

## Accessibility

The main heading provides a complete `aria-label`, while reduced-motion users receive the same text without animation.

## Responsive behavior

The heading uses `clamp()` and the layout collapses to a single column on smaller screens.

## Files

- `demo.html` — semantic demonstration markup
- `style.css` — waterfall animation and responsive styling
- `README.md` — implementation notes

## Issue

EaseMotion CSS issue #70652.
