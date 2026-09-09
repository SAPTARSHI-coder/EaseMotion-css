# CSS Glow on Scroll Navigation

## Overview

Issue #70766 demonstrates a sticky navigation that gains visual glow as the document scrolls.

## Implementation

The example uses CSS scroll-driven animation where supported. The navigation starts with a transparent border and transitions to a brighter border and shadow after scrolling.

## Accessibility

Navigation items are native links with visible keyboard focus. Reduced-motion preferences disable the decorative scroll animation.

## Responsive behavior

The link group wraps on narrow screens and the content cards collapse to one column.

## Files

- `demo.html` — semantic navigation and content
- `style.css` — sticky layout, scroll animation, responsive rules
- `README.md` — implementation notes

## Issue

EaseMotion CSS issue #70766.
