# Sidebar z-index Fix — Issue #8569

Demonstrates using `--ease-z-overlay` CSS variable instead of hardcoded `z-index: 100` in sidebar component.

## The Fix

**Before** (`components/sidebar.css` line 77):
```css
@media (max-width: 768px) {
  .ease-sidebar {
    z-index: 100; /* hardcoded */
  }
}
```

**After**:
```css
@media (max-width: 768px) {
  .ease-sidebar {
    z-index: var(--ease-z-overlay, 100); /* uses variable */
  }
}
```

## Benefits

- **Consistency** — `navbar.css` already uses `var(--ease-z-overlay, 100)`
- **Customizability** — users can change all overlay z-indices by setting `--ease-z-overlay`
- **Proper stacking** — overlay backdrop uses `calc(var(--ease-z-overlay, 100) - 1)`, toggle uses `calc(var(--ease-z-overlay, 100) + 1)`

## Files

- `style.css` — fixed sidebar styles using `--ease-z-overlay`
- `demo.html` — interactive demo with mobile overlay sidebar
- `README.md` — this file

## Usage

```html
<aside class="ease-sidebar-fixed">
  <div class="sidebar-logo">Logo</div>
  <a href="#">Link</a>
</aside>
<main class="ease-sidebar-content">
  Page content
</main>
```

The `--ease-z-overlay` variable (default `100`) controls the sidebar's z-index. Override globally:

```css
:root {
  --ease-z-overlay: 200;
}
```
