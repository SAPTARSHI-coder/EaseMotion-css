# Slide Animation Accessibility Fix

**Fixes:** #2864

## Problem
`transform: none !important` in the `prefers-reduced-motion` block was overriding essential layout positioning transforms, causing UI components to "jump" or lose centering.

## Fix
Removed `transform: none` and replaced it with `animation-duration: 0.01ms !important`. This forces the animation to complete instantly while leaving structural `transform` properties untouched.