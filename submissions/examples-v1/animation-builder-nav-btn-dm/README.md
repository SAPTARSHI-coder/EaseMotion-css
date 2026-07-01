# Standout Animation Builder Navigation Button

## What does this do?

Adds a dedicated, high-contrast "Animation Builder" primary button to the global top navigation bar of the documentation website, allowing developers to access the interactive builder tool with a single click.

## How is it used?

In the navigation header element (e.g. `<ul class="docs-header-links">` or `<nav class="quick-links-top">`), add the `ease-btn` and `ease-nav-button` classes to the Animation Builder anchor link:

```html
<ul class="docs-header-links">
  <li><a href="index.html">Home</a></li>
  <li><a href="animations-preview.html">Animation Preview</a></li>
  <li>
    <a href="animation-combo.html" class="ease-btn ease-nav-button"
      >Animation Builder</a
    >
  </li>
</ul>
```

## Why is it useful?

EaseMotion CSS values speed, accessibility, and frictionless utility. The Animation Builder is the central tool for customizing, chaining, and copying animated class combinations in real time. Positioning it front-and-center in the global top header navigation as an explicit call-to-action significantly improves the developer experience by removing redundant clicks and highlighting core visual capabilities immediately.

## Tech Stack

- HTML
- CSS (pure CSS, responsive, supports light and dark themes)
