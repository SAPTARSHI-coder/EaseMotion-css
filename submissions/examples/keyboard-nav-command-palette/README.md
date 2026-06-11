# ⌘ Command Palette Keyboard Navigation (Accessibility)

Keyboard navigation is a critical design pattern for command palettes. This feature adds accessible keyboard interaction for navigating and executing commands in the command palette.

## 📋 Features

- ⌨️ **Up/Down Arrow Navigation** - Move focus between commands using `ArrowUp` and `ArrowDown` keys.
- ⚡ **Clamped Boundaries** - The active selection index is automatically clamped to the boundaries of the list.
- ⏎ **Enter Key Selection** - Execute the highlighted command immediately by pressing the `Enter` key.
- ♿ **WAI-ARIA compliance** - Dynamically updates `aria-selected` state for active items to support screen readers.
- 🖱️ **Hybrid Interaction** - Mouse hovering and clicking seamlessly sync with keyboard state indices.
- 🔔 **Action execution feedback** - High-fidelity visual toasts appear when commands are executed (via keyboard or click).

## 🚀 Quick Start

### HTML Structure

Integrate the search input and command list using standard class names:

```html
<div class="ease-command-palette" role="dialog" aria-label="Command Palette">
  <div class="ease-command-search" role="search">
    <input type="text" placeholder="Type a command..." class="search-input" />
  </div>
  <div class="ease-command-list" role="listbox">
    <div class="ease-command-item ease-command-active" role="option">
      <div class="command-title">New File</div>
    </div>
    <div class="ease-command-item" role="option">
      <div class="command-title">Save File</div>
    </div>
  </div>
</div>
```

### Script Companion

Link the `script.js` file at the bottom of the HTML:

```html
<script src="script.js" defer></script>
```

## 🛠️ Implementation Details

### JavaScript Logic Flow

1. **State Tracking**: Maintains an `activeIndex` tracking the active command.
2. **Event Listening**: Tracks `keydown` on the search input element.
3. **Clamping**: Prevents indexes from overflowing using boundary clamp formulas:
   - Increments: `Math.min(activeIndex + 1, items.length - 1)`
   - Decrements: `Math.max(0, activeIndex - 1)`
4. **CSS State Toggle**: Dynamically loops through command items to toggle `.ease-command-active` class and update screen reader attributes.
5. **Execution**: Emulates `activeItem.click()` when the user hits `Enter`.
