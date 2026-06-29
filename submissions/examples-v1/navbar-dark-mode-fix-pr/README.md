# Navbar Dark Mode Fix

## What does this do?

Adds missing `@media (prefers-color-scheme: dark)` styles to the glass navbar component (`.ease-navbar-glass`), ensuring the background tint and text colors adapt properly on dark backgrounds.

## How is it used?

No new classes are introduced. This is a **bug fix** — the `@media` block should be added inside the existing `@layer easemotion-components` in `components/navbar.css`:

```css
@media (prefers-color-scheme: dark) {
  .ease-navbar-glass {
    background: var(--ease-glass-bg, rgba(15, 23, 42, 0.30));
    border-color: var(--ease-glass-border, rgba(255, 255, 255, 0.08));
    color: var(--ease-color-neutral-100, #f1f5f9);
  }

  .ease-navbar-glass .ease-navbar-item {
    color: rgba(241, 245, 249, 0.85);
  }

  .ease-navbar-glass .ease-navbar-item:hover,
  .ease-navbar-glass .ease-navbar-item:focus-visible {
    color: var(--ease-color-neutral-50, #f8fafc);
  }
}
```

## Why is it useful?

Before this fix, `navbar.css` hardcoded light-mode colors:
- Background: `rgba(255, 255, 255, 0.18)`
- Text: `var(--ease-color-neutral-900, #0f172a)`
- Links: `rgba(15, 23, 42, 0.92)`

If a user has their OS set to dark mode (which changes the main body background to dark via `variables.css`), the navbar would stay white with dark text. This creates a severe contrast and readability issue. 

Other components like `cards.css`, `forms.css`, and `chip.css` already have dark mode blocks. This fix brings `navbar.css` up to the framework's standard, utilizing the `--ease-glass-bg` and `--ease-glass-border` tokens which are natively responsive to dark mode.
