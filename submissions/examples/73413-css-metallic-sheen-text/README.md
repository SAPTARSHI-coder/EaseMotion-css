# CSS Metallic Sheen Text

## Overview

A pure CSS text animation that creates a polished metallic reflection moving across large display text.

## Features

- Animated metallic gradient
- Dark-mode-friendly presentation
- Responsive typography
- No JavaScript or external dependencies
- Reduced-motion fallback
- Semantic HTML structure

## Implementation

The effect uses a multi-stop linear gradient clipped to the text. The gradient is wider than the text surface and moves with `background-position`, creating the appearance of a traveling highlight.

The animation is intentionally slow so the text remains readable while still providing visible motion. The same class can be reused on headings, labels, or short decorative words.

## Accessibility

The animated effect is decorative and does not carry essential information. Users who prefer reduced motion receive a static metallic gradient instead of the continuous animation.

## Responsive Behavior

The display type scales with `clamp()` and the sample cards collapse to one column on narrow screens. Spacing is reduced at the mobile breakpoint to preserve comfortable reading width.

## Files

- `demo.html` — semantic demonstration markup
- `style.css` — metallic gradient, animation, responsive styling, and reduced-motion handling
- `README.md` — implementation documentation

## Usage

Open `demo.html` in a modern browser. No build process is required.

## Issue

EaseMotion CSS issue #73413.
