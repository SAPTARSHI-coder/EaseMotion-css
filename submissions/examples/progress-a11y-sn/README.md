# Fix: Progress Bar Accessibility

## Problem
Scroll progress bar lacks ARIA attributes and is invisible in Windows High Contrast mode.

## Fix
Added forced-colors fallback and documented required ARIA attributes (role, aria-valuenow, aria-valuemin, aria-valuemax).