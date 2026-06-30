# Dark Mode CSS Custom Properties — Issue #7783

Comprehensive dark mode color palette for EaseMotion CSS using `.ease-dark` class and `[data-theme="dark"]` attribute selectors.

## Features

- **`.ease-dark` class** — toggle dark mode by adding `class="ease-dark"` to `<html>`
- **`[data-theme="dark"]` attribute** — data-attribute-based dark mode
- **`@media (prefers-color-scheme: dark)`** — auto dark mode via system preference
- **`.ease-light` / `[data-theme="light"]`** — opt out of system dark mode
- **Inverted neutral palette** — `--ease-color-neutral-50` through `--ease-color-neutral-900` with proper contrast
- **Semantic colors** — primary, secondary, success, danger, warning, info with light/dark variants
- **Abstract tokens** — `--ease-color-bg`, `--ease-color-text`, `--ease-color-muted` adapt automatically
- **Alpha & glass tokens** — `--ease-color-primary-alpha`, `--ease-glass-bg`, `--ease-glass-border`
- **Darker shadows** — `--ease-shadow-*` with increased opacity in dark mode
- **Glow effects** — `--ease-glow-*` tokens adjusted for dark backgrounds
- **`color-mix()` support** — enhanced alpha/glass tokens when browser supports `color-mix`

## Files

- `style.css` — all dark mode token overrides
- `demo.html` — interactive demo with toggle buttons for `.ease-dark`, `[data-theme]`, and system reset
- `README.md` — this file

## Usage

```html
<!-- Force dark mode via class -->
<html class="ease-dark">

<!-- Force dark mode via data attribute -->
<html data-theme="dark">

<!-- Force light mode (override system) -->
<html data-theme="light">
<html class="ease-light">

<!-- System preference auto-detection (default — no class/attr needed) -->
<html>
```

## Design Tokens Overridden

| Category | Tokens |
|----------|--------|
| Neutrals | `--ease-color-neutral-50` to `--ease-color-neutral-900` |
| Primary | `--ease-color-primary`, `--ease-color-primary-light`, `--ease-color-primary-dark` |
| Secondary | `--ease-color-secondary`, `--ease-color-secondary-light`, `--ease-color-secondary-dark` |
| Success | `--ease-color-success`, `--ease-color-success-light`, `--ease-color-success-dark` |
| Danger | `--ease-color-danger`, `--ease-color-danger-light`, `--ease-color-danger-dark` |
| Warning | `--ease-color-warning`, `--ease-color-warning-light`, `--ease-color-warning-dark` |
| Info | `--ease-color-info`, `--ease-color-info-light`, `--ease-color-info-dark` |
| Abstract | `--ease-color-bg`, `--ease-color-surface`, `--ease-color-text`, `--ease-color-muted` |
| Alpha | `--ease-color-primary-alpha`, `--ease-color-success-alpha`, `--ease-color-danger-alpha` |
| Glass | `--ease-glass-bg`, `--ease-glass-border` |
| Shadows | `--ease-shadow-sm`, `--ease-shadow-md`, `--ease-shadow-lg`, `--ease-shadow-xl` |
| Glows | `--ease-glow-primary`, `--ease-glow-secondary`, `--ease-glow-success`, `--ease-glow-danger`, `--ease-glow-info` |
