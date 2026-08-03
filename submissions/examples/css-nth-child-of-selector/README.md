# CSS `:nth-child(An+B of S)` Selector Demo

Demonstrates the `of S` syntax of `:nth-child()` — a CSS Baseline 2024 feature that pre-filters siblings before applying the `An+B` formula. This enables patterns like "every 2nd highlighted card" or "every 3rd active table row" that were impossible with plain `:nth-child()`.

## What This Demo Shows

Four practical real-world use cases:

| Demo | Pattern | CSS |
|---|---|---|
| **Card Grid** | Every Nth featured card gets a gradient accent | `:nth-child(2n of .highlighted)` |
| **Task List** | Every 2nd pinned task gets a different border color | `:nth-child(even of .pinned)` |
| **Data Table** | Zebra stripes only on active rows | `:nth-child(even of .row-active)` |
| **Gallery** | Style visible items while hidden items are ignored | `:nth-child(even of .visible)` |

The card grid includes a CSS-only toggle (using `:has()`) that switches between even, odd, every-3rd, and all patterns — demonstrating how `of S` works with different formulas.

## Why This Matters

Before `of S`:

```css
/* This selects every 2nd sibling — including non-highlighted cards */
.demo-card:nth-child(even) { ... }
```

With `of S`:

```css
/* This selects every 2nd highlighted card ONLY — non-highlighted are skipped */
.demo-card:nth-child(even of .highlighted) { ... }
```

When you have a mixed list of `.pinned` and unpinned items, `.starred` and unstarred messages, `.active` and `.disabled` rows — `:nth-child(of S)` lets you apply alternating patterns to just the relevant subset.

## CSS-Only Pattern Toggle

The card grid demo uses `:has()` to conditionally change the `:nth-child()` formula:

```css
/* Default: even highlighted */
.card:nth-child(even of .highlighted) { accent }

/* When odd radio is checked: odd highlighted */
.container:has(#odd:checked) .card:nth-child(odd of .highlighted) { accent }

/* When 3rd radio is checked: every 3rd highlighted */
.container:has(#third:checked) .card:nth-child(3n of .highlighted) { accent }
```

## Accessibility

- Semantic HTML5 landmarks and roles
- Keyboard-accessible radio toggles with `:focus-visible`
- `aria-label` on all interactive elements
- `prefers-reduced-motion: reduce` disables animations
- `prefers-contrast: more` thickens borders
- `forced-colors: active` renders correctly in Windows High Contrast Mode
- Print styles hide interactive toggles and use clean black-on-white

## Browser Support

The `of S` syntax is Baseline 2024:
- Chrome 111+, Firefox 113+, Safari 9+, Edge 111+
- Safari has supported this syntax since IE days — it was the last major engine to adopt it, but that happened in Safari 9 (2015)

`color-scheme` / `light-dark()` is Chrome 123+, Firefox 120+, Safari 17.5+

`:has()` (for the toggle) is Chrome 105+, Safari 15.4+, Firefox 121+

## Files

- `demo.html` — Four interactive demos on a single page
- `style.css` — Complete stylesheet with `light-dark()`, `:has()`, and `:nth-child(of S)`
- `README.md` — This documentation
