# Engine Dynamic Theme Palette Injection Runtime

## What does this do?
Enables scoped theme palette switching via `em="theme-<name>"` DSL attributes.

## How is it used?
```html
<div em="theme-cyberpunk fade-in">Scoped Cyberpunk Theme Node</div>
```

## Why is it useful?
Scopes custom property color palettes to localized DOM subtrees without global CSS class clutter or specificity wars.
