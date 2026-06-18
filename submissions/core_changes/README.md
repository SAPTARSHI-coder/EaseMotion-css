# Replace Hardcoded outline-offset with CSS Variable

## What does this do?
Replaces the hardcoded `outline-offset: 3px` in `components/buttons.css` with CSS variable `--ease-outline-offset` so the outline offset updates globally with the design system.

## How is it used?
Add to root or any scope:
```css
:root {
  --ease-outline-offset: 3px;
}
```

Override per scope when needed:
```css
.dark-mode {
  --ease-outline-offset: 4px;
}
```

## Why is it useful?
Hardcoded values break design system consistency. Using a CSS variable allows global updates, theme overrides, and accessibility adjustments without editing the component file. The fallback to `3px` ensures full backward compatibility.

Fixes #12200
