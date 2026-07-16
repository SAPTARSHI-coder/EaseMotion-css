# Directory Tree Expand

Animated expandable directory tree with smooth branch reveal transitions.

## CSS Custom Properties

| Variable           | Default             | Description                 |
|--------------------|---------------------|-----------------------------|
| `--tree-bg`        | `#0d0d1a`           | Card background color       |
| `--branch-color`   | `#3a3a5c`           | Chevron and icon color      |
| `--expand-duration`| `0.35s`             | Duration of branch animation|
| `--node-hover-bg`  | `rgba(99,102,241,0.15)` | Hover highlight color  |

## Usage

```html
<link rel="stylesheet" href="style.css">
<ul class="tree">
  <li class="tree-node">
    <details>
      <summary>📁 folder</summary>
      <ul class="branch">
        <li>📄 file.txt</li>
      </ul>
    </details>
  </li>
</ul>
```

Nest `<details>` elements inside `.tree-node` list items. Each `.branch` is a `<ul>` sibling of `<summary>`. The `branchReveal` keyframe animates opacity, max-height, and translateX.
