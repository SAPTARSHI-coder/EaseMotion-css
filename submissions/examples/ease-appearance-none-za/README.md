## What does this do?

Provides an `ease-appearance-none` utility class that resets native browser styling on form controls (select, checkbox, radio, button, input) using `appearance: none`.

## How is it used?

```html
<select class="ease-appearance-none-za">
  ...
</select>
<input type="checkbox" class="ease-appearance-none-za" />
```

## Why is it useful?

EaseMotion is a CSS framework but lacks an appearance reset utility. Native form controls look inconsistent across browsers. `appearance: none` is the standard way to remove default OS-level styling so custom CSS can take full effect.
