# Command Palette Styling

A modern, accessible command palette component for EaseMotion-css. This component provides a sleek interface for searching commands, navigation, and quick actions within your application.

## Features
- **Modern UI**: Uses project tokens for consistent spacing, colors, and shadows.
- **Glassmorphism Support**: Includes optional glass-like backdrop and surface effects.
- **Keyboard Friendly**: Styled `<kbd>` elements for shortcuts and clear focus states.
- **Grouped Actions**: Clean separation between different command categories.
- **Micro-interactions**: Subtle hover and focus transitions.

## Usage
Add the command palette markup to your HTML. You can trigger it using standard modal patterns or a custom keyboard listener.

```html
<div class="ease-cmd-overlay">
  <div class="ease-cmd-palette">
    <div class="ease-cmd-header">
      <input type="text" placeholder="Search commands...">
    </div>
    <div class="ease-cmd-body">
      <div class="ease-cmd-group">
        <h3 class="ease-cmd-group-title">General</h3>
        <button class="ease-cmd-item">
          <span class="ease-cmd-item-label">Dashboard</span>
          <kbd class="ease-cmd-shortcut">⌘D</kbd>
        </button>
      </div>
    </div>
  </div>
</div>
```

## CSS Classes
- `.ease-cmd-overlay`: Full-screen backdrop.
- `.ease-cmd-palette`: Main container.
- `.ease-cmd-header`: Search input area.
- `.ease-cmd-body`: Scrollable list of commands.
- `.ease-cmd-group`: Category wrapper.
- `.ease-cmd-group-title`: Category heading.
- `.ease-cmd-item`: Individual command row.
- `.ease-cmd-shortcut`: Shortcut badge.
