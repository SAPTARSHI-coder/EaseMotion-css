# Bootstrap to EaseMotion CSS Migration Guide

## Introduction

This guide helps Bootstrap users migrate to EaseMotion CSS easily by mapping common Bootstrap utilities and components to their EaseMotion CSS equivalents.

---

# Layout Utilities

| Bootstrap                | EaseMotion CSS        | Purpose                     |
| ------------------------ | --------------------- | --------------------------- |
| `d-flex`                 | `ease-flex`           | Flex layout                 |
| `d-grid`                 | `ease-grid`           | Grid layout                 |
| `justify-content-center` | `ease-justify-center` | Center content horizontally |
| `align-items-center`     | `ease-items-center`   | Center items vertically     |

---

# Text Utilities

| Bootstrap     | EaseMotion CSS     |
| ------------- | ------------------ |
| `text-center` | `ease-text-center` |
| `fw-bold`     | `ease-font-bold`   |

---

# Animation Utilities

| Bootstrap                 | EaseMotion CSS  |
| ------------------------- | --------------- |
| Custom animation required | `ease-fade-in`  |
| Custom animation required | `ease-slide-up` |
| Custom animation required | `ease-bounce`   |

---

# Example Conversion

## Bootstrap

```html
<div class="d-flex justify-content-center align-items-center">
  <button class="btn btn-primary">Click Me</button>
</div>
```
