# ease-print-styles-bh

Global print stylesheet for EaseMotion CSS components.

## What does this do?
Optimizes EaseMotion UI components for print media, reducing ink waste and improving readability.

## How is it used?
```html
<!-- Add to your HTML <head> -->
<link rel="stylesheet" href="engine/print.css">

<!-- Use utility class to hide elements -->
<nav class="ease-no-print">Navigation - won't print</nav>
```

## Why is it useful?
- Prevents dark backgrounds from wasting ink
- Removes decorative shadows
- Hides non-essential UI elements (nav, footer)
- Improves print readability

## Features
- `@media print` media queries
- Forces `color: black` and `background: transparent`
- Removes box-shadow and text-shadow
- `.ease-no-print` utility class
- `.ease-print-only` utility class
- Link URL printing
