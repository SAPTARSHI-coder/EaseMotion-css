# CSS Stats Dashboard

A responsive statistics dashboard built with pure CSS — zero JavaScript, zero dependencies.

## What does this do?

A production-ready dashboard layout displaying key business metrics (revenue, users, conversion, retention, etc.) in interactive stat cards with animated entrance effects, trend indicators, mini bar charts, and progress bars — all driven by modern CSS.

## How is it used?

```html
<link rel="stylesheet" href="style.css">

<div class="dashboard" role="region" aria-label="Statistics dashboard">
  <article class="stat-card">
    <div class="stat-card-header">
      <h2 class="stat-card-label">Active Users</h2>
      <span class="stat-card-icon stat-card-icon--success" aria-hidden="true">&#x1F465;</span>
    </div>
    <p class="stat-card-value">2,847</p>
    <div class="stat-card-footer">
      <span class="stat-card-trend stat-card-trend--up">
        <span class="stat-card-trend-arrow" aria-hidden="true">&#9650;</span>
        8.2%
      </span>
      <span class="stat-card-period">vs last month</span>
    </div>
  </article>
</div>
```

Progress bar cards use `role="progressbar"` with `aria-valuenow`:

```html
<div class="stat-card-progress" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100">
  <div class="stat-card-progress-fill" style="--progress: 74%;"></div>
</div>
```

## Why is it useful?

Dashboard statistics cards are one of the most requested UI patterns on the web, yet the repository has very few plain-CSS implementations (most exist only in React submissions). This submission demonstrates:

- **CSS Grid** `auto-fit` responsive layout with `min()`
- **Container queries** (`@container`) for card-internal responsive adaptation
- **`animation-timeline: view()`** for scroll-driven card entrance animations (with fallback)
- **`color-mix()`** for adaptive surface colors, tints, and alpha overlays
- **`clamp()`** with `cqi` units for fluid typography
- **`prefers-color-scheme`** for complete dark mode
- **`prefers-reduced-motion`** disabling all animations
- **`prefers-contrast`** and **`forced-colors`** support
- **Print styles** with `break-inside: avoid`
- **Full keyboard accessibility** with `:focus-within`
- **ARIA** attributes (`role`, `aria-label`, `aria-valuenow`, `aria-labelledby`)

Fits the EaseMotion philosophy: clear, readable class names, expressive design tokens via Custom Properties, and progressive enhancement with modern CSS APIs.

## Features

| Feature | Implementation |
|---------|---------------|
| Responsive grid | `grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr))` |
| Scroll-driven entrance | `animation-timeline: view()` with `@supports` fallback |
| Container queries | `@container card` for internal layout adaptation |
| Mini bar chart | Pure CSS bars with `animation-timeline` and `animation-delay` |
| Progress bars | CSS-only with `--progress` custom property |
| Trend indicators | Color-coded up/down/neutral badges |
| Dark mode | `prefers-color-scheme: dark` overrides all tokens |
| High contrast | `prefers-contrast: high` increases borders |
| Forced colors | `forced-colors: active` with system color keywords |
| Print | Optimized layout with `break-inside: avoid` |
| Accessibility | Full ARIA, `:focus-visible`/`:focus-within`, semantic HTML |
