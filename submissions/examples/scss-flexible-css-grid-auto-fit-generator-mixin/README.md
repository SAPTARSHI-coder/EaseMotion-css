# Flexible CSS Grid Auto-Fit Generator Mixin

> **EaseMotion CSS · SCSS Utility** — Issue #27846

A reusable SCSS mixin that generates responsive CSS Grid layouts powered by
`auto-fit` and `minmax()`. Columns reflow automatically on any viewport width
with **zero JavaScript and zero media queries**.

---

## File structure

```
submissions/scss/scss-flexible-css-grid-auto-fit-generator-mixin/
├── _flexible-css-grid-auto-fit-generator-mixin.scss   ← SCSS source
├── demo.html                                           ← live demo
└── README.md                                           ← this file
```

---

## Mixin reference

### `ease-grid`

```scss
@mixin ease-grid(
  $min-col-width : 200px,   // minimum column width before wrapping
  $max-col-width : 1fr,     // maximum column width / flex fraction
  $gap           : 1rem,    // column + row gap (shorthand)
  $row-gap       : null,    // row-gap override; null = uses $gap
  $align-items   : stretch, // CSS align-items
  $justify-items : stretch, // CSS justify-items
  $padding       : 0,       // container padding
  $max-cols      : null     // hard ceiling on max columns (null = no limit)
)
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$min-col-width` | length | `200px` | Minimum column width. Columns wrap below this. |
| `$max-col-width` | length / fr | `1fr` | Maximum column width. Usually `1fr` to fill space. |
| `$gap` | length | `1rem` | Shorthand gap applied to both axes. |
| `$row-gap` | length / null | `null` | Override row gap only. `null` uses `$gap`. |
| `$align-items` | keyword | `stretch` | Vertical alignment of grid items. |
| `$justify-items` | keyword | `stretch` | Horizontal alignment of grid items. |
| `$padding` | length | `0` | Padding inside the grid container. |
| `$max-cols` | integer / null | `null` | Caps columns to this number via `min()` trick. |

---

### `ease-grid-item`

```scss
@mixin ease-grid-item(
  $span    : 1,           // column span
  $bg      : transparent, // background value
  $radius  : 0.5rem,      // border-radius
  $padding : 1rem         // inner padding
)
```

---

## Usage

### 1 — Include the partial in your SCSS entry point

```scss
@use 'submissions/scss/scss-flexible-css-grid-auto-fit-generator-mixin/flexible-css-grid-auto-fit-generator-mixin' as *;
```

### 2 — Call the mixin on any selector

```scss
// Fluid grid, columns ≥ 250 px, 1.5 rem gap
.my-card-grid {
  @include ease-grid($min-col-width: 250px, $gap: 1.5rem);
}

// Max 4 columns, larger gap
.product-grid {
  @include ease-grid(
    $min-col-width : 180px,
    $gap           : 1.25rem,
    $max-cols      : 4
  );
}

// Asymmetric row / column gaps
.dashboard-grid {
  @include ease-grid(
    $min-col-width : 220px,
    $gap           : 1rem,
    $row-gap       : 2rem
  );
}

// Wide featured item
.featured-item {
  @include ease-grid-item($span: 2, $bg: #1a1d2e, $radius: 1rem);
}
```

### 3 — Or use the pre-built utility classes in HTML (no SCSS needed)

```html
<!-- Fluid auto-fit, ≥ 200 px columns -->
<div class="ease-grid">
  <div class="ease-grid__item">Card A</div>
  <div class="ease-grid__item">Card B</div>
  <div class="ease-grid__item">Card C</div>
</div>

<!-- Max 3 columns, extra-large gap -->
<div class="ease-grid--3 ease-grid--gap-xl">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 4-column grid with dense packing and a spanning item -->
<div class="ease-grid--4 ease-grid--dense">
  <div class="ease-grid__item--span-2">Wide card</div>
  <div>Normal</div>
  <div>Normal</div>
</div>
```

---

## CSS custom properties (design tokens)

Override these on `:root` or any parent element:

| Token | Default | Controls |
|-------|---------|----------|
| `--ease-grid-gap` | `1rem` | Gap for `.ease-grid` base class |
| `--ease-grid-min-col` | `200px` | Min column width for `.ease-grid` |
| `--ease-grid-align` | `stretch` | `align-items` for `.ease-grid` |
| `--ease-grid-justify` | `stretch` | `justify-items` for `.ease-grid` |
| `--ease-grid-padding` | `0px` | Padding for `.ease-grid` |
| `--ease-grid-bg` | `transparent` | Container background |
| `--ease-grid-item-bg` | `transparent` | Item background for `.ease-grid__item` |
| `--ease-grid-item-radius` | `0.5rem` | Item border-radius |

---

## Pre-built utility classes

### Grid containers

| Class | Description |
|-------|-------------|
| `.ease-grid` | Fluid auto-fit grid (no column ceiling) |
| `.ease-grid--2` | Max 2 columns |
| `.ease-grid--3` | Max 3 columns |
| `.ease-grid--4` | Max 4 columns |
| `.ease-grid--5` | Max 5 columns |
| `.ease-grid--6` | Max 6 columns |
| `.ease-grid--dense` | Enable `grid-auto-flow: row dense` |

### Gap modifiers (chain with any grid class)

| Class | Gap value |
|-------|-----------|
| `.ease-grid--gap-sm` | `0.5rem` |
| `.ease-grid--gap-md` | `1rem` |
| `.ease-grid--gap-lg` | `1.5rem` |
| `.ease-grid--gap-xl` | `2rem` |
| `.ease-grid--gap-2xl` | `3rem` |

### Grid items

| Class | Description |
|-------|-------------|
| `.ease-grid__item` | Base item with token-driven bg, radius, padding |
| `.ease-grid__item--span-2` … `--span-6` | Column span |
| `.ease-grid__item--row-2` / `--row-3` | Row span |

---

## Compiled CSS output (excerpts)

```css
/* .ease-grid */
.ease-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ease-grid-min-col, 200px), 1fr));
  gap: var(--ease-grid-gap, 1rem);
  align-items: var(--ease-grid-align, stretch);
  justify-items: var(--ease-grid-justify, stretch);
  padding: var(--ease-grid-padding, 0px);
}

/* .ease-grid--3 (max-cols: 3) */
.ease-grid--3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(160px, calc(100% / 3 - 1rem)), 1fr));
  gap: var(--ease-grid-gap, 1rem);
}

/* span helper */
.ease-grid__item--span-2 { grid-column: span 2; }

/* gap modifier */
.ease-grid--gap-xl { gap: 2rem; }
```

---

## Accessibility

- **`prefers-reduced-motion`** — the mixin suppresses all child
  `animation-duration` and `transition-duration` values when the user
  has requested reduced motion.
- **`prefers-color-scheme`** — the demo adapts its palette to both dark
  and light system preferences via CSS custom properties.
- All semantic HTML elements are used in the demo; no ARIA overrides needed
  for a purely layout utility.

---

## Browser support

| Feature | Support |
|---------|---------|
| `display: grid` | All modern browsers (Chrome 57+, Firefox 52+, Safari 10.1+) |
| `auto-fit` | Same as above |
| `minmax()` | Same as above |
| `min()` inside `minmax()` | Chrome 79+, Firefox 75+, Safari 11.1+ |
| CSS custom properties | Chrome 49+, Firefox 31+, Safari 9.1+ |

---

## Contributing

Submissions follow the EaseMotion CSS conventions:

- `ease-*` class namespace
- No external dependencies
- `prefers-reduced-motion` support included
- Light and dark mode via `prefers-color-scheme` and CSS custom properties