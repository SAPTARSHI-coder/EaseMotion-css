# Staggered Entrance Delay Utility Classes

Reusable SCSS utility classes for generating staggered animation delays. Useful for cards, lists, grids, menus, galleries, and sequential entrance animations.

---

## Features

- Configurable number of delay utilities
- Adjustable delay interval
- Custom starting delay
- Reverse stagger support
- Lightweight and reusable
- No JavaScript required

---

## Parameters

| Variable | Default |
|----------|----------|
| `$stagger-count` | `12` |
| `$stagger-step` | `0.1s` |
| `$stagger-start` | `0s` |

---

## Usage

```scss
@include staggered-entrance-delay();
@include staggered-entrance-delay-reverse();
```

---

## HTML Example

```html
<div class="card delay-1">Item 1</div>
<div class="card delay-2">Item 2</div>
<div class="card delay-3">Item 3</div>

<div class="card delay-reverse-3">Item 3</div>
<div class="card delay-reverse-2">Item 2</div>
<div class="card delay-reverse-1">Item 1</div>
```

---

## Generated Classes

```
.delay-1
.delay-2
...
.delay-12

.delay-reverse-1
...
.delay-reverse-12
```

---

## Compilation Result

Compiles into lightweight CSS utility classes with predefined animation delays for sequential entrance effects.

---

## Use Cases

- Navigation menus
- Card layouts
- Gallery items
- Dashboards
- Feature grids
- Timelines
- Loading sequences