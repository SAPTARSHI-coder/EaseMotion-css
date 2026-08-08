# [BUG FIX] .ease-footer link hover ignores --ease-color-primary

## What does this do?
Fixes footer link hover ignoring primary theme overrides by using CSS custom variables rather than hardcoded visual variables.

## How is it used?
```html
a:hover { color: var(--ease-color-primary); }
```

## Why is it useful?
Allows users to fully style all component states using standard CSS design variables.

## Fixes
Fixes #9858
