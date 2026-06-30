# ease-resize — Element Resize Utility

## 1. What does this do?

Adds element resize utility classes. Control whether users can resize elements, and in which direction.

**Classes:**

- `.ease-resize` — Resize both directions (`resize: both`)
- `.ease-resize-x` — Resize horizontally only (`resize: horizontal`)
- `.ease-resize-y` — Resize vertically only (`resize: vertical`)
- `.ease-resize-both` — Explicit both (alias)
- `.ease-resize-inline` — Logical inline direction
- `.ease-resize-block` — Logical block direction
- `.ease-resize-none` — Disable resize (`resize: none`)
- `.ease-resize-handle` — Custom `::-webkit-resizer` styling
- `.ease-resize-handle-custom` — Pseudo-element `::after` handle
- `.ease-{sm|md|lg|xl}:resize` / `:resize-x` / `:resize-y` / `:resize-none` — Responsive variants

## 2. How is it used?

```html
<!-- Both directions -->
<div class="ease-resize" style="width:200px;height:100px;">Content...</div>

<!-- Horizontal only -->
<div class="ease-resize-x" style="width:200px;">Width adjustable...</div>

<!-- Disable -->
<div class="ease-resize-none">Fixed size...</div>

<!-- Custom handle -->
<div class="ease-resize-handle-custom">Styled resizer...</div>
```

## 3. Why is this useful?

- **Fine control** — Both, horizontal, vertical, or no resize
- **Custom handles** — Styled resizer indicators
- **Responsive** — Breakpoint-prefixed variants
- **Override** — Apply `ease-resize-none` to disable inherited resize
