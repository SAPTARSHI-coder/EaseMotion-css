# CSS `@scope` — Scoped Style Isolation with Lower Boundaries

A production-ready demonstration of the **CSS `@scope` at-rule** — native style scoping with lower boundaries, the `:scope` pseudo-class, and scope proximity-based conflict resolution. Zero JavaScript, zero Shadow DOM.

## What is `@scope`?

The [`@scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) CSS at-rule restricts style rules to a specific DOM subtree. It solves three problems:

1. **Style isolation** — Styles in `@scope (.component) { ... }` only affect descendants of `.component`
2. **Lower boundaries** — `@scope (.component) to (.stop-here)` creates a "donut" — styles apply inside the root but STOP at the boundary element
3. **Scope proximity** — When multiple `@scope` blocks match, the one with the closest scoping root wins (no specificity tricks needed)

## Demo Features

### The Problem @scope Solves
- Visual demo of style leakage without scoping (nested `<p>` tags inheriting unintended styles)
- Side-by-side comparison: without `@scope` vs with `@scope` lower boundary

### Core Patterns (3 demonstrations)
1. **Basic Scoping** — `@scope (.card-light)` confines styles to the component subtree. Outside `<p>` elements are untouched.
2. **Lower Boundary (`to`)** — `@scope (.widget) to (.widget-inner)` creates a donut hole where styles stop applying
3. **`:scope` Pseudo-Class** — Style the scoping root itself (e.g., borders, backgrounds) without separate selectors

### Scope Proximity — Conflict Resolution
- Three nested `@scope` blocks (outer → middle → inner)
- Same selectors, different colors — the CLOSEST scoping root wins every time
- No `!important`, no specificity wars, no naming conventions

### Real-World Patterns
- **Widget Isolation** — Three widgets with different `[data-theme]` attributes, each with its own `@scope` block. Styles never cross-contaminate.
- **Nested Comment Threads** — Scoped styling per nesting level via `@scope (.comment-thread)`. Each reply gets independent styling.
- **Tab Content Scoping** — Two tab panels (`[data-tab="overview"]` and `[data-tab="details"]`) with completely different list styles, colors, and decorations. Fully isolated.

### Browser Support & Fallbacks
- Feature detection with `@supports`
- Progressive enhancement patterns
- Combining `@scope` with `@layer` for layered, scoped architecture
- Browser support table

## Accessibility

- Semantic HTML landmarks (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- ARIA labels on demo areas (`aria-labelledby`)
- Keyboard-accessible skip link
- `:focus-visible` outlines
- Screen reader-friendly content structure
- Decorative elements marked with `aria-hidden`

## CSS Features Used

| Feature | Usage |
|---------|-------|
| `@scope` | Core feature — 9 `@scope` blocks across the demo |
| `@scope ... to (...)` | Lower boundary pattern |
| `:scope` | Styling scoping roots |
| Scope proximity | Nested scope conflict resolution |
| `@layer` | Suggested combination in best practices |
| `@supports` | Feature detection for graceful degradation |
| `oklch()` | Perceptually uniform colors |
| `color-scheme` | Browser-native dark mode |
| `@media (prefers-color-scheme)` | Dark mode |
| `@media (prefers-reduced-motion)` | Motion reduction |
| `@media (prefers-contrast)` | High contrast mode |
| `@media (forced-colors)` | Windows High Contrast Mode |
| `@media print` | Print stylesheet |
| CSS Custom Properties | Design tokens |
| CSS Grid / Flexbox | Responsive layouts |
| `text-wrap: balance` | Hero subtitle |

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 118+ |
| Edge | 118+ |
| Safari | 17.4+ |
| Firefox | In development |
| Opera | 104+ |

Browsers without `@scope` support will skip the blocks entirely — no breakage, just no scoping enhancement. Use `@supports` for fallback styles.

## Zero JavaScript

This demo uses **zero JavaScript**. All scoping, isolation, and conflict resolution is handled natively by the CSS `@scope` at-rule.

## Files

- `demo.html` — Semantic HTML with comprehensive scope demonstrations
- `style.css` — Production-ready stylesheet with 9 `@scope` blocks, design tokens, dark mode, and accessibility
- `README.md` — This documentation

## Related Resources

- [MDN: @scope](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope)
- [Chrome Developers: @scope](https://developer.chrome.com/articles/at-scope)
- [CSSWG Spec: CSS Scoping](https://drafts.csswg.org/css-scoping/)
