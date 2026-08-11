# Flexbox Alignment & Layout Utility Mixins

> **EaseMotion CSS · SCSS Utility** — Issue #27834

A complete set of reusable SCSS mixins covering every common Flexbox layout
pattern — centering, stacking, nav bars, sidebars, space distribution, and
per-item alignment control. Zero JavaScript, zero external dependencies.

---

## File structure

```
submissions/scss/scss-flexbox-alignment-layout-utility-mixins/
├── _flexbox-alignment-layout-utility-mixins.scss   ← SCSS source
├── style.css                                        ← compiled CSS
├── demo.html                                        ← live demo
└── README.md                                        ← this file
```

---

## Mixin reference

### 1 · `ease-flex` — base container

```scss
@mixin ease-flex(
  $direction : row,       // flex-direction
  $wrap      : wrap,      // flex-wrap
  $justify   : flex-start,// justify-content
  $align     : stretch,   // align-items
  $gap       : 0,         // gap shorthand (skipped when 0)
  $inline    : false      // true → inline-flex
)
```

### 2 · `ease-flex-center` — perfect centering

```scss
@mixin ease-flex-center(
  $inline : false,  // true → inline-flex
  $gap    : 0       // gap between children
)
```

Centers all children on both axes (`justify-content: center; align-items: center`).

### 3 · `ease-flex-stack` — vertical column

```scss
@mixin ease-flex-stack(
  $align   : stretch,    // horizontal alignment of children
  $justify : flex-start, // vertical alignment of children
  $gap     : 1rem        // gap between children
)
```

### 4 · `ease-flex-row` — wrapping horizontal row

```scss
@mixin ease-flex-row(
  $justify : flex-start, // justify-content
  $align   : center,     // align-items
  $gap     : 1rem,       // gap between children
  $wrap    : wrap        // flex-wrap
)
```

### 5 · `ease-flex-between` — space-between (navbar / toolbar)

```scss
@mixin ease-flex-between(
  $align : center, // align-items
  $wrap  : nowrap, // flex-wrap
  $gap   : 0       // gap between children
)
```

### 6 · `ease-flex-around` — space-around

```scss
@mixin ease-flex-around(
  $align : center, // align-items
  $gap   : 0       // gap between children
)
```

### 7 · `ease-flex-evenly` — space-evenly

```scss
@mixin ease-flex-evenly(
  $align : center, // align-items
  $gap   : 0       // gap between children
)
```

### 8 · `ease-flex-item` — flex child control

```scss
@mixin ease-flex-item(
  $grow   : 0,    // flex-grow
  $shrink : 1,    // flex-shrink
  $basis  : auto, // flex-basis
  $align  : auto, // align-self
  $order  : 0     // order
)
```

### 9 · `ease-flex-fill` — fill remaining space

```scss
@mixin ease-flex-fill
// Outputs: flex: 1 1 0%; min-width: 0;
```

Use on the "main content" slot in a sidebar or app-shell layout.

### 10 · `ease-flex-sidebar` — fixed sidebar + fluid content

```scss
@mixin ease-flex-sidebar(
  $sidebar-width : 240px, // width of the sidebar (first child)
  $gap           : 1.5rem,// gap between sidebar and content
  $reverse       : false  // true → sidebar on the right
)
```

---

## Usage

### Include the partial

```scss
@use 'submissions/scss/scss-flexbox-alignment-layout-utility-mixins/flexbox-alignment-layout-utility-mixins' as *;
```

### Call mixins on your selectors

```scss
// Perfect centering for a hero section
.hero {
  @include ease-flex-center($gap: 1rem);
  min-height: 100vh;
}

// Navigation bar
.navbar {
  @include ease-flex-between;
  padding: 0.75rem 1.5rem;
}

// Vertical card stack
.card-list {
  @include ease-flex-stack($gap: 1.25rem);
}

// Sidebar layout
.app-shell {
  @include ease-flex-sidebar($sidebar-width: 260px, $gap: 2rem);
}

// Item fills leftover space
.main-content {
  @include ease-flex-fill;
}

// Custom item: grow, centred, last in order
.cta-button {
  @include ease-flex-item($grow: 1, $align: center, $order: 99);
}
```

### Or use utility classes directly in HTML

```html
<!-- Base wrapping row -->
<div class="ease-flex ease-flex--gap-lg">
  <div>Alpha</div>
  <div>Beta</div>
</div>

<!-- Perfect centering -->
<div class="ease-flex-center" style="min-height:200px;">
  <p>Centred content</p>
</div>

<!-- Vertical stack -->
<div class="ease-flex-stack ease-flex--gap-sm">
  <div>Row 1</div>
  <div>Row 2</div>
</div>

<!-- Nav bar -->
<nav class="ease-flex-between">
  <span>Brand</span>
  <div class="ease-flex ease-flex--nowrap ease-flex--gap-md">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>

<!-- Per-item alignment -->
<div class="ease-flex" style="min-height:120px; align-items:stretch;">
  <div class="ease-flex__item--self-start">Top</div>
  <div class="ease-flex__item--self-center">Mid</div>
  <div class="ease-flex__item--self-end">Bottom</div>
</div>

<!-- Reorder without touching the DOM -->
<div class="ease-flex ease-flex--gap-md">
  <div class="ease-flex__item--order-3">First in DOM, third visually</div>
  <div class="ease-flex__item--order-1">Second in DOM, first visually</div>
  <div class="ease-flex__item--order-2">Third in DOM, second visually</div>
</div>
```

---

## CSS custom properties (design tokens)

| Token | Default | Controls |
|-------|---------|----------|
| `--ease-flex-gap` | `1rem` | Default gap for `.ease-flex` |
| `--ease-flex-wrap` | `wrap` | Default flex-wrap |
| `--ease-flex-direction` | `row` | Default flex-direction |
| `--ease-flex-align` | `center` | Default align-items |
| `--ease-flex-justify` | `center` | Default justify-content |
| `--ease-flex-padding` | `0px` | Container padding |
| `--ease-flex-bg` | `transparent` | Container background |

---

## Pre-built utility classes

### Containers

| Class | Description |
|-------|-------------|
| `.ease-flex` | Wrapping flex row (token-driven) |
| `.ease-flex-center` | Centers children on both axes |
| `.ease-flex-stack` | Column stack |
| `.ease-flex-between` | `space-between` row |
| `.ease-flex-around` | `space-around` row |
| `.ease-flex-evenly` | `space-evenly` row |

### Direction modifiers

| Class | Value |
|-------|-------|
| `.ease-flex--row` | `flex-direction: row` |
| `.ease-flex--row-reverse` | `flex-direction: row-reverse` |
| `.ease-flex--col` | `flex-direction: column` |
| `.ease-flex--col-reverse` | `flex-direction: column-reverse` |

### Wrap modifiers

| Class | Value |
|-------|-------|
| `.ease-flex--wrap` | `flex-wrap: wrap` |
| `.ease-flex--nowrap` | `flex-wrap: nowrap` |
| `.ease-flex--wrap-reverse` | `flex-wrap: wrap-reverse` |

### justify-content modifiers

`.ease-flex--justify-start` · `end` · `center` · `between` · `around` · `evenly`

### align-items modifiers

`.ease-flex--align-start` · `end` · `center` · `stretch` · `baseline`

### Gap modifiers

| Class | Gap |
|-------|-----|
| `.ease-flex--gap-sm` | `0.5rem` |
| `.ease-flex--gap-md` | `1rem` |
| `.ease-flex--gap-lg` | `1.5rem` |
| `.ease-flex--gap-xl` | `2rem` |
| `.ease-flex--gap-2xl` | `3rem` |

### Item utilities

| Class | Description |
|-------|-------------|
| `.ease-flex__item--fill` | `flex: 1 1 0%; min-width: 0` |
| `.ease-flex__item--grow` | `flex-grow: 1` |
| `.ease-flex__item--shrink` | `flex-shrink: 1` |
| `.ease-flex__item--no-grow` | `flex-grow: 0` |
| `.ease-flex__item--self-start/end/center/stretch/baseline` | `align-self` override |
| `.ease-flex__item--order-1` … `--order-5` | `order: 1–5` |
| `.ease-flex__item--order-first` | `order: -1` |
| `.ease-flex__item--order-last` | `order: 999` |

---

## Accessibility

- **`prefers-reduced-motion`** — every mixin suppresses child animation and transition durations when the user has requested reduced motion.
- **`prefers-color-scheme`** — the demo adapts to both dark and light system themes via CSS custom properties.
- No ARIA attributes are required; this is a purely layout utility.

---

## Browser support

| Feature | Support |
|---------|---------|
| `display: flex` | All modern browsers |
| `gap` on flex containers | Chrome 84+, Firefox 63+, Safari 14.1+ |
| CSS custom properties | Chrome 49+, Firefox 31+, Safari 9.1+ |

---

## Checklist

- [x] Files placed inside `submissions/` directory only
- [x] Includes `demo.html`, `style.css`, and `README.md`
- [x] Uses `ease-*` class namespace
- [x] No external dependencies
- [x] `prefers-reduced-motion` supported
- [x] Light and dark mode supported
- [x] Well-commented SCSS with full parameter documentation