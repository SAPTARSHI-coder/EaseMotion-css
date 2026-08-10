# Fix Input Placeholder Color in Dark Mode

## What does this do?
Fixes the `::placeholder` pseudo-element color on `.ease-input` fields so it has sufficient contrast in both light and dark modes.

## How is it used?
```html
<input class="ease-input" placeholder="Enter your email" />
```
Apply in both light and dark contexts — the fix handles both via `@media (prefers-color-scheme: dark)` and a `.dark` class override.

## Why is it useful?
Without a dark-mode `::placeholder` rule, the placeholder text defaults to a light-theme grey that becomes nearly invisible on dark backgrounds. This violates WCAG AA contrast requirements. This fix ensures the placeholder colour adapts correctly in all colour schemes. Fixes #32716.
