# ease-context-menu

## What does this do?

Provides a **custom context menu** component that replaces the browser's default right-click menu with a styled, animated menu supporting submenus, keyboard shortcuts, disabled items, and danger actions.

## How is it used?

```html
<div class="ease-context-menu ease-fade-in" id="contextMenu">
  <button class="ease-context-menu-item" data-action="new-file">
    <span class="ease-context-menu-item-icon">📄</span>
    <span class="ease-context-menu-item-label">New File</span>
    <span class="ease-context-menu-item-shortcut">⌘N</span>
  </button>
  <hr class="ease-context-menu-divider" />
  <div class="ease-context-menu-submenu">
    <button class="ease-context-menu-item">
      <span class="ease-context-menu-item-label">Export</span>
      <span class="ease-context-menu-item-arrow">▸</span>
    </button>
    <div class="ease-context-menu ease-fade-in" data-submenu="export">
      <button class="ease-context-menu-item" data-action="export-pdf">
        Export as PDF
      </button>
    </div>
  </div>
</div>
```

### Available Classes

| Class                               | Purpose                                           |
| ----------------------------------- | ------------------------------------------------- |
| `.ease-context-menu`                | Context menu container (fixed, hidden by default) |
| `.ease-context-menu.ease-open`      | Visible state                                     |
| `.ease-context-menu.ease-fade-in`   | Smooth entrance animation (scale + fade)          |
| `.ease-context-menu-item`           | Individual menu item (button)                     |
| `.ease-context-menu-item-icon`      | Icon within a menu item                           |
| `.ease-context-menu-item-label`     | Text label within a menu item                     |
| `.ease-context-menu-item-shortcut`  | Keyboard shortcut hint                            |
| `.ease-context-menu-item-arrow`     | Submenu arrow indicator (▸)                       |
| `.ease-context-menu-item[disabled]` | Disabled menu item                                |
| `.ease-context-menu-divider`        | Horizontal separator between items                |
| `.ease-context-menu-submenu`        | Wrapper for items with nested submenus            |
| `.ease-context-menu.ease-open-left` | Opens submenu to the left (when near right edge)  |
| `.ease-context-menu-danger`         | Danger variant (red hover state)                  |

### JavaScript Behavior

The demo includes inline JS that handles:

- **Right-click detection** — prevents default browser menu
- **Positioning** — places menu at cursor, flips near edges
- **Submenus** — hover/open with click support, auto-flip left when near right edge
- **Click outside** — closes all menus
- **Escape key** — closes submenu first, then root menu
- **Disabled items** — no interaction with `disabled` attribute

### Animation

| Animation                   | Description                                  |
| --------------------------- | -------------------------------------------- |
| `ease-context-menu-fade-in` | Scale (0.95) + fade-in + slide-up over 200ms |

### Edge Cases Handled

| Case             | Behavior                                       |
| ---------------- | ---------------------------------------------- |
| Near right edge  | Submenu opens to the left (`.ease-open-left`)  |
| Near bottom edge | Menu repositions upward                        |
| Escape key       | Closes submenu first, then root menu           |
| Click outside    | Closes all open menus                          |
| Disabled items   | Styled with reduced opacity, no pointer events |

### Design Tokens Used

| Token                      | Fallback              | Purpose                      |
| -------------------------- | --------------------- | ---------------------------- |
| `--ease-color-surface`     | `#fff` / `#141e33`    | Menu background              |
| `--ease-color-text`        | `#1e293b` / `#e2e8f0` | Item text                    |
| `--ease-color-neutral-100` | `#f1f5f9`             | Item hover                   |
| `--ease-color-neutral-200` | `#e2e8f0`             | Border, divider              |
| `--ease-color-neutral-400` | `#94a3b8`             | Shortcut, arrow              |
| `--ease-color-neutral-700` | `#334155`             | Dark border                  |
| `--ease-color-neutral-800` | `#1e293b`             | Dark hover                   |
| `--ease-color-primary`     | `#6c63ff`             | Focus outline                |
| `--ease-color-danger`      | `#dc2626`             | Danger text                  |
| `--ease-shadow-lg`         | `0 10px 30px...`      | Menu shadow                  |
| `--ease-radius-md`         | `0.75rem`             | Menu border radius           |
| `--ease-space-1`           | `0.25rem`             | Menu padding, divider margin |
| `--ease-space-2`           | `0.5rem`              | Item padding                 |
| `--ease-space-3`           | `0.75rem`             | Item gap                     |
| `--ease-space-4`           | `1rem`                | Item padding                 |
| `--ease-text-sm`           | `0.875rem`            | Item font size               |
| `--ease-text-xs`           | `0.75rem`             | Shortcut font size           |
| `--ease-speed-fast`        | `150ms`               | Transition duration          |

Fixes #25567
