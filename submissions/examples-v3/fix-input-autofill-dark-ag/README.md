# Fix Input Autofill Dark Mode Background

## What does this do?
Overrides the browser autofill yellow/white background on `.ease-input`
in dark mode using `-webkit-autofill` + `box-shadow: inset 0 0 0 1000px` trick.

## How is it used?
```html
<input class="ease-input" type="email" autocomplete="email" placeholder="Email">
```

## Why is it useful?
Browsers inject their own background for autofilled fields that cannot
be overridden with `background-color`. The only reliable cross-browser fix
is the inset box-shadow trick combined with `-webkit-text-fill-color`.
Without this, dark mode UIs break visually on autofill. Fixes: #35781
