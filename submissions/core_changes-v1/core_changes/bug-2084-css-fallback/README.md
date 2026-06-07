# Bug Fix: CSS Custom Property Fallback Consistency

## What does this do?

Fixes three issues related to inconsistent CSS custom property fallbacks in the EaseMotion CSS framework:

1. **`core/variables.css`**: Removed duplicate CSS variable declarations where the same token was defined twice (a fallback value followed by a `color-mix()` override). Now uses a single clean `color-mix()` declaration.

2. **`components/cards.css`**: Fixed `.ease-card` background-color fallback from `var(--ease-color-surface, #141e33)` — where the fallback used a hardcoded dark-mode value — to `var(--ease-color-surface, #ffffff)` to correctly match the light-mode default.

3. **`components/navbar.css`**: Replaced hardcoded `rgba(255, 255, 255, 0.18)` and `rgba(255, 255, 255, 0.24)` values with CSS variable tokens `var(--ease-glass-bg)` and `var(--ease-glass-border)` so the glass navbar correctly responds to dark mode.

## How is it used?

Apply the `.ease-card` class to any div and the `.ease-navbar-glass` class to a nav element. The component will now correctly use the light-mode default fallback values and properly adapt to dark mode when the system preference is set.

```html
<!-- Card with correct fallback -->
<div class="ease-card">Content</div>

<!-- Glass navbar using CSS variable tokens -->
<nav class="ease-navbar-glass">Brand</nav>
```

## Why is this useful?

CSS frameworks need a single source of truth for design tokens. When components hardcode fallback values that differ from the tokens' defaults, or when variables are declared twice, it creates subtle visual bugs that are very difficult to debug. This fix ensures:

- **Consistency**: All fallbacks match the token defaults in `variables.css`
- **Dark mode correctness**: Components using `--ease-glass-*` tokens now properly adapt to dark mode
- **Maintainability**: No duplicate variable declarations to cause confusion
- **Predictability**: Overriding a design token in `:root` will correctly affect all components

## Files changed

| File | Change |
|------|--------|
| `core/variables.css` | Removed duplicate `--ease-glass-bg`, `--ease-glass-border`, and `--ease-color-*-alpha` declarations |
| `components/cards.css` | Fixed `.ease-card` fallback from `#141e33` to `#ffffff` |
| `components/navbar.css` | Replaced hardcoded `rgba()` with `var(--ease-glass-bg)` and `var(--ease-glass-border)` |

---

**Issue:** #2084
**Labels:** type:bug, level:beginner, GSSoC-26