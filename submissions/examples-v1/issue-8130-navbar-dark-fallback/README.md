# Issue #8130: Navbar Dark Mode Fallback Fix

This submission overrides the core `components/navbar.css` component to resolve an accessibility bug where the dark mode fallback for unsupported browsers was entirely missing (Issue #8130).

## What it does

When a browser does not support `backdrop-filter`, the core CSS applies a solid white fallback. However, in dark mode, the dark mode media query (which sets a highly transparent `0.3` opacity background) overrides this fallback because it is defined later in the stylesheet. This makes the navbar illegible against scrolling content.

This override injects a specific `@media (prefers-color-scheme: dark)` rule *inside* an `@supports not (backdrop-filter: blur(0))` block. It enforces a solid dark background (`rgba(15, 23, 42, 0.95)`) when glassmorphism isn't supported, ensuring text remains readable.

## How to use it

Include the `style.css` provided in this directory *after* you include the main `easemotion.css` framework:

```html
<link rel="stylesheet" href="path/to/easemotion.css">
<link rel="stylesheet" href="path/to/issue-8130-navbar-dark-fallback/style.css">
```
