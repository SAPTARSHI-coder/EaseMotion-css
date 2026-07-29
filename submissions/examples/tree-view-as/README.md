# File Tree

### What does this do?

It shows a file explorer tree where folders expand and collapse to reveal nested files, each row with a folder or file icon and a caret that rotates when the folder is open. It works with no JavaScript.

### How is it used?

```html
<div class="tree" role="tree">
  <details class="tree-folder" open>
    <summary><svg class="tf-caret">...</svg><svg class="tf-ic">...</svg>src</summary>
    <details class="tree-folder"><summary>...components</summary><a class="tree-file"><svg>...</svg>Button.css</a></details>
    <a class="tree-file"><svg>...</svg>index.css</a>
  </details>
</div>
```

Nest `tree-folder` details inside each other for subfolders and use `tree-file` links for files. Nested folders and files indent automatically, and the caret rotates on open.

### Why is it useful?

Editors and docs show a collapsible file tree in the sidebar. This builds a nested expandable tree with folder and file icons using only the native details element and CSS. Rows are keyboard operable and transitions are removed under reduced motion.
