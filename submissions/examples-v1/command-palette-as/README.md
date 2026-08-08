# Command Palette

### What does this do?

It shows a command palette with a search field and a list of grouped commands, each with an icon and a keyboard shortcut hint. One command is highlighted as the active row, and hovering a row highlights it too.

### How is it used?

```html
<div class="cmdk" role="dialog" aria-label="Command palette">
  <div class="cmdk-search">
    <svg>...</svg>
    <input class="cmdk-input" type="text" placeholder="Type a command" />
  </div>
  <ul class="cmdk-list">
    <li class="cmdk-group">Actions</li>
    <li class="cmdk-item is-active"><svg>...</svg><span>New file</span><kbd>N</kbd></li>
  </ul>
</div>
```

Use `cmdk-group` rows to label sections and `is-active` on the currently selected command. Each item holds an icon, a label, and a `kbd` shortcut.

### Why is it useful?

Command palettes are the fast way to navigate modern apps. This presents a search led command list with grouped sections, icons, and shortcut keys, using only CSS. The active and hover rows share one highlight style and the transition is removed under reduced motion.
