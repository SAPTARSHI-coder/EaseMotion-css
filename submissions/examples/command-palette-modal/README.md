# Command Palette Search Modal Component

A keyboard-inspired command palette modal similar to VS Code, Linear, and Notion for quick navigation and command execution. Includes a search input with icon, grouped command list with keyboard shortcut badges, a backdrop overlay, and smooth entrance animations.

## Classes

| Class | Description |
|---|---|
| `ease-command-overlay` | Fixed backdrop overlay with blur |
| `ease-command-palette` | Modal container with scale-in animation |
| `ease-command-search` | Search bar with icon and ESC badge |
| `ease-command-input` | Text input for filtering commands |
| `ease-command-esc` | ESC keyboard hint badge |
| `ease-command-list` | Scrollable command list |
| `ease-command-group` | Command section group |
| `ease-command-group-title` | Group section header |
| `ease-command-divider` | Visual divider between groups |
| `ease-command-item` | Individual command with staggered reveal |
| `ease-command-item-icon` | Command icon slot |
| `ease-command-item-label` | Command label text |
| `ease-command-item-spacer` | Flexible spacer between label and shortcut |
| `ease-command-kbd` | Keyboard shortcut badge |

## Usage

```html
<div class="ease-command-overlay"></div>

<div class="ease-command-palette">
  <div class="ease-command-search">
    <span class="ease-command-search-icon">&#8984;</span>
    <input class="ease-command-input" type="text" placeholder="Type a command or search..." />
    <kbd class="ease-command-esc">ESC</kbd>
  </div>

  <div class="ease-command-list">
    <div class="ease-command-group">
      <span class="ease-command-group-title">Navigation</span>

      <div class="ease-command-item">
        <span class="ease-command-item-icon">&#9874;</span>
        <span class="ease-command-item-label">Create Project</span>
        <span class="ease-command-item-spacer"></span>
        <kbd class="ease-command-kbd">&#8984;P</kbd>
      </div>
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS command palette with backdrop blur overlay, scale-in entrance animation, and staggered item reveals. Clean, keyboard-friendly design using design tokens for colors and spacing. Respects `prefers-reduced-motion`.
