# Tree View

## What does this do?

A collapsible file tree built from nested `<details>` elements, with guide lines
that work at any nesting depth.

## How is it used?

```html
<div class="trv">
  <details open><summary>folder</summary>
    <details><summary>subfolder</summary>
      <span class="trv-f">file.js</span>
    </details>
  </details>
</div>
```

## Why is it useful?

Tree views are usually a recursive component with expansion state in JavaScript
and `role="tree"` / `role="treeitem"` ARIA layered on by hand. That ARIA pattern
has strict keyboard requirements — arrow keys to walk and expand nodes, Home and
End to jump — and partial implementations are worse than none, because assistive
technology announces a tree and then behaves like a list.

Nested `<details>` avoids the whole problem. Each node is a native disclosure with
its own expanded state, keyboard activation and correct announcement, and no ARIA
is needed because the semantics are real.

The indentation approach is what makes it scale. Rather than depth-specific
selectors, every `details` applies its own `padding-left` and `border-left`, so
nesting composes automatically — a tree ten levels deep needs no additional CSS.
Only the outermost level is reset, to avoid a stray guide line at the root.

Under reduced motion the chevron rotation and file fade are dropped, but the tree
remains fully functional since expansion is a native state change rather than an
animation.
