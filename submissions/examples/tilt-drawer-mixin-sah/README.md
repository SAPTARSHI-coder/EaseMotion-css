# 3D Tilt Drawer Side Panel Mixin (`#54689`)

## What does this do?
Provides a high-impact slide-out navigation sidebar that rotates across a 3D perspective Y-axis angle as it glides in from the screen edge.

## How is it used?
Wrap an expandable sidebar drawer inside an `ease-drawer-container` configured with the `ease-drawer-tilt` transition box:
```html
<div class="ease-drawer-container open">
  <aside class="ease-drawer-tilt">Sidebar Content</aside>
</div>
```

## Why is it useful?
Solves issue #54689 by injecting realistic physical folding depth into mobile and desktop navigation slide-overs.