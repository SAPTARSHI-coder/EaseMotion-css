# Tabs component missing prefers-reduced-motion support (Issue #8563)

## Problem

The tabs component's `.ease-tab-panel` uses `animation: ease-kf-fade-in` but has no `@media (prefers-reduced-motion: reduce)` guard. The fade-in animation plays even for users who request reduced motion.

## Fix

Added a `@media (prefers-reduced-motion: reduce)` block that sets `animation: none` on `.ease-tab-panel`, consistent with other animated components in the framework.

## Files

- `style.css` — tabs component with reduced-motion guard
- `demo.html` — interactive tabs demo (3 panels)
