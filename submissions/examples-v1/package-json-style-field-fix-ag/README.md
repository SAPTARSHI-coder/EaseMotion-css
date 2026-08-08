# [BUG FIX] package.json missing style field for bundlers

## What does this do?
Resolves CSS import errors in modern bundlers (Vite/Webpack) by documenting package exports structure configurations.

## How is it used?
```html
@import "easemotion-css/style";
```

## Why is it useful?
Allows developer tools to automatically resolve framework styles.

## Fixes
Fixes #9874
