# [BUG FIX] .ease-navbar-glass dark-mode no-supports contrast

## What does this do?
Resolves white-on-white text issues on dark-mode navbar fallbars when backdrop-filters are not supported.

## How is it used?
```html
<nav class="ease-navbar-glass">Content</nav>
```

## Why is it useful?
Guarantees layout contrast compliance in environments without backdrop-filter support.

## Fixes
Fixes #10966
