# Flexbox Alignment & Layout Utility Mixins (SCSS)

A small, composable set of SCSS **mixins + utility classes** for the flexbox patterns you reach for every day — centering, space-between rows, and vertical stacks — using short, human-readable names instead of memorising raw `justify-content` / `align-items` keywords.

> Track: `submissions/scss/` · Closes issue **#28280**

---

## What it does

- A single configurable **`flex()`** mixin, plus four shorthands for the most common layouts.
- Friendly **name maps** (`start`, `center`, `between`, `evenly`, …) that resolve to the real flexbox keywords, with a helper that also lets you pass raw values.
- Auto-generated **utility classes** (`.ease-flex`, `.ease-justify-*`, `.ease-items-*`) so the same patterns work straight from HTML.
- Compiles **standalone** with zero external dependencies and **no deprecation warnings** (Dart Sass 1.101.0).

---

## API

| Kind | Signature | Purpose |
|------|-----------|---------|
| Mixin | `flex($direction, $justify, $align, $wrap, $gap)` | Fully configurable flex container. |
| Mixin | `flex-center($gap)` | Centered on both axes. |
| Mixin | `flex-between($align, $gap)` | Space-between row, cross-axis centered. |
| Mixin | `flex-column($align, $justify, $gap)` | Vertical stack. |
| Mixin | `flex-center-column($gap)` | Vertical stack, centered both axes. |
| Function | `em-flex-value($map, $key)` | Resolves an alias, or passes a raw keyword through. |
| Classes | `.ease-flex`, `.ease-justify-*`, `.ease-items-*` | Drop-in HTML utilities. |

### `flex()` parameters

| Param | Default | Accepts |
|-------|---------|---------|
| `$direction` | `row` | `row` · `column` · `row-reverse` · `column-reverse` |
| `$justify` | `start` | `start` `end` `center` `between` `around` `evenly` (or a raw keyword) |
| `$align` | `stretch` | `start` `end` `center` `stretch` `baseline` (or a raw keyword) |
| `$wrap` | `nowrap` | `nowrap` · `wrap` · `wrap-reverse` |
| `$gap` | `0` | any length — only emitted when non-zero |

Override the alias maps by re-declaring `$em-justify` / `$em-align` before the `@use` (both are `!default`).

---

## How to use

### 1. As mixins

```scss
@use "flexbox-alignment-layout-utility-mixins" as f;

.toolbar { @include f.flex(row, between, center, $gap: 1rem); }
.modal   { @include f.flex-center; }
.sidebar { @include f.flex-column($gap: 0.5rem); }
.hero    { @include f.flex-center-column($gap: 1.5rem); }
```

### 2. As utility classes (no SCSS)

```html
<nav class="ease-flex ease-justify-between ease-items-center">…</nav>
<div class="ease-flex-center">Perfectly centered</div>
```

---

## Compiled CSS output

Compiled with `sass` (Dart Sass 1.101.0). The `@include` examples above produce:

```css
.toolbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.modal {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.sidebar {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0.5rem;
}

.hero {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
```

A sample of the generated utility classes:

```css
.ease-flex        { display: flex; }
.ease-inline-flex { display: inline-flex; }
.ease-flex-center { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: center; align-items: center; }
.ease-justify-between { justify-content: space-between; }
.ease-justify-evenly  { justify-content: space-evenly; }
.ease-items-center    { align-items: center; }
.ease-items-baseline  { align-items: baseline; }
```

---

## Compile it yourself

```bash
sass _flexbox-alignment-layout-utility-mixins.scss
```
