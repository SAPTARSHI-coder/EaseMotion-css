# Bug Fix: CSS Custom Property Fallback Consistency

## What does this do?

Fixes three issues related to inconsistent CSS custom property fallbacks and hardcoded values that broke the single-source-of-truth design token system:

1. **`core/variables.css`**: Removes duplicate CSS variable declarations where the same token was defined twice (a fallback value followed by a `color-mix()` override). Now uses a single clean `color-mix()` declaration.
2. **`components/cards.css`**: Fixes `.ease-card` background-color fallback from `var(--ease-color-surface, #141e33)` — where the fallback used a hardcoded dark-mode value (`#141e33`) — to `var(--ease-color-surface, #ffffff)` to correctly match the light-mode default defined in `variables.css`.
3. **`components/navbar.css`**: Replaces hardcoded `rgba(255, 255, 255, 0.18)` and `rgba(255, 255, 255, 0.24)` values with CSS variable tokens `var(--ease-glass-bg)` and `var(--ease-glass-border)` so the glass navbar correctly responds to dark mode and theme changes.

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