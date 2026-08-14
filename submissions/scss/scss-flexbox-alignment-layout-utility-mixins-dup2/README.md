# Flexbox Alignment & Layout Utility Mixins

A reusable SCSS utility module providing common Flexbox alignment and layout mixins for building responsive and maintainable layouts in EaseMotion CSS.

---

## Features

- Reusable Flexbox utility mixins
- Flexible layout configuration
- Horizontal and vertical centering
- Space-between, space-around, and space-evenly helpers
- Responsive flex layout mixin
- Lightweight and easy to customize

---

## Installation

Copy the `_flexbox-alignment-layout-utility-mixins.scss` file into your SCSS project and import it:

```scss
@import "flexbox-alignment-layout-utility-mixins";
```

---

## Available Mixins

| Mixin | Description |
|--------|-------------|
| `flex-container()` | Configurable flex container |
| `flex-center` | Centers items horizontally and vertically |
| `flex-center-x` | Centers items horizontally |
| `flex-center-y` | Centers items vertically |
| `flex-space-between()` | Space-between layout |
| `flex-space-around()` | Space-around layout |
| `flex-space-evenly()` | Space-evenly layout |
| `flex-responsive()` | Responsive flex direction |

---
## Mixin Parameters

### `flex-container()`

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$direction` | `row` | Flex direction |
| `$justify` | `flex-start` | Horizontal alignment |
| `$align` | `stretch` | Vertical alignment |
| `$wrap` | `nowrap` | Flex wrapping |
| `$gap` | `0` | Gap between flex items |

### `flex-responsive()`

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$direction` | `row` | Default flex direction |
| `$mobile-direction` | `column` | Direction below breakpoint |
| `$breakpoint` | `768px` | Responsive breakpoint |
------
## Usage

### Basic Flex Container

```scss
.container {
  @include flex-container(row, center, center, wrap, 1rem);
}
```

### Center Content

```scss
.hero {
  @include flex-center;
}
```

### Space Between

```scss
.navbar {
  @include flex-space-between(center);
}
```

### Responsive Layout

```scss
.cards {
  @include flex-responsive(row, column, 768px);
}
```

---

## Compiled CSS Example

```css
.hero {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

---

## Why it fits EaseMotion CSS

These mixins provide clean, reusable Flexbox utilities that simplify layout creation while keeping styles modular, maintainable, and consistent with the EaseMotion CSS design philosophy.