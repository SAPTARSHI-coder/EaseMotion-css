# Reduced Motion Accessibility Fix

**Fixes:** #2852

## Problem
When `prefers-reduced-motion` is enabled, the transition was disabled but the `transform: translateY(-2px)` on hover remained, causing a jarring layout jump.

## Fix
Added `transform: none !important` inside the `@media (prefers-reduced-motion: reduce)` block to ensure hover interactions are static for users who prefer reduced motion.

## Result
Smooth accessibility compliance. The element no longer jumps on hover when reduced motion is enabled in system settings.