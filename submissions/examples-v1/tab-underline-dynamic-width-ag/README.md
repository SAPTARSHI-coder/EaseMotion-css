# Tab Underline Dynamic Width Fix (Issue #14064)

## What does this do?
Demonstrates the corrected tab underline width calculation using `calc(100% / var(--tab-count, 3))` so the underline correctly spans exactly one tab, regardless of how many tabs exist.

## How is it used?
```html
<div class="ease-tabs" style="--tab-count: 4">
  <!-- 4 radio inputs, 4 labels, 4 panels -->
</div>
```
Set `--tab-count` to match your actual number of tabs.

## Why is it useful?
The default `--ease-tab-width: 33.333%` only works for exactly 3 tabs. This CSS custom property approach lets the underline dynamically adapt to any tab count without JavaScript.
