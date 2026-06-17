# Hex Colors Fix for docs.css

**Fixes:** #2770

## Problem
docs/docs.css had hardcoded hex colors (#6c63ff, #4f46e5) instead of CSS variables.

## Fix
Replaced all hardcoded hex values with var(--ease-color-primary) and fallbacks.