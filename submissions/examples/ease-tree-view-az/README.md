# Tree View Component

### What does this do?
Adds `ease-tree-view-az` — a CSS-only file tree / hierarchical navigation component using native `<details>` / `<summary>` elements for expand/collapse, with folder/file icons, chevron rotation, selection state, badges, and size variants.

### How is it used?
The maintainer should copy `style.css` into `components/tree-view.css` and import it.

```html
<div class="ease-tree-view-az">
  <details open>
    <summary>
      <svg class="ease-tree-chevron-az"><!-- chevron --></svg>
      <svg class="ease-tree-icon-az folder"><!-- folder --></svg>
      <span class="ease-tree-label-az">src</span>
    </summary>
    <div class="ease-tree-children-az">
      <a href="#" class="ease-tree-leaf-az">
        <svg class="ease-tree-icon-az file"><!-- file --></svg>
        <span class="ease-tree-label-az">index.ts</span>
      </a>
    </div>
  </details>
</div>
```

Variants: `.flush` (no border), `.sm` / `.lg` sizes. Item states: `.selected`.

### Why is it useful?
1. **Zero JS** — expand/collapse uses native `<details>` / `<summary>`, fully keyboard accessible
2. **Visual hierarchy** — chevron rotates 90deg on open, folder icon turns blue when expanded, children are indented
3. **Rich leaves** — supports linked items (anchors), selected state, inline badges for counts
