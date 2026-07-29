# Flexbox Alignment & Layout Utility Mixins

Reusable SCSS mixins for creating flexible, consistent, and responsive Flexbox layouts in EaseMotion CSS.

---

## Features

- Reusable flex container mixin
- Center alignment utility
- Space-between layout utility
- Column layout utility
- Configurable direction, alignment, wrapping, and spacing
- Built using modern SCSS (`@use "sass:map"`)

---

## Included Mixins

### `flex-container()`

Creates a customizable flex container.

```scss
.card {
  @include flex-container(
    row,
    between,
    center,
    wrap,
    1rem
  );
}
```

---

### `flex-center()`

Centers content both horizontally and vertically.

```scss
.hero {
  @include flex-center(row, 2rem);
}
```

---

### `flex-between()`

Creates a horizontal layout with `space-between`.

```scss
.navbar {
  @include flex-between(center, 1rem);
}
```

---

### `flex-column()`

Creates a vertical flex layout.

```scss
.sidebar {
  @include flex-column(center, start, 1.5rem);
}
```

---

## Parameters

| Mixin | Parameters |
|-------|------------|
| `flex-container()` | direction, justify, align, wrap, gap |
| `flex-center()` | direction, gap |
| `flex-between()` | align, gap |
| `flex-column()` | align, justify, gap |

---

## Example

```scss
.wrapper {
  @include flex-container(
    row,
    between,
    center,
    wrap,
    1rem
  );
}

.modal {
  @include flex-center();
}

.sidebar {
  @include flex-column(center, start, 2rem);
}
```

---

## CSS Compilation Result

Example output:

```css
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
```

---

## Notes

- Uses modern SCSS modules (`@use "sass:map"`).
- Keeps Flexbox layouts consistent across components.
- No changes are made to the EaseMotion CSS core framework.