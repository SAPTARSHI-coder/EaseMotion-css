# Grid Row Collapse Fix Utility

## What does this do?

This utility resolves dynamic implicit grid row height collapse and overlapping card layout bugs in iOS Safari/WebKit. It overrides WebKit height measurement failures by applying strict, content-driven auto-row limits.

## How is it used?

Attach the row guard layout class to grid containers that contain dynamic or fluid row sizes:

```html
<div class="ease-grid-row-guard">
  <div class="grid-item">Row 1 item content...</div>
  <div class="grid-item">Row 2 item content...</div>
</div>
```

## Why is it useful?

- **Prevents WebKit Height Collapse**: iOS Safari occasionally fails to calculate `repeat(N, minmax(0, 1fr))` constraints when dynamic inner elements scale, collapsing rows to 0px.
- **Content-Locked Bounds**: Combines `grid-template-rows: auto` and `grid-auto-rows: minmax(min-content, max-content)` to lock rendering boundaries to fit actual inner text blocks.
- **Stops Card Overlapping**: Preserves layout separation and gap properties under narrow mobile layouts.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to inspect the side-by-side diagnostic cards and computed layout properties.
