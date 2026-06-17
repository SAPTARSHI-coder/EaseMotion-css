# Navigation Links Alignment and Wrap Fix

## What does this do?

Fixes vertical misalignment and awkward text wrapping inside navigation menus by applying CSS Flexbox centering to list items (`li`) and forcing text links to remain on a single line (`white-space: nowrap`).

## How is it used?

Style list items inside navigation bars to center their children vertically, and enforce single-line text formatting on anchor links:

```html
<ul class="docs-header-links">
  <li><a href="#getting-started">Getting Started</a></li>
  <li>
    <a
      href="demo.html"
      class="ease-btn ease-btn-primary ease-btn-sm ease-btn-pill"
      >Live Demo →</a
    >
  </li>
</ul>
```

