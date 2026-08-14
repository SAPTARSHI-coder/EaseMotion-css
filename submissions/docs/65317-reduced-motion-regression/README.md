# Reduced Motion Regression Demo

## Overview

This submission demonstrates how animation can respect the user's
`prefers-reduced-motion` accessibility preference.

The example includes a simple animated element and a reduced-motion
media query that minimizes animation and transition duration.

## What It Demonstrates

- CSS animation with `@keyframes`
- `prefers-reduced-motion: reduce`
- Reduced animation duration
- Reduced transition duration
- Accessibility-friendly motion behavior

## How to Run

Open `demo.html` directly in any modern browser.

No build step or development server is required.

## How It Works

When the user prefers reduced motion, the following media query is
applied:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}