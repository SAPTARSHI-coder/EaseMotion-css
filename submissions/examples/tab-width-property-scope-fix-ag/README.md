# Tab Width Property Scope Fix (Issue #14070)

## What does this do?
Demonstrates how to prevent `--tab-width` from bleeding between tab component instances by resetting the custom property to its default value at the `.demo-tabs` component root.

## How is it used?
```html
<!-- Auto tabs with custom width -->
<div class="ease-tabs ease-tabs-auto" style="--tab-width: 50%">...</div>

<!-- Standard tabs — not affected by the auto tabs above -->
<div class="ease-tabs">...</div>
```

## Why is it useful?
CSS custom properties inherit down the tree. By resetting `--tab-width` at each `.ease-tabs` root, we prevent values set on one tab component from leaking into sibling or descendant components on the same page.
