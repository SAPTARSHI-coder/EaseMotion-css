# ease-command-bar

## What does this do?
A fully keyboard-navigable command bar modal palette featuring:
- Backdrop screen overlay that fades in with blur blur effects (`ease-command-backdrop`)
- Central input panel dialog that scales into view (`ease-command-panel`)
- Search results items that stagger/slide into view as the user filters them (`ease-result-stagger`)
- Full keyboard shortcuts mapping:
  - `Ctrl + K` or `⌘ + K` to open the palette
  - `Escape` to close the palette
  - `ArrowUp` and `ArrowDown` to navigate results list items
  - `Enter` to select and trigger commands

## How is it used?
Configure the overlay markup using the standard command classes, triggering it with either the keyboard shortcuts listener or manual trigger handlers:

```html
<div id="cmd-overlay" class="cmd-overlay hidden">
  <!-- Backdrop scrim -->
  <div class="ease-command-backdrop"></div>

  <!-- Command Input Panel -->
  <div class="ease-command-panel">
    <div class="cmd-input-wrapper">
      <input type="text" placeholder="Type a command...">
    </div>
    
    <!-- Staggered results list -->
    <div class="cmd-results">
      <div class="result-item active" style="animation-delay: 0s">
        <!-- Result contents -->
      </div>
      <div class="result-item" style="animation-delay: 0.05s">
        <!-- Result contents -->
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a premium global command control interface (like Cmd+K palettes in Slack, Notion, or Spotlight Search). The CSS animations run asynchronously on the GPU thread, providing extremely smooth, lag-free visual feedbacks.

## Tech Stack
- HTML
- CSS (Vanilla, hardware-accelerated transforms & blurs)
- Minimal JS (to manage keyboard listeners, active items mapping, and string matching filters)

## Preview
Open `demo.html` directly in your browser. Press **Ctrl + K** or **Cmd + K** to open the palette, type to filter commands, and use the arrow keys and **Enter** to navigate and run them.
