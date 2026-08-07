# Animated Command Palette UI Component

A modern command palette interface inspired by VS Code and GitHub, with a search input, keyboard shortcut badges, and smooth hover/entrance animations. Pure HTML and CSS — no JavaScript required for the visuals.

## Features

- 🔍 Search input row with an icon that highlights on focus
- ⌨️ Keyboard shortcut badges (`⌘K`, `ESC`, arrow keys, etc.) styled like real `<kbd>` keys
- ✨ Smooth entrance animation when the palette appears
- 🎯 Hover and "active" states on result items — icon scales up, shortcut badges fade in, row shifts slightly
- 🗂️ Grouped results with section labels (e.g. "Suggestions", "Recent")
- 📱 Responsive — hides secondary description text on small screens to stay compact
- ♿ Respects `prefers-reduced-motion` for accessibility
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Include `style.css` and structure the palette as a search row plus a results list:

```html
<div class="palette">
  <div class="palette-search">
    <span class="palette-search-icon"><!-- svg icon --></span>
    <input class="palette-input" type="text" placeholder="Type a command or search..." />
    <span class="palette-kbd">ESC</span>
  </div>

  <ul class="palette-results">
    <li class="palette-group-label">Suggestions</li>

    <li class="palette-item">
      <div class="palette-item-icon">📄</div>
      <div class="palette-item-text">
        <p class="palette-item-title">Open File...</p>
        <p class="palette-item-desc">Quickly open a file by name</p>
      </div>
      <div class="palette-item-shortcut">
        <span class="palette-kbd">⌘</span>
        <span class="palette-kbd">P</span>
      </div>
    </li>
  </ul>

  <div class="palette-footer">
    <span><span class="palette-kbd">↑</span><span class="palette-kbd">↓</span> Navigate</span>
    <span><span class="palette-kbd">↵</span> Select</span>
    <span><span class="palette-kbd">ESC</span> Close</span>
  </div>
</div>