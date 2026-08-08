# Tumble Dropdown 3D Animation Mixin (`#54711`)

## What does this do?
Provides an exciting 3D perspective fold-down rotation reveal animation for dropdown navigation menus and toolbars.

## How is it used?
Enclose your menu inside a 1000px perspective trigger container and attach the `ease-dropdown-tumble` class:
```html
<div class="dropdown-group">
  <button>Menu ▾</button>
  <div class="ease-dropdown-tumble">...</div>
</div>
```

## Why is it useful?
Solves issue #54711 by bringing depth and modern hardware-accelerated transformation physics to navigation architecture.