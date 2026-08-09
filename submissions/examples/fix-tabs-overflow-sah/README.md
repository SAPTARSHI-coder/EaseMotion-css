# Responsive Tabs Navigation Overflow Fix (`#56080`)

## What does this do?
Prevents multi-item tab navigation bars from overflowing or wrapping awkwardly on mobile viewports by enabling smooth horizontal touch-scrolling.

## How is it used?
Wrap tab buttons inside a nav container utilizing the `ease-tabs-scrollable` class:
```html
<nav class="ease-tabs-scrollable">
  <button class="tab-item active">Tab 1</button>
  <button class="tab-item">Tab 2 (Scrolls horizontally)</button>
</nav>
```

## Why is it useful?
Resolves issue #56080 by delivering clean touch gesture navigation with hidden scrollbars, keeping responsive mobile headers spotless.