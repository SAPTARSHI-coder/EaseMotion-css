# ease-glass-card-tm

A translucent glass-morphism card component using `backdrop-filter: blur()` and EaseMotion's `--ease-glass-*` design tokens.

## What does this do?

Provides a self-contained glass card that renders as a frosted, semi-transparent panel over any background. It consumes the framework's `--ease-glass-bg`, `--ease-glass-border`, `--ease-radius-*`, and `--ease-shadow-*` tokens so the effect feels native to EaseMotion rather than bolted on.

## Features

- Frosted glass effect via `backdrop-filter: blur(12px)` with `-webkit-` prefix for Safari
- Automatic dark/light adaptation using `prefers-color-scheme` media query
- Six style variants: standard, borderless, elevated, accent (primary), accent-success, accent-warning, accent-danger
- Three size variants: sm, md (default), lg
- Hover lift animation using `--ease-ease-out` timing
- Inner top-edge highlight via `::before` pseudo-element
- Stat card sub-variant with value / label layout
- Feature row sub-variant for list-style content
- Respects `prefers-reduced-motion` — all hover transitions are disabled
- Focus ring via `:focus-within` for keyboard accessibility
- Uses `--ease-font-sans` and `--ease-text-*` tokens throughout

## Usage

```html
<article class="glass-card">
  <span class="card-tag">Label</span>
  <h2 class="card-title">Card Title</h2>
  <p class="card-text">Card body text.</p>
</article>
```

```html
<!-- Stat card -->
<div class="stat-card">
  <span class="stat-value">98</span>
  <span class="stat-label">Lighthouse Score</span>
</div>
```

## Why is it useful?

Glass UI is increasingly standard in modern design systems (iOS, Windows 11, Material You). This submission brings that pattern into EaseMotion CSS using the framework's own token system — so dark/light mode, spacing, and radius all stay consistent with the rest of the codebase. No new CSS custom properties are introduced; everything derives from what already exists in `core/variables.css`.
