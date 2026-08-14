# Tooltip Mobile Overflow Fix

Fixes the issue where long tooltip text is cut off on mobile viewports.

**What does this do?**
This adds mobile-specific responsive styles (`@media (max-width: 640px)`) to allow multi-line text wrapping on smaller screens for tooltips, preventing the text from flowing outside the screen boundaries.

**How is it used?**
No structural HTML changes are needed. Simply continue to use the tooltip class normally, and it will now automatically handle long text gracefully on mobile:
```html
<span class="ease-tooltip" data-tooltip="This is a very long tooltip text that should wrap but doesn't">
  Hover me
</span>
```

**Why is it useful?**
It improves accessibility and the overall user experience for mobile device users by ensuring that tooltip content is fully readable, without altering the default desktop appearance. It directly resolves Issue #49876.
