# Reduced Motion Regression Coverage

## Overview

This submission adds regression coverage for animation behavior when users enable
`prefers-reduced-motion`.

The test verifies that animations remain functional for normal motion preferences
while unnecessary motion is reduced or disabled when the user requests reduced
motion.

## What Is Tested?

- Normal motion preference
- `prefers-reduced-motion: reduce`
- Animation and transition behavior
- Dynamically created animated elements
- Hover interactions
- Layout stability
- Functional behavior after motion is reduced

## How to Test

Open `demo.html` directly in a browser.

### Normal Motion

Open the demo with the default browser motion preference.

Verify that:

- The card entrance animation runs.
- Hover interaction works.
- Dynamically created elements animate.

### Reduced Motion

Enable the operating system/browser reduced-motion preference.

Then reload `demo.html`.

Verify that:

- Unnecessary animations are disabled.
- Hover movement is removed.
- Dynamic elements remain visible and functional.
- No layout-breaking behavior occurs.

## Expected Behavior

With normal motion preferences, animations and transitions should work normally.

With `prefers-reduced-motion: reduce`, unnecessary motion should be minimized
without removing content or breaking functionality.

## Developer Usage

Use the standard media query:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}