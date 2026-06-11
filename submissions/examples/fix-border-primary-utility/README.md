# Fix: .ease-border-primary Utility

### What does this do?

Demonstrates and documents the bug in `.ease-border-primary` where the class silently
has no visual effect when used on its own, and provides the exact one-line fix for the
maintainer to apply to `core/utilities.css`.

### The problem

`core/utilities.css` line 238 currently reads:

```css
.ease-border-primary { border-color: var(--ease-color-primary); }
```

`border-color` has no visual effect unless `border-style` is also set (it defaults to
`none`). So `<div class="ease-border-primary">` renders with no visible border at all.
The class is a silent no-op when used standalone, unlike every other `.ease-border-*`
modifier in the file.

### The fix (maintainer action on `core/utilities.css`)

```css
/* BEFORE — line 238 of core/utilities.css */
.ease-border-primary { border-color: var(--ease-color-primary); }

/* AFTER — replace with the full shorthand */
.ease-border-primary { border: 1px solid var(--ease-color-primary); }
```

This makes `.ease-border-primary` consistent with `.ease-border` and `.ease-border-2`,
which both use the full shorthand. No other classes are affected.

### How is it used?

After the fix, developers can use `.ease-border-primary` standalone:

```html
<!-- Works after fix — renders a 1px solid primary-color border -->
<div class="ease-border-primary ease-rounded ease-padding-4">
  Card with primary border
</div>

<!-- Composable with size modifier -->
<input class="ease-border-primary ease-rounded" type="text" placeholder="Primary border input">
```

### Why is it useful?

`.ease-border-primary` is a natural pairing with `.ease-text-primary` and
`.ease-bg-primary`. Any developer reaching for a semantic primary-color border will
try this class first and see nothing, then wonder if the framework is broken. Making it
self-contained is a correctness fix with zero risk of regression.
