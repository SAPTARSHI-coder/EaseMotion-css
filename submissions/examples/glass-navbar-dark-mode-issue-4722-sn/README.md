# Glass Sticky Navbar Dark Mode Background (Issue #4722)

## What does this do?
Adds dark mode translucent color overrides for `.ease-navbar-glass-blur` to ensure proper contrast and readability in dark scheme mode.

## How is it used?
When `.ease-navbar-glass-blur` is used in a dark scheme, it will automatically render a dark translucent background and dark borders.

## Why is it useful?
It prevents contrast and legibility issues where light transparent backgrounds are forced in dark mode.

## Affected File (maintainer will copy to `components/navbar.css`)
Modify the `@media (prefers-color-scheme: dark)` media query block in `components/navbar.css` to add the override:
```css
  @media (prefers-color-scheme: dark) {
    .ease-navbar-glass-blur {
      background: rgba(15, 23, 42, 0.45);
      border-color: rgba(255, 255, 255, 0.08);
    }
  }
```
