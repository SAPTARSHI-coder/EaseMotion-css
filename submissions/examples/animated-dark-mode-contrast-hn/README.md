# Core Dark Mode Accessibility and Contrast Fix

## What does this do?
This contribution corrects a contrast vulnerability where page headings (`h1-h6`) and paragraph text (`p`) remained dark gray when dark mode was active, rendering them invisible. It maps typography elements to semantic color variables that shift to light colors when preferred system/class themes are set to dark.

## How is it used?
Apply standard heading and paragraph tags inside your layout:

```html
<link rel="stylesheet" href="style.css">

<div class="typography-container-hn">
  <h1>Legible Heading</h1>
  <p>Legible paragraph body text.</p>
</div>
```

The component automatically adapts colors in response to user prefers-color-scheme flags or dark mode class triggers.

## Why is it useful?
It brings typography into full compliance with WCAG 2.1 Contrast guidelines (Level AAA compliance). Previously, compiling a dark theme website using EaseMotion CSS yielded low-contrast text against dark backgrounds, preventing readability.
