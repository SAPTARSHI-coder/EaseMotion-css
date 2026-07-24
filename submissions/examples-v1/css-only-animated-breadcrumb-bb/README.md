# CSS-Only Animated Breadcrumb

Accessible breadcrumb navigation with staggered fade-in animations and multiple separator variants.

## What does this do?

Provides an animated breadcrumb navigation component with staggered entrance animations, underline hover effects, and multiple separator styles (arrow, chevron, slash, pill).

## How is it used?

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb__item">
      <a href="#" class="breadcrumb__link">Home</a>
      <span class="breadcrumb__separator" aria-hidden="true">&rsaquo;</span>
    </li>
    <li class="breadcrumb__item">
      <a href="#" class="breadcrumb__link">Products</a>
      <span class="breadcrumb__separator" aria-hidden="true">&rsaquo;</span>
    </li>
    <li class="breadcrumb__item">
      <span class="breadcrumb__current" aria-current="page">Current Page</span>
    </li>
  </ol>
</nav>
```

### Variants

```html
<ol class="breadcrumb breadcrumb--chevron">...</ol>
<ol class="breadcrumb breadcrumb--slash">...</ol>
<ol class="breadcrumb breadcrumb--pill">...</ol>
<ol class="breadcrumb breadcrumb--compact">...</ol>
```

## Why is it useful?

- **Accessible** — uses semantic `<ol>` with `aria-label` and `aria-current="page"`
- **Animated** — staggered fade-in on each breadcrumb item
- **Hover effects** — underline animation on link hover
- **Multiple variants** — arrow, chevron, slash, pill, and compact styles
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — disables animations when `prefers-reduced-motion` is active
- **Production-ready** — suitable for e-commerce, documentation, and dashboard navigation
