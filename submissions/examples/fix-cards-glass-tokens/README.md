# Fix: Use --ease-glass-border Token in .ease-card-glass

## Problem

`.ease-card-glass` hardcoded the border color instead of using the `--ease-glass-border` token:

```css
.ease-card-glass {
  border: 1px solid rgba(255, 255, 255, 0.3); /* hardcoded */
}
```

`variables.css` defines `--ease-glass-border` which automatically adapts to dark mode via `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`. By hardcoding the rgba value, the glass card border always uses light-mode transparency regardless of theme.

## Solution

Use the design token variable with the original rgba as fallback:

```css
.ease-card-glass {
  border: 1px solid var(--ease-glass-border, rgba(255, 255, 255, 0.3));
}
```

## Usage

No class changes needed:

```html
<div class="ease-card ease-card-glass">
  Glass card content
</div>
```

The border now adapts automatically to dark mode and responds to custom theme overrides:

```css
:root {
  --ease-glass-border: rgba(255, 255, 255, 0.15); /* custom border opacity */
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses design tokens as the single source of truth. Glass components should consume `--ease-glass-bg` and `--ease-glass-border` tokens so dark mode and theme overrides work automatically — consistent with the navbar glass fix.

Fixes #10413
