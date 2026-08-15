# --ease-glow-warning Design Token

### What does this do?

Adds the missing `--ease-glow-warning` CSS custom property to complete the
semantic glow token set in `core/variables.css`.

### The gap

`core/variables.css` defines glow tokens for three of the four semantic colours:

```css
--ease-glow-primary: 0 0 16px rgba(108, 99, 255, 0.45);
--ease-glow-success: 0 0 16px rgba(34,  197, 94,  0.45);
--ease-glow-danger:  0 0 16px rgba(239, 68,  68,  0.45);
/* --ease-glow-warning ← missing */
```

`--ease-color-warning: #f59e0b` is fully defined (base, light, dark variants),
but there is no corresponding glow token. Developers who reach for
`var(--ease-glow-warning)` get a silent `unset`, and are forced to hardcode
`box-shadow` values that duplicate the framework's own colour system.

### The fix (maintainer action on `core/variables.css`)

Add one line immediately after `--ease-glow-danger`:

```css
--ease-glow-warning: 0 0 16px rgba(245, 158, 11, 0.45);
```

The RGBA value is derived directly from `--ease-color-warning: #f59e0b`
(`rgb(245, 158, 11)`), keeping the pattern identical to the other three tokens.

### How is it used?

```html
<!-- Warning glow card -->
<div class="ease-card ease-card-accent-warning"
     style="box-shadow: var(--ease-glow-warning);">
  Low disk space — please clean up.
</div>

<!-- Warning glow button -->
<button class="ease-btn ease-btn-hover"
        style="box-shadow: var(--ease-glow-warning); background: var(--ease-color-warning); color: #fff;">
  Confirm risky action
</button>
```

### Why is it useful?

EaseMotion CSS is a token-first framework. Having three out of four semantic glow
tokens is an incomplete API. Adding `--ease-glow-warning` makes the design system
internally consistent and lets developers compose warning states the same way they
compose primary, success, and danger states — without leaving the token system.
