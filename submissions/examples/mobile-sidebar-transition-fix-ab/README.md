# Mobile Sidebar Transition Fix

## 1. What does this do?

It fixes the responsive collapsible sidebar transition on mobile viewports (<= 768px) by swapping immediate `display` toggling with `visibility` interpolation, restoring smooth slide-in and slide-out animations.

## 2. How is it used?

No usage changes are required; it fixes the built-in mobile layout transition automatically:

```html
<div class="ease-sidebar-layout ease-sidebar-open" id="layout">
  <aside class="ease-sidebar">
    <!-- Sidebar contents -->
  </aside>
  <main class="ease-sidebar-main">
    <button class="ease-sidebar-toggle">Toggle</button>
    <!-- Main content -->
  </main>
</div>
```

## 3. Why is it useful?

In the original implementation, toggling `display: none` / `display: block` in the same paint cycle as `transform` strips the transition state, causing the sidebar to flash open and closed instantly. Transitioning the discrete `visibility` property in tandem with the transform ensures smooth entry and exit animations on mobile devices.
