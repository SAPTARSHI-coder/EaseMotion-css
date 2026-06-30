# Tree View / Nested Navigation Component

## What does this submission do?

Adds a **Tree View** component for displaying hierarchical data — file browsers, category navigation, project structures, org charts, and nested menus. Supports expand/collapse with smooth animation, per-node icons, selection, keyboard navigation (Arrow keys, Enter, Space, Home, End), and full ARIA compliance.

## How was it implemented?

- **CSS** (`style.css`): The `.tree` component uses nested `<ul>` lists with CSS indent padding increasing by `--tree-indent` (20px) per level. Expand/collapse is controlled via `max-height` and `opacity` transitions on `.tree-sub` — when `.tree-item.expanded`, the child `<ul>` gets `max-height: 1000px; opacity: 1`; when `.collapsed`, `max-height: 0; opacity: 0`. The `.tree-toggle` button rotates 90deg on expanded state. Node states are styled via modifier classes: `.selected` (blue highlight), `.focused` (blue outline ring), and `.disabled` (dimmed, no pointer events).
- **HTML/JS** (`demo.html`): The `TreeView` class takes a container ID and nested data array. It recursively builds `<ul>/<li>` DOM with proper `role="tree"`, `role="treeitem"`, `role="group"`, `aria-expanded`, and `aria-level` attributes. Each branch node has a toggle button (▶/▾) that rotates. Clicking a node selects it (adds `.selected`, removes from previous). Double-click toggles expand/collapse. Keyboard handling on the container listens for ArrowDown/Up (navigate visible items), ArrowRight (expand), ArrowLeft (collapse or move to parent), Enter/Space (select + toggle), Home (first item), End (last item). The `getVisibleItems()` method walks up the parent chain to check if all ancestors are expanded, returning only visible nodes. Three demo trees showcase a file browser, a project structure, and a category navigation with item counts.

## Why these choices?

- **CSS `max-height` transition** provides a smooth slide animation for expand/collapse that degrades gracefully (no JS animation frame overhead).
- **Flat `allItems` array + parentId chain** makes it efficient to compute visibility, selection, and keyboard navigation without DOM traversal.
- **ARIA tree pattern** (`role="tree"`, `role="treeitem"`, `aria-expanded`, `aria-level`) ensures screen reader compatibility — the keyboard navigation follows the WAI-ARIA tree view design pattern.
- **CSS indentation via descendant selectors** (`.tree .tree .tree-node`) is simpler than JS-based level tracking for styling.
- **3 demo trees** with different icon sets (file types, project files, category emojis) show the component's flexibility.

## Files

| File        | Purpose                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------- |
| `demo.html` | 3 interactive tree views: file browser, project structure, category nav — with keyboard navigation |
| `style.css` | Tree styles: nesting, expand/collapse animation, states, toggle rotation, indentation              |
| `README.md` | This documentation                                                                                 |
