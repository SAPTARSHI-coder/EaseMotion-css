# CSS Morphing Sticky Header

## Overview

Issue #70325 demonstrates a sticky header that changes its spacing and border treatment as the document scrolls.

## Implementation

The header uses native sticky positioning and CSS scroll-driven animation. Its expanded state is useful at the top of the page, while the scroll-linked animation creates a compact state after scrolling.

## Features

- Pure HTML and vanilla CSS
- CSS scroll-driven animation
- Responsive navigation
- Keyboard-accessible links
- Reduced-motion fallback
- No JavaScript dependency

## Compatibility

The header remains functional in browsers without `animation-timeline` support. A feature query provides a stable compact presentation in those browsers.

## Accessibility

Navigation uses semantic landmarks and real links. Focus remains visible through the browser's native focus behavior and the reduced-motion media query removes decorative motion.

## Files

- `demo.html` — complete semantic demonstration
- `style.css` — sticky header, scroll animation, responsive rules
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #70325.
