# Toast and FAB Overlap Fix

Fixes the issue where toast notifications inside `.ease-toast-container` overlap and obscure Floating Action Buttons (`.ease-fab`) on mobile screens.

**What does this do?**
Introduces a new utility class `.ease-toast-offset-fab` that adds a safe bottom margin to the toast container, shifting it upwards enough to avoid overlapping with a standard-sized FAB.

**How is it used?**
Apply the `.ease-toast-offset-fab` class directly to the `.ease-toast-container` when you have a `.ease-fab` on the same screen:

```html
<div class="ease-toast-container ease-bottom-right ease-toast-offset-fab">
  <div class="ease-toast">
    New message received!
  </div>
</div>
```

**Why is it useful?**
It resolves Issue #49956 by preventing interactive elements (like the FAB) from being blocked by dynamic notifications, greatly improving the user experience and accessibility on touch devices.
