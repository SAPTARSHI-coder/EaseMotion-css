# Issue #8112: Tabs Component Hardcoded Limit Fix

This submission overrides and fixes the hardcoded limits in the core `components/tabs.css` component, resolving Issue #8112.

## What it does

The core `ease-tabs` component uses CSS `:nth-of-type(1)` through `:nth-of-type(8)` to handle state toggling, focus rings, and underline translation. This meant any tabs added beyond the 8th tab would fail to function visually.

This submission provides a `style.css` override that extends this functionality up to **15 tabs**. This provides a very safe upper bound for any reasonable CSS-only tab system without changing the core framework's HTML structure. It also fixes an omission where panels 7 and 8 were actually missing the `display: block` toggle in the core code.

## How to use it

To use this fix, include the `style.css` provided in this directory *after* you include the main `easemotion.css` framework:

```html
<link rel="stylesheet" href="path/to/easemotion.css">
<link rel="stylesheet" href="path/to/issue-8112-tabs-limit-fix/style.css">
```

Now you can safely use up to 15 tabs in the standard `ease-tabs` component structure!

## Why it fits EaseMotion CSS

EaseMotion CSS focuses on dependency-free, pure CSS components. By using standard CSS overrides to extend the capabilities of the core library, we solve a severe bug without breaking backwards compatibility or introducing JavaScript.
