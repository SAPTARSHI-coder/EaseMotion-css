# Retro Pixel Treeview Menu (Accessibility Setup Guide)

This guide outlines the critical accessibility (a11y) setup for the Retro Pixel Treeview Menu. A Treeview is a complex widget, but by combining semantic HTML5 elements with appropriate ARIA roles, we can ensure it is fully accessible to keyboard navigators and screen readers without needing complex JavaScript.

## 1. HTML Markup & ARIA Roles

The foundational accessibility comes from mapping the HTML list structure to the ARIA Tree structure (`tree`, `treeitem`, `group`).

- **Root Element**: The outermost `<ul>` must have `role="tree"`.
- **Nodes**: Every `<li>` within the tree must have `role="treeitem"`.
- **Nested Groups**: Any `<ul>` that acts as a container for children must have `role="group"`.
- **Expand/Collapse State**: If a `treeitem` has children, it should technically have `aria-expanded="true"` or `aria-expanded="false"`. Modern screen readers can often infer this from the `<details>` tag natively, but adding it explicitly to the `<li>` is a best practice.

### Example

```html
<!-- Root Tree -->
<ul class="tree-list" role="tree">
    
    <!-- Expandable Node -->
    <li role="treeitem" aria-expanded="true">
        <!-- Native Expand/Collapse via details/summary -->
        <details open>
            <summary class="tree-node">
                <span class="icon folder-icon"></span>
                WEAPONS
            </summary>
            
            <!-- Nested Group -->
            <ul role="group">
                <!-- Leaf Node -->
                <li role="treeitem">
                    <a href="#" class="tree-node tree-leaf">
                        <span class="icon file-icon"></span>
                        SWORD_LV1
                    </a>
                </li>
            </ul>
        </details>
    </li>
    
</ul>
```

## 2. Keyboard Navigation

Because we are using the native `<details>` and `<summary>` elements, basic keyboard navigation is provided by the browser out-of-the-box:

- Users can press `Tab` to navigate through the tree nodes.
- When focused on a `<summary>` element, users can press `Space` or `Enter` to expand or collapse the node.

*Note: For a fully compliant WAI-ARIA Treeview pattern, arrow key navigation (Up/Down to traverse, Left/Right to expand/collapse) is recommended. Implementing arrow key navigation requires JavaScript and falls outside the scope of this CSS-only guide.*

## 3. Focus Visibility

When users navigate via keyboard, it is absolutely critical that they can see which element currently has focus. The retro styling uses solid blocks of color, so a standard dashed outline might get lost. We use a high-contrast solid outline offset inwards.

```css
.tree-node:focus-visible {
    /* High contrast yellow against the blue background */
    outline: 3px solid #ffff00;
    
    /* Inset outline prevents clipping if the node is flush against a container */
    outline-offset: -3px; 
    
    background-color: #0000ff;
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
