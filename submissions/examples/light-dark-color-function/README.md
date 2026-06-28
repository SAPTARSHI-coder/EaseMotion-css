# CSS light-dark() Color Function

## What does this do?
A themed page using the CSS `light-dark()` color function to define both light and dark colors in a single declaration, with a toggle that switches between `color-scheme: light` and `color-scheme: dark`.

## How is it used?
Open `demo.html` in a browser and click "Toggle Theme" to switch between light and dark modes. The `light-dark()` function in CSS handles both values in one line:

    color: light-dark(#1a1a2e, #e2e8f0);

The first value is for light mode, the second for dark mode. The `data-theme` attribute on `<html>` controls which scheme is active.

## Why is it useful?
Traditional theming requires duplicating every color declaration inside a `@media (prefers-color-scheme: dark)` block. `light-dark()` eliminates this duplication, making theme code shorter and more maintainable. Combined with `color-scheme`, it provides automatic or manual theme switching with minimal CSS.
