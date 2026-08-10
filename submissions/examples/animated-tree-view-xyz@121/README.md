# Animated Tree View Component (`ease-tree-view-xyz`)

A zero-dependency, CSS-only animated tree view component designed for the **EaseMotion CSS** framework. Perfect for file explorers, organizational charts, and hierarchical data with smooth expand/collapse animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for expand/collapse.
- **Animation-First**: Smooth expand/collapse animations, arrow rotations, and hover effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: File explorer, organizational chart, and checklist trees.
- **Connecting Lines**: Visual hierarchy with connecting lines between nodes.
- **Node Selection**: Highlight selected nodes with distinct styling.
- **Expand/Collapse**: Smooth height transitions for child nodes.
- **Arrow Rotation**: Animated arrows indicating expand/collapse state.
- **Nested Levels**: Support for unlimited nesting depth.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Tree Node
```html
<div class="ease-tree-xyz">
  <ul class="ease-tree-xyz-list">
    <li class="ease-tree-xyz-item">
      <input type="checkbox" id="node-1" class="ease-tree-xyz-toggle" checked>
      <label for="node-1" class="ease-tree-xyz-node">
        <span class="ease-tree-xyz-icon">📁</span>
        <span class="ease-tree-xyz-text">Folder</span>
        <span class="ease-tree-xyz-arrow">▼</span>
      </label>
      <ul class="ease-tree-xyz-children">
        <li class="ease-tree-xyz-item">
          <label class="ease-tree-xyz-node">
            <span class="ease-tree-xyz-icon">📄</span>
            <span class="ease-tree-xyz-text">File.txt</span>
          </label>
        </li>
      </ul>
    </li>
  </ul>
</div>