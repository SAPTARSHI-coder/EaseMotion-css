# Global Documentation Search — Ctrl+K Command Palette

## What does it do?
A Ctrl+K command palette for documentation search with real-time
filtering, keyboard navigation, grouped results, and smooth
open/close animations.

## How is it used?
```html
<!-- Trigger button -->
<button class="ease-palette-trigger" id="trigger">
  🔍 Search...
  <kbd class="ease-palette-kbd">Ctrl K</kbd>
</button>

<!-- Backdrop -->
<div class="ease-palette-backdrop" id="backdrop"></div>

<!-- Palette -->
<div class="ease-palette" id="palette">
  <div class="ease-palette-input-wrap">
    <input class="ease-palette-input" type="text" placeholder="Search...">
  </div>
  <div class="ease-palette-results" id="results"></div>
  <div class="ease-palette-footer">
    <span><kbd>↑↓</kbd> Navigate</span>
    <span><kbd>Enter</kbd> Select</span>
    <span><kbd>Esc</kbd> Close</span>
  </div>
</div>
```

## Keyboard Shortcuts
- `Ctrl+K` / `Cmd+K` — open palette
- `↑↓` — navigate results
- `Enter` — select item
- `Esc` — close palette

## Classes
- `.ease-palette-backdrop` — blurred overlay
- `.ease-palette` — modal container
- `.ease-palette-input` — search input
- `.ease-palette-results` — results container
- `.ease-palette-group` — section label
- `.ease-palette-item` — result row
- `.ease-palette-trigger` — trigger button
- `.is-open` — active state

## Features
- Ctrl+K keyboard shortcut
- Real-time search filtering
- Grouped results by category
- Arrow key navigation
- Smooth open/close animations
- Respects prefers-reduced-motion
- Pure HTML + CSS + vanilla JS

## Preview
Open `demo.html` directly in browser.