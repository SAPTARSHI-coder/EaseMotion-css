# Stat Counter Component — EaseMotion CSS

**Issue:** [#30311 — Add Stat Counter / Animated Number component (ease-stat)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30311)

A CSS-only animated stat counter using `@property` for integer registration and `@keyframes` for counting animation. Displays numbers with prefix/suffix, icons, and multiple size variants.

## Structure

```
submissions/docs/core_changes-issue-30311/
├── demo.html       # Demo with counters, sizes, icons, and replay
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-stat` | Container for a single statistic |
| `.ease-stat-value` | Animated number display (uses counter via pseudo-element) |
| `.ease-stat-label` | Description below the number |
| `.ease-stat-icon` | Optional icon above the number |
| `.ease-stat-animated` | Triggers counting animation |
| `.ease-stat-prefix` | Symbol before the number (e.g., $) |
| `.ease-stat-suffix` | Symbol after the number (e.g., %, +, k) |
| `.ease-stat-sm` | Small size |
| `.ease-stat-lg` | Large size |
| `.ease-stat-xl` | Extra large size |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-stat-from` | 0 | Starting number |
| `--ease-stat-to` | 100 | Target number |
| `--ease-stat-duration` | 2s | Animation duration |
| `--ease-stat-size` | `--ease-text-4xl` | Number font size |

## Browser Support

Uses `@property` (CSS registered custom properties) — supported in Chrome/Edge 85+, Firefox 128+, Safari 18.2+. Falls back to static display on unsupported browsers.
