Bug Fix #2084: CSS Custom Property Fallback Consistency

Fixes three CSS custom property inconsistencies in the EaseMotion CSS framework.

1. core/variables.css: Removed duplicate --ease-glass-bg declarations
2. components/cards.css: Fixed .ease-card fallback to use #ffffff (light default)
3. components/navbar.css: Replaced hardcoded rgba() with var(--ease-glass-bg) tokens

Usage: use ease-card and ease-navbar-glass classes as normal.

Ensures all CSS custom property fallbacks match design token defaults, preventing visual bugs in light/dark modes.

Issue: #2084
Labels: type:bug, level:beginner, GSSoC-26
