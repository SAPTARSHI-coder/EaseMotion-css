# EaseMotion CSS — Command Palette Search Modal (`ease-command-palette-modal-ik`)

Keyboard-first command palette search overlay (`ease-cmd-modal`) featuring quick search input, shortcut badges (`<kbd>⌘K</kbd>`), category grouping, and smooth scale entrance dynamics (`ease-cmd-zoom`).

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a command palette overlay component (`ease-cmd-modal`) that presents quick search actions, keyboard navigation hints (`<kbd>⌘K</kbd>`), and active item highlight states with spring zoom entrance animations (`ease-cmd-zoom`).

---

## 2. How is it used?

Include the command palette overlay container in your page layout:

```html
<div class="ease-cmd-overlay">
  <div class="ease-cmd-modal ease-cmd-zoom">
    <div class="cmd-input-wrapper">
      <input type="text" class="cmd-input" placeholder="Search...">
      <kbd>ESC</kbd>
    </div>
    <div class="cmd-results">
      <a href="#" class="cmd-item active">Navigation Command</a>
    </div>
  </div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports productivity-driven UI components. The Command Palette Modal delivers smooth 60fps spring scale entrances (`cubic-bezier(0.34, 1.56, 0.64, 1)`) while providing accessible keyboard shortcut focus rings.
