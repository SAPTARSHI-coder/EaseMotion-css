# Semantic Color System (Dark Mode Fix)

## What does this do?
Proposes migrating all framework components from absolute/hardcoded colors (e.g., `#fff` or `--ease-color-neutral-200`) to a strict semantic token system (e.g., `--ease-color-surface`, `--ease-color-border`).

## How is it used?
Component authors build components using purely semantic variables from `variables.css`. For example, using `background: var(--ease-color-surface)` instead of `background: var(--ease-color-surface, #ffffff)`.

## Why is it useful?
Currently, files like `components/footer.css`, `components/buttons.css`, and `components/cards.css` hardcode HEX fallbacks or explicitly reference fixed "neutral" palette colors. Because neutral colors don't inherently invert in dark mode, these components stay light even when the user's OS switches to dark mode. By migrating entirely to semantic tokens (`--ease-color-bg`, `--ease-color-text`, etc.), the entire library gains automatic, seamless, zero-config Dark Mode support.
