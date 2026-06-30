# Dark Mode CSS Variables and `.ease-dark` Theme Toggle

## 1. What does this do?

Adds the missing `.ease-dark` class selector to the framework's theming system. The existing `core/variables.css` already supports:

- `prefers-color-scheme: dark` media query (auto dark mode)
- `[data-theme="dark"]` attribute selector
- `[data-theme="light"]` attribute selector

**Missing:** `.ease-dark` class selector — the only one mentioned by name in the issue.

This submission adds `.ease-dark` as a class alias with the same dark-mode variable overrides, so both `<html class="ease-dark">` and `<html data-theme="dark">` work equivalently.

**Variables overridden in dark mode:**

- `--ease-color-bg`, `--ease-color-surface`, `--ease-color-text`, `--ease-color-muted`, `--ease-color-border`
- `--ease-shadow-sm` through `--ease-shadow-xl` (adjusted for dark backgrounds)
- `--ease-glass-bg`, `--ease-glass-border`
- `--ease-glow-*` tokens for each semantic color

## 2. How is it used?

```html
<!-- Via class -->
<html class="ease-dark">
  <!-- Via data attribute (already supported) -->
  <html data-theme="dark">
    <!-- Toggle via JS -->
    document.documentElement.classList.toggle('ease-dark');
  </html>
</html>
```

All existing components (buttons, cards, modals, toasts, tabs, badges, etc.) automatically inherit the dark palette because they use `--ease-color-*` variables.

## 3. Why is this useful?

- Complete the theming API: class, attribute, and media query all work
- Framework convention uses `.ease-*` class names — `.ease-dark` fits the pattern
- Zero migration for existing components — they already use design tokens
- Three activation methods for different use cases
