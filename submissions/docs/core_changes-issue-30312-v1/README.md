# Dark Mode — Issue #30312

CSS custom property-based dark mode with multiple activation methods.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-dark` | Force dark mode on container |
| `.ease-dark-mode-auto` | Follow system `prefers-color-scheme` |
| `.ease-theme-light` | Force light scheme (override) |
| `.ease-theme-dark` | Force dark scheme (override) |
| `.ease-no-theme-transition` | Disable theme transitions |
| `.ease-theme-toggle` | Styled toggle button |

## CSS Variables Exposed

`--ease-bg`, `--ease-bg-secondary`, `--ease-bg-tertiary`, `--ease-text`, `--ease-text-secondary`, `--ease-text-tertiary`, `--ease-border`, `--ease-border-light`, `--ease-primary`, `--ease-primary-text`, `--ease-primary-hover`, `--ease-accent`, `--ease-surface`, `--ease-surface-hover`, `--ease-shadow`

Set on `:root` with smooth transitions for seamless theme switching.
