# Search Bar with Animated Expand on Focus

## What does this do?
A search input that starts compact (just an icon) and expands to full
width on click/focus. Saves space in navbars and toolbars.

## How is it used?

```html
<div class="ease-search-expand">
  <button class="ease-search-trigger" type="button">🔍</button>
  <input class="ease-search-input" type="text" placeholder="Search..." />
</div>
```

## Why is it useful?
Compact search bars save valuable navbar space while remaining easily
accessible. Pure CSS using :focus-within for smooth expand/collapse,
no JS required, with full prefers-reduced-motion support.