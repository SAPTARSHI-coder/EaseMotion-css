# Command Palette

## What does this do?
A modern, keyboard-friendly command palette (similar to VS Code, Notion, and Linear) that lets users search and trigger actions through a searchable popup with smooth fade/scale animations.

## How is it used?
Open `demo.html` in a browser, then either click the trigger button or press `Ctrl + K` (`Cmd + K` on Mac) to open the palette.

```html
<div class="cp-overlay" id="cpOverlay">
  <div class="command-palette" role="dialog" aria-label="Command Palette">
    <input type="text" class="cp-input" placeholder="Search commands..." />
    <ul class="command-list">
      <li class="cp-item active">
        <span>📂 Open Project</span>
        <kbd>Ctrl + O</kbd>
      </li>
      <li class="cp-item">
        <span>⚙ Settings</span>
        <kbd>Ctrl + ,</kbd>
      </li>
    </ul>
  </div>
</div>
```

Keyboard support:
- `Ctrl/Cmd + K` — open/close the palette
- `↑` / `↓` — navigate items
- `Enter` — select the highlighted item
- `Esc` — close the palette
- Typing in the input live-filters the command list

## Why is this useful?
Command palettes are a widely adopted UX pattern in modern dashboards, admin panels, and developer tools for fast, keyboard-driven navigation. This component fits EaseMotion CSS's animation-first philosophy with a smooth entrance/exit transition, and it's fully self-contained (no external frameworks), responsive, and supports both light and dark themes via `prefers-color-scheme`.

Resolves #49538