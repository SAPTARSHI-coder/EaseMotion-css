# RTL (Right-to-Left) Support

RTL language support using CSS logical properties — supports Arabic, Hebrew, Urdu.

## Files

- demo.html - Interactive demo
- style.css - RTL styles using logical properties
- README.md - Documentation

## Logical Properties Used

| Physical Property | Logical Property       |
| ----------------- | ---------------------- |
| `margin-left`     | `margin-inline-start`  |
| `margin-right`    | `margin-inline-end`    |
| `padding-left`    | `padding-inline-start` |
| `padding-right`   | `padding-inline-end`   |
| `left`            | `inset-inline-start`   |
| `right`           | `inset-inline-end`     |
| `border-left`     | `border-inline-start`  |

## Usage

```html
<!-- Add dir="rtl" to html element for RTL languages -->
<html lang="ar" dir="rtl">
  <!-- CSS using logical properties -->
  .element { margin-inline-start: 1rem; padding-inline-end: 1rem; }
</html>
```
