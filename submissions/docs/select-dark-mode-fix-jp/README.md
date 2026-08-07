# Select Dropdown Dark Mode Fix

Fixes the issue where the `.ease-select` dropdown arrow SVG is invisible in dark mode due to its hardcoded dark gray color (`#64748b`).

**What does this do?**
This adds a dark mode override (`@media (prefers-color-scheme: dark)`) for the `.ease-select` class that updates the inline SVG `background-image` stroke color to white (`%23ffffff`), ensuring it provides high contrast against dark backgrounds.

**How is it used?**
No structural HTML changes are needed. The fix automatically applies to any existing `.ease-select` elements when dark mode is active.

```html
<select class="ease-select">
  <option selected>Choose an option...</option>
</select>
```

**Why is it useful?**
It resolves a critical accessibility issue (Issue #49925) where users could not visually distinguish the select as a dropdown control when using the dark theme.
