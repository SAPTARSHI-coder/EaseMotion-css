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

```css
.docs-header-links li {
  display: flex;
  align-items: center;
}

.docs-header-links a {
  white-space: nowrap;
}
```

## Why is it useful?

It prevents navigation text links (especially multi-word items) from wrapping onto two lines when space is limited, which ruins the vertical flow, and ensures all text and button components sit perfectly aligned along a single horizontal axis.
