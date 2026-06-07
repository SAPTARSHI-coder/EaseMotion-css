# Bug Fix #2084: CSS Custom Property Fallback Consistency

## What does this do?

Fixes three CSS custom property inconsistencies in the EaseMotion CSS framework:

1. **`core/variables.css`**: Removed duplicate `--ease-glass-bg` and `--ease-glass-border` declarations. Now uses single clean `color-mix()` values.

2. **`components/cards.css`**: Fixed `.ease-card` fallback from `var(--ease-color-surface, #141e33)` (dark value) to `var(--ease-color-surface, #ffffff)` (light default).

3. **`components/navbar.css`**: Replaced hardcoded `rgba(255,255,255,0.18)` with `var(--ease-glass-bg)` and `var(--ease-glass-border)` tokens.

## How is it used?

```html
<div class="ease-card">Card with correct fallback</div>
<nav class="ease-navbar-glass">Navbar using CSS variables</nav>
```

## Why is this useful?

Ensures all CSS custom property fallbacks match the design token defaults in `variables.css`, preventing visual bugs in light/dark modes.

---

**Issue:** [#2084](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2084)  
**Labels:** `type:bug`, `level:beginner`, `GSSoC-26`