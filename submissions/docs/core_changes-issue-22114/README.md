# Expanded CSS Custom Properties Theming System

## What does this do?

Expands EaseMotion CSS's design token system with a comprehensive set of CSS custom properties covering semantic color roles, typography scale, shadow elevation levels, focus rings, transition easings, and dark mode overrides — making the framework fully themeable by overriding variables.

## How is it used?

**Custom theme example — drop this into your stylesheet to override EaseMotion's defaults:**

```css
:root {
  /* ── Brand Colors ── */
  --ease-color-primary: #2563eb;
  --ease-color-primary-hover: #1d4ed8;
  --ease-color-primary-light: #93c5fd;
  --ease-color-primary-dark: #1e40af;

  --ease-color-secondary: #7c3aed;
  --ease-color-secondary-hover: #6d28d9;
  --ease-color-secondary-light: #a78bfa;
  --ease-color-secondary-dark: #5b21b6;

  --ease-color-accent: #f59e0b;
  --ease-color-accent-hover: #d97706;

  /* ── Fonts ── */
  --ease-font-sans: "Inter", system-ui, sans-serif;
  --ease-font-serif: "Merriweather", Georgia, serif;
  --ease-font-mono: "JetBrains Mono", monospace;

  /* ── Shadows ── */
  --ease-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --ease-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --ease-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --ease-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --ease-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  --ease-shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);
}
```

**Apply a themed card in HTML:**

```html
<div class="themed-card">
  <h2 class="themed-title">Welcome</h2>
  <p class="themed-text">This card uses the expanded theming variables.</p>
  <button class="themed-btn">Get Started</button>
</div>
```

## Why is it useful?

A comprehensive design token system is the foundation of every serious UI framework. This proposal fills the gaps by adding:

- **Semantic color variants** (hover, active, light, dark) for every role — lets developers build interactive components without hardcoding color values
- **Full typography scale** (xs through 6xl) with line-height pairings — ensures text hierarchy is driven by variables
- **Elevation shadow scale** with semantic aliases (`--ease-shadow-dropdown`, `--ease-shadow-modal`) — prevents stacking conflicts
- **Focus ring tokens** (`--ease-ring-width`, `--ease-ring-color`, `--ease-ring-offset`) — enables consistent keyboard focus styling across all components
- **Transition tokens** (`--ease-transition-fast/normal/slow`, `--ease-ease-in/out/in-out/bounce`) — makes animation timing configurable in one place
- **Dark mode overrides** via `prefers-color-scheme` — framework ships with accessible dark theme out of the box

This aligns perfectly with EaseMotion CSS's utility-first, variable-driven philosophy and makes the framework production-ready for large-scale applications.
