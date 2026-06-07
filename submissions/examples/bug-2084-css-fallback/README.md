# Bug Fix #2084: CSS Custom Property Fallback Consistency

Fixes three CSS custom property inconsistencies in the EaseMotion CSS framework.

## Fixes

1. core/variables.css: Removed duplicate --ease-glass-bg declarations
2. components/cards.css: Fixed .ease-card fallback to use #ffffff (light default)
3. components/navbar.css: Replaced hardcoded rgba() with var(--ease-glass-bg) tokens

## Usage

```html
<div class="ease-card">Card with correct fallback</div>
<nav class="ease-navbar-glass">Navbar using CSS variables</nav>
```

Ensures all CSS custom property fallbacks match design token defaults, preventing visual bugs in light/dark modes.

Issue: #2084
Labels: type:bug, level:beginner, GSSoC-26
