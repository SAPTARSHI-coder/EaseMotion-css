# Sandbox Layout Fix: `light-dark()` Color-Mix Fallback Flash Resolution

## Overview
A precision color-pipeline fix for translucent UI badges and dynamic components that combine native `light-dark()` functions with `color-mix()` in relative color syntax. It eliminates theme-toggle color flashing, black/magenta dropouts, and invalid fallback states across Gecko and Blink layout engines.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive theme verification playground providing dynamic class switching to stress-test color recalculation passes.
* `style.css` — Scoped modifier stylesheet establishing `@property` token registration and root-level variable isolation.

## 🐛 The Bug Resolved
Nesting the native `light-dark()` color function directly inside `color-mix()` (e.g., `color-mix(in oklch, light-dark(...) 20%, transparent)`) causes visual regressions when dynamically switching theme classes (`.dark-theme` / `.light-theme`). Because the browser's style recalculation engine evaluates `color-mix()` before the updated `color-scheme` property fully cascades down to child elements, `light-dark()` fails to resolve its color channels mid-frame, causing text, borders, and backgrounds to flash solid black, white, or invalid fallback magenta.

## 🛠️ The Solution
1. **Root Variable Isolation:** Pull `light-dark()` out of inline component expressions and define it at the theme token level (`--ease-theme-primary: light-dark(...)`).
2. **Explicit CSS `@property` Registration:** Register custom color properties using `@property` to instruct the browser's style engine how to parse and interpolate color channels deterministically.
3. **Synchronous `color-scheme` Cascading:** Declare `color-scheme: inherit` directly on component containers to force immediate, synchronous inheritance of system color scheme states across element boundaries.
