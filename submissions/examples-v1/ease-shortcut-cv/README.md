# Keyboard Shortcut Display (cv variant)

## What does this do?
A clean, organized keyboard shortcut display component perfect for help menus, command palettes, cheatsheets, and documentation. Shows shortcuts with descriptions in a categorized list format with realistic 3D-styled keys.

## How is it used?

### Basic Usage:

```html
<div class="ease-shortcut-cv">
    <div class="ease-shortcut-cv-category">
        <h3 class="ease-shortcut-cv-title">📝 Category Name</h3>
        
        <div class="ease-shortcut-cv-item">
            <span class="ease-shortcut-cv-desc">Description</span>
            <div class="ease-shortcut-cv-keys">
                <kbd class="ease-shortcut-cv-key">Ctrl</kbd>
                <span class="ease-shortcut-cv-plus">+</span>
                <kbd class="ease-shortcut-cv-key">S</kbd>
            </div>
        </div>
    </div>
</div>

<div class="ease-shortcut-cv-item">
    <span class="ease-shortcut-cv-desc">Open command palette</span>
    <div class="ease-shortcut-cv-keys">
        <kbd class="ease-shortcut-cv-key">Ctrl</kbd>
        <span class="ease-shortcut-cv-plus">+</span>
        <kbd class="ease-shortcut-cv-key">Shift</kbd>
        <span class="ease-shortcut-cv-plus">+</span>
        <kbd class="ease-shortcut-cv-key">P</kbd>
    </div>
</div>

<div class="ease-shortcut-cv-item">
    <span class="ease-shortcut-cv-desc">Close dialog</span>
    <div class="ease-shortcut-cv-keys">
        <kbd class="ease-shortcut-cv-key">Esc</kbd>
    </div>
</div>