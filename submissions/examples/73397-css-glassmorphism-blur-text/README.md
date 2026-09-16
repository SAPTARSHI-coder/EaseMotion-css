# CSS Glassmorphism Blur Text

## Overview

Issue #73397 demonstrates a glassmorphism-inspired text animation using only semantic HTML and vanilla CSS.

## Features

- Soft blur-to-clear entrance
- Animated glass-like gradient sheen
- Translucent supporting surfaces
- Responsive typography
- Dark-surface presentation
- Reduced-motion fallback
- No JavaScript or external dependencies

## Implementation

The text uses a transparent fill, subtle stroke, gradient clipping, and a blur transition. The supporting cards use translucent backgrounds and `backdrop-filter` to reinforce the glass aesthetic without changing the document structure.

## Accessibility

The displayed words remain real selectable text. The animation is decorative, and `prefers-reduced-motion: reduce` removes the animated blur and sheen so the content stays immediately readable.

## Performance

The animation is limited to visual properties such as `filter`, `opacity`, and background positioning. The layout does not depend on JavaScript or repeated DOM updates.

## Usage

Open `demo.html` in a modern browser. The component is self-contained and can be adapted by changing the text, scale classes, and CSS custom properties.

## Files

- `demo.html` — semantic demonstration markup
- `style.css` — glass treatment, responsive rules, and motion preferences
- `README.md` — implementation and usage notes

## Issue

EaseMotion CSS issue #73397.
