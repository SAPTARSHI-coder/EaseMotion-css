# Resize Vertical Utility

Introduces the layout dimension scaling parameter utility token (`.ease-resize-y`) under issue #15118.

## Functional Mechanics

- **The Problem:** When dealing with terminal boxes, dense text log outputs, code blocks, or expanding preview windows, user view needs vary. If heights are completely rigid, users must scroll through cramped views; if layout sizes wrap automatically without limit, long strings throw off peripheral components on the page.
- **The Solution:** Fluid native height handles. The `.ease-resize-y` utility forces standard browser scaling boundaries (`resize: vertical` paired with `overflow: auto`). This setups an on-demand interaction node that enables direct user scaling control over container depths while protecting global layout columns.

## Usage Layout Structure
```html
<div class="ease-resize-y" style="min-height: 100px; max-height: 500px;">
  </div>
```

Closes #15118
