# Badges — Reduced Motion Support (Issue #8562)

## Problem

The badges component had a `.ease-badge-pulse` variant with a ping animation but no `@media (prefers-reduced-motion: reduce)` guard. Users who request reduced motion in their system/browser settings would still see the pulsing animation.

## Solution

Added a `@media (prefers-reduced-motion: reduce)` block that:

- Stops the `::after` ping animation entirely (`animation: none; display: none;`)
- Replaces it with a static `box-shadow` ring as a subtle visual indicator

Also includes dark-mode support for the pulse shadow colors.

## Files

- `style.css` — badges component with reduced-motion support
- `demo.html` — demo showcasing sizes, colors, and pulse variants
