# ⌨ Keyboard Shortcuts Cheat Sheet Overlay

> An accessible, searchable modal overlay displaying categorised keybindings with 3D `<kbd>` key badges — built with pure HTML, CSS & minimal vanilla JS.

---

## 📖 What does this do?

The **Keyboard Shortcuts Overlay** is a power-user modal cheat sheet component (similar to GitHub, Notion, or Linear's `?` shortcut overlay). It allows users to quickly view, search, and filter all application keyboard shortcuts without leaving their workspace context.

---

## 🎯 How is it used?

### 1. HTML structure

```html
<!-- Trigger button -->
<button id="btn-open-shortcuts" type="button" aria-label="Open keyboard shortcuts">
  Shortcuts (?)
</button>

<!-- Modal Backdrop -->
<div id="shortcuts-backdrop" class="modal-backdrop" aria-hidden="true"></div>

<!-- Modal Container -->
<div id="shortcuts-modal" class="shortcuts-modal" role="dialog" aria-modal="true"
     aria-labelledby="modal-title" aria-describedby="modal-desc" tabindex="-1" hidden>
  
  <!-- Search Input -->
  <input type="search" id="shortcut-search" placeholder="Search shortcuts…" />

  <!-- Category Tabs -->
  <div role="tablist">
    <button class="modal-tab modal-tab--active" data-category="all">All</button>
    <button class="modal-tab" data-category="navigation">Navigation</button>
    <button class="modal-tab" data-category="editing">Editing</button>
  </div>

  <!-- Shortcut Rows -->
  <div class="shortcuts-body">
    <div class="shortcut-row">
      <span class="shortcut-desc">Open command palette</span>
      <span class="shortcut-keys">
        <kbd>Ctrl</kbd><span class="key-sep">+</span><kbd>K</kbd>
      </span>
    </div>
  </div>

</div>
```

---

## ✨ Key Highlights

| Feature | Implementation |
|---------|----------------|
| **Global `?` key listener** | Pressing `?` (Shift + `/`) toggles the shortcuts modal from anywhere |
| **Live fuzzy search** | Typing in the search input filters matching shortcuts across all categories in real-time |
| **Category tabs** | Filter keybindings by category: All, Navigation, Editing, Formatting, View, AI Actions |
| **Realistic 3D keycaps** | `<kbd>` elements styled with multi-layer CSS box-shadows, inset gradients, and subtle hover lifts |
| **Focus trap** | `Tab` and `Shift+Tab` trapped inside the modal container while active |
| **Screen reader accessible** | Screen reader readable markup via visually hidden text inside `<span class="sr-only">` |
| **Dark & Light mode** | Complete CSS token architecture with seamless theme switching |
| **Reduced motion safe** | Respects `prefers-reduced-motion: reduce` by turning off all transitions |
| **Responsive** | Adapts gracefully to mobile screens with auto-scroll tab strips |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `?` (Shift + `/`) | Toggle shortcuts overlay |
| `Escape` | Close shortcuts modal |
| `Tab` / `Shift+Tab` | Cycle focusable elements inside modal |

---

## 🎨 CSS Custom Properties

```css
:root {
  --kbd-bg:       linear-gradient(180deg, #2a2e42 0%, #1c1f2e 100%);
  --kbd-border:   #3b4059;
  --kbd-shadow:   0 2px 0 #12141f, 0 3px 4px rgba(0 0 0 / 0.4);
  --kbd-text:     #e2e8f0;
  --modal-w:      680px;
}
```

---

## ♿ Accessibility Notes

- Uses standard `role="dialog"` and `aria-modal="true"`.
- Focus is automatically placed in the search field upon opening.
- Focus is trapped within the dialog using Tab navigation wrapping.
- Pressing `Escape` or clicking the backdrop closes the overlay and returns focus to the trigger button.
- Keyboard shortcuts announce cleanly on screen readers (`aria-label="Control or Command K"`).
- Full `prefers-reduced-motion` compliance.

---

## 🚀 Quick Start

1. Copy `demo.html`, `style.css`, and `script.js` into the same directory.
2. Open `demo.html` in your browser.
3. Press **?** anywhere on the page to launch the overlay.

```
keyboard-shortcuts-overlay-nk/
├── demo.html    # App demo with keyboard shortcuts modal
├── style.css    # 3D kbd styles, modal animations, dark/light themes
├── script.js    # Global '?' listener, live search, focus trap, tab filters
└── README.md    # Documentation
```
