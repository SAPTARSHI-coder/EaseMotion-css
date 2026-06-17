# Navigation Button Vertical Alignment Fix

## What does this do?

Fixes the vertical alignment of navigation links and standalone buttons within navigation lists (`ul.docs-header-links`) by centering list items (`li`) using CSS Flexbox, and prevents link wrapping/overflowing using `flex-wrap: nowrap`.

## How is it used?

Apply flex styling to navigation list items and disable wrap on the navigation container:

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

