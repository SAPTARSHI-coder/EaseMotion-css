# Retro Pixel Treeview Menu (Responsive Breakpoints Layout)

This guide documents how to create a fluid, responsive layout for the Retro Pixel Treeview Menu. Using media queries, we dynamically adjust the font size, node padding (touch targets), indentation, and icon sizes across different viewports.

## Responsive Configuration via CSS Variables

The most maintainable approach to responsive design is updating CSS Custom Properties at different breakpoints, rather than redeclaring complex styling rules on individual elements.

### CSS Implementation

We use a mobile-first approach. The base variables ensure that on small touch screens, the tree nodes have sufficient padding to be easily tapped without accidental misclicks. As the screen size increases and users switch to more precise pointer devices (mice), we can tighten the spacing.

```css
:root {
    /* Base Variables (Mobile First - Larger touch targets) */
    --tree-font-size: 0.75rem;
    --tree-padding: 0.75rem;
    --tree-indent: 1rem;
    --tree-icon-size: 1rem;
}

/* 
 * RESPONSIVE BREAKPOINTS MODIFIER
 */
.pixel-treeview--responsive {
    
    /* Tablet Breakpoint */
    @media (min-width: 768px) {
        --tree-font-size: 0.875rem;
        --tree-padding: 0.5rem;
        --tree-indent: 1.5rem;
        --tree-icon-size: 1.25rem;
    }

    /* Desktop Breakpoint - Tighter spacing for mouse users */
    @media (min-width: 1024px) {
        --tree-font-size: 1rem;
        --tree-padding: 0.25rem 0.5rem;
        --tree-indent: 2rem;
        --tree-icon-size: 1.5rem;
    }
}
```

## HTML Markup Example

Apply the `.pixel-treeview--responsive` class to the main container. The Treeview utilizes semantic HTML `<details>` and `<summary>` elements, which provide out-of-the-box accessible expand/collapse functionality.

```html
<!-- Apply the responsive modifier class -->
<div class="pixel-treeview pixel-treeview--responsive">
    <h2 class="tree-title">INVENTORY</h2>
    
    <ul class="tree-list" role="tree">
        <li role="treeitem" aria-expanded="false">
            <!-- Details tag provides native expand/collapse -->
            <details>
                <!-- Summary is the clickable trigger -->
                <summary class="tree-node">
                    <span class="icon folder-icon"></span>
                    WEAPONS
                </summary>
                <ul role="group">
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
</div>
```

## Accessibility Requirements

1. **Semantic HTML**: Relying on `<details>` and `<summary>` ensures that keyboard navigation (`Tab`, `Space`/`Enter` to toggle) works automatically without JavaScript.
2. **Focus Visibility**: For keyboard users navigating through the tree, you must provide a high-contrast focus state.
   ```css
   .tree-node:focus-visible {
       outline: 2px solid #ffff00;
       outline-offset: -2px;
       background-color: #0000ff;
   }
   ```
3. **ARIA Attributes**: Ensure `role="tree"`, `role="treeitem"`, and `role="group"` are applied appropriately as shown in the markup to provide context to screen reader users.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
