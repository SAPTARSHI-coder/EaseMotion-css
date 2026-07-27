# Notification Badge Icon Overlap Fix (`#56067`)

## What does this do?
Prevents numerical notification badges from overlapping or obscuring toolbar icons when displaying multi-digit numbers (like `99+`) using scalable pill geometry.

## How is it used?
Attach `ease-badge-count` (with optional `pill-fix` modifier for high-count triggers) directly to badge spans inside relatively positioned containers:
```html
<div style="position: relative;">
  <span class="icon">🔔</span>
  <span class="ease-badge-count danger pill-fix">99+</span>
</div>
```

## Why is it useful?
Solves issue #56067 by accommodating responsive content growth while protecting visual hierarchy across toolbars and navigation bells.