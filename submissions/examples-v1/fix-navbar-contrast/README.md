# Fix for Navbar Dark Mode Contrast

Resolves Issue #8400.

## Description
This submission fixes a severe contrast issue in `components/navbar.css`. The `@supports not (backdrop-filter: blur(0))` fallback originally only provided a light mode background. Because the `prefers-color-scheme: dark` media query appears later in the file, it overrides the fallback with a highly transparent `rgba(15, 23, 42, 0.3)` background, which is unreadable on browsers lacking blur filter support.

This fix adds a dark mode specific fallback inside the `@supports not` block with a solid dark background (`0.92` opacity), ensuring text remains legible.

## How to Apply
Maintainers should update `components/navbar.css` line 102:
```css
  @supports not (backdrop-filter: blur(0)) {
    .ease-navbar-glass,
    .ease-navbar-glass-blur {
      background: rgba(255, 255, 255, 0.92);
      border-color: rgba(15, 23, 42, 0.12);
    }
    @media (prefers-color-scheme: dark) {
      .ease-navbar-glass,
      .ease-navbar-glass-blur {
        background: rgba(15, 23, 42, 0.92) !important;
        border-color: rgba(255, 255, 255, 0.12) !important;
      }
    }
  }
```
