# Fix ease-code-inline Dark Mode Contrast

## What does this do?
Adds `@media (prefers-color-scheme: dark)` and `.dark` class overrides
to `.ease-code-inline` so inline code uses a dark background with a
light accent color in dark mode.

## How is it used?
```html
<p>Use <code class="ease-code-inline">overflow-x: auto</code> here.</p>
```

## Why is it useful?
In dark mode, the default light-gray background on inline code becomes
nearly invisible against dark page backgrounds, breaking readability.
Fixes: #35840
