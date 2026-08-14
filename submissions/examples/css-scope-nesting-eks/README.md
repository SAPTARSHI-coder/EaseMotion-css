# CSS `@scope` + Nesting — Scoped Component System

A production-quality demo showcasing **CSS `@scope`** and **CSS Nesting** (`&`) — two Baseline 2024 features that eliminate the need for BEM naming conventions and CSS preprocessors.

## What This Demo Shows

- **`@scope` isolates styles** — Same `.card`, `.btn`, `.features` class names render completely differently inside `.scope-default`, `.scope-brand`, and `.scope-dark` containers
- **CSS Nesting (`&`)** — Selectors nested inside selectors, media queries inside selectors, pseudo-classes with `&:hover`
- **`@scope` to DONUT scope** — Only matches inside the boundary, not outside (unlike vanilla descendant selectors)
- **Scoped custom properties** — Each scope overrides `--scope-accent`, `--scope-surface`, etc. to theme components without class collisions

## Browser Support

**Baseline 2024** — supported in all modern browsers:

| Feature | Chrome | Firefox | Safari |
|---------|--------|---------|--------|
| `@scope` | 118+ | 128+ | 17.4+ |
| CSS Nesting | 120+ | 117+ | 17.2+ |

No polyfills, no preprocessors, no build step required.

## Why This Matters

Before `@scope`:

```css
/* BEM to avoid collisions */
.card-default { }
.card-default__title { }
.card-brand { }
.card-brand__title { }
```

After `@scope`:

```css
@scope (.scope-default) {
  .card { }
  .card__title { }
}
@scope (.scope-brand) {
  .card { }       /* same name, different scope */
  .card__title { }
}
```

Before CSS Nesting:

```css
.card { }
.card:hover { }
.card .title { }
```

After CSS Nesting:

```css
.card {
  &:hover { }
  .title { }
}
```

## Features

- Three scoped component themes (default, brand, dark)
- Full keyboard accessibility (`:focus-visible`, skip link)
- `prefers-reduced-motion`, `prefers-contrast`, `forced-colors` support
- `oklch()` color space throughout
- Mobile-responsive grid layout
- Print stylesheet
- Zero JavaScript, zero frameworks, zero dependencies

## Structure

```
css-scope-nesting-eks/
├── demo.html   (143 lines)
├── style.css   (418 lines)
└── README.md   (this file)
```
