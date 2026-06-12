# ease-min-h-0 / ease-min-w-0 — Flex & Grid Overflow Fix Utilities

### What does this do?

Adds two utility classes to `core/utilities.css` that fix the most common silent
flexbox and grid layout bug: content that should scroll or truncate instead
overflows and expands its container.

### The problem

Flex and grid items have an implicit `min-height: auto` and `min-width: auto`.
This means:

- A flex column child with `overflow-y: auto` does not scroll — it grows instead
- A flex row child with `.ease-truncate` does not truncate — text overflows

The fix is `min-height: 0` (column axis) or `min-width: 0` (row axis) on the
flex/grid child. EaseMotion CSS has no utility for this, so developers hit a
confusing invisible bug with no in-framework escape hatch.

Notably, `.ease-truncate` **already exists** in `core/utilities.css` but silently
fails inside a flex row without `min-width: 0` on the parent — making this a
direct gap in the framework's own utility set.

### The fix (maintainer action on `core/utilities.css`)

Add two classes in the overflow/display section:

```css
/* Flex / grid overflow fix */
.ease-min-h-0 {
  min-height: 0;
}
.ease-min-w-0 {
  min-width: 0;
}
```

### How is it used?

```html
<!-- Scrollable panel in a flex column -->
<div class="ease-flex ease-flex-col" style="height: 400px;">
  <header class="ease-padding-4">Header</header>
  <div class="ease-flex-1 ease-overflow-y-auto ease-min-h-0">
    <!-- This div now scrolls instead of pushing the container -->
    <p>Long content…</p>
  </div>
</div>

<!-- Truncated text in a flex row (ease-truncate alone fails without this) -->
<div class="ease-flex ease-gap-4">
  <img src="avatar.jpg" style="width:40px;flex-shrink:0;" />
  <div class="ease-min-w-0">
    <p class="ease-truncate">Very long display name that must be truncated</p>
  </div>
</div>
```

### Why is it useful?

This is one of the most-searched flexbox issues on Stack Overflow. Since
EaseMotion CSS ships both `.ease-flex` and `.ease-truncate`, the framework
creates the conditions for this bug and should also provide the fix.
`ease-min-h-0` and `ease-min-w-0` are two lines of CSS that unlock correct
behaviour for entire categories of layouts.
