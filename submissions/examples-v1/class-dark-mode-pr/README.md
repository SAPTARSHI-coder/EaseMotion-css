# Class-Based Dark Mode Manual Toggle Support

This submission introduces support for manual, class-based dark mode toggles (`.ease-dark` and `.ease-light`) to the design token variables system.

## The Problem

Currently, the framework's theme variables react _exclusively_ to system-level settings via `@media (prefers-color-scheme: dark)`. Because of this, developers cannot implement manual theme toggle switches (like standard dark mode toggle buttons) in their applications.

## The Solution

This feature expands `core/variables.css` to listen to explicit manual classes (`.ease-dark` on `<html>` or `<body>`) while retaining the automatic system-level media query fallback when no manual class override is specified.

### Proposed Token Structure:

```css
/* 1. Default Light Theme values */
:root {
  --ease-color-bg: #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text: #1e293b;
}

/* 2. System dark mode fallback (runs if no manual light-theme class is active) */
@media (prefers-color-scheme: dark) {
  :root:not(.ease-light) {
    --ease-color-bg: #0b1121;
    --ease-color-surface: #141e33;
    --ease-color-text: #f8fafc;
  }
}

/* 3. Explicit manual dark-theme override class */
:root.ease-dark {
  --ease-color-bg: #0b1121;
  --ease-color-surface: #141e33;
  --ease-color-text: #f8fafc;
}

/* 4. Explicit manual light-theme override class */
:root.ease-light {
  --ease-color-bg: #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text: #1e293b;
}
```

## How to Verify

1. Open `demo.html` in a web browser.
2. Toggle the theme button in the top-right corner.
3. Observe that the colors smoothly transition between light and dark mode, injecting `.ease-dark` and `.ease-light` classes onto the root document.
