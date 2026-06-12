# Preview Header Links Fix

## 1. What does this do?

Adds the missing "Animation Builder" quick link to the top header navigation of the Animation Preview page for cross-navigation consistency.

## 2. How is it used?

Add the quick link list item to the `ul.docs-header-links` container in the page header:

```html
<ul class="docs-header-links">
  <li><a href="index.html">Home</a></li>
  <li>
    <a href="animations-preview.html" class="active">Animation Preview</a>
  </li>
  <li><a href="animation-combo.html">Animation Builder</a></li>
</ul>
```
