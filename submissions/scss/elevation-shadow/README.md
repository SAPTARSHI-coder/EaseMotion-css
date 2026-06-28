# Multi-Layer Box Shadow Elevation Scale

A reusable SCSS utility module providing configurable multi-layer box shadow mixins for creating consistent elevation effects in the EaseMotion CSS design system.

---

## Features

- Reusable multi-layer elevation shadow mixins
- Five predefined elevation levels
- Customizable shadow color
- Smooth hover transition utility
- Elevation hover effect mixin
- Lightweight and easy to customize

---

## Installation

Copy the `_multi-layer-box-shadow-elevation-scale-kk.scss` file into your SCSS project and import it:

```scss
@import "_elevation-shadow";
// or
@use "_elevation-shadow";
```

---

## Available Mixins

| Mixin | Description |
|--------|-------------|
| `elevation-shadow()` | Applies a configurable multi-layer box shadow |
| `elevation-transition()` | Adds a smooth box-shadow transition |
| `elevation-hover()` | Applies elevation with a stronger hover effect |

---

## Mixin Parameters

### `elevation-shadow()`

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$level` | `1` | Elevation level (1–5) |
| `$color` | `rgba(0, 0, 0, 0.15)` | Base shadow color |

### `elevation-transition()`

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$duration` | `0.3s` | Transition duration |

### `elevation-hover()`

| Parameter | Default | Description |
|-----------|---------|-------------|
| `$default-level` | `2` | Default elevation level |
| `$hover-level` | `4` | Elevation level on hover |

---

## Usage

### Basic Elevation

```scss
.card {
  @include elevation-shadow(2);
}
```

### Hover Elevation

```scss
.button {
  @include elevation-hover(2, 4);
}
```

### Custom Transition

```scss
.panel {
  @include elevation-transition(0.5s);
}
```

---

## Compiled CSS Example

```css
.card {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.14),
    0 4px 8px rgba(0, 0, 0, 0.10);
}
```

---

## Why it fits EaseMotion CSS

These mixins provide reusable, consistent elevation utilities that simplify shadow management while promoting modular, maintainable, and developer-friendly styling across projects.