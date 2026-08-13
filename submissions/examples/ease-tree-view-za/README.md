# CSS Tree View Component

## What does this do?
A CSS-only file and folder tree view with collapsible branches using the HTML details/summary elements and decorative connector lines.

## How is it used?
```html
<ul class="trv-tree">
  <li><details><summary><span class="trv-folder">Folder</span></summary>
    <ul><li><span class="trv-file">file.txt</span></li></ul>
  </details></li>
</ul>
```

## Why is it useful?
Creates interactive tree structures for file explorers, project documentation, and settings navigation. Uses native details/summary for collapse. Minimal, accessible, and responsive.
