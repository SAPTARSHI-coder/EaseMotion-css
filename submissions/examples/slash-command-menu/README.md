# Animated Slash-Command Menu

A Notion-style "/" trigger menu for editors and comment boxes. Type `/` in any editable field and a floating command palette appears — animated entrance, keyboard-navigable highlight, confirm flash on selection, and smooth exit. All visual states are pure CSS; JavaScript only handles triggering and keyboard wiring.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Open | Scale + fade entrance anchored below the caret |
| Navigate | Active row highlights with a sliding left accent bar |
| Select | Brief scale-flash on the row, then menu exits |
| Close | Scale + fade exit (Escape, selection, or `/` deleted) |

---

## Files

```
submissions/examples/slash-command-menu/
├── demo.html    ← self-contained live demo
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-slash-menu` | Floating container; scale + fade entrance via `@keyframes ease-slash-enter` |
| `ease-slash-item` | Individual command row; hover background transition |
| `ease-slash-item-active` | Keyboard-highlighted row; purple bg + sliding left accent bar |
| `ease-slash-item-select` | Confirm-flash `@keyframes` on Enter/click before menu closes |
| `ease-slash-menu-exit` | Scale + fade exit; add this class to trigger close animation |

---

## Usage

```html
<div class="ease-slash-menu" role="listbox" aria-label="Slash commands">
  <div class="ease-slash-item ease-slash-item-active" role="option" data-command="text">
    <span class="ease-slash-item-icon">📝</span>
    <div class="ease-slash-item-info">
      <span class="ease-slash-item-name">Text</span>
      <span class="ease-slash-item-desc">Plain paragraph</span>
    </div>
  </div>
  <div class="ease-slash-item" role="option" data-command="heading1">
    <span class="ease-slash-item-icon">H1</span>
    <div class="ease-slash-item-info">
      <span class="ease-slash-item-name">Heading 1</span>
      <span class="ease-slash-item-desc">Large section header</span>
    </div>
  </div>
  <!-- more items… -->
</div>
```

### Minimal JS wiring

```js
// Show on "/"
editor.addEventListener('input', () => {
  if (lastChar === '/') showMenu();
});

// Navigate with arrow keys
editor.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') moveHighlight(1);
  if (e.key === 'ArrowUp')   moveHighlight(-1);
  if (e.key === 'Enter')     selectActiveItem();
  if (e.key === 'Escape')    closeMenu();
});

// Close with exit animation
function closeMenu() {
  menu.classList.add('ease-slash-menu-exit');
  menu.addEventListener('animationend', () => {
    menu.setAttribute('hidden', '');
    menu.classList.remove('ease-slash-menu-exit');
  }, { once: true });
}
```

---

## Animation Details

### Entrance — `ease-slash-enter`
```css
@keyframes ease-slash-enter {
  from { opacity: 0; transform: scale(0.92) translateY(-6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
}
```

### Exit — `ease-slash-leave`
```css
@keyframes ease-slash-leave {
  from { opacity: 1; transform: scale(1)    translateY(0); }
  to   { opacity: 0; transform: scale(0.92) translateY(-6px); }
}
```

### Active accent bar — slides in on highlight
```css
.ease-slash-item-active::before {
  content: "";
  position: absolute;
  left: 0; top: 20%; height: 60%; width: 3px;
  background: var(--ease-slash-active-bar);
  animation: ease-slash-bar-in 180ms ease forwards;
}
```

### Selection flash — `ease-slash-item-select`
```css
@keyframes ease-slash-flash {
  0%   { background: var(--ease-slash-active-bg); }
  40%  { background: var(--ease-slash-flash-bg); transform: scale(0.98); }
  100% { background: var(--ease-slash-active-bg); transform: scale(1); }
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-slash-bg:          #ffffff;
  --ease-slash-active-bg:   #ede9fe;
  --ease-slash-active-bar:  #7c3aed;
  --ease-slash-flash-bg:    #ddd6fe;
}
```

Override per-instance to match any brand palette.

---

## Accessibility

- `role="listbox"` on the menu, `role="option"` on each item
- `aria-label` on the menu container
- `aria-expanded` should be toggled on the trigger element
- Keyboard: `↑` `↓` navigate, `Enter` selects, `Escape` closes
- `prefers-reduced-motion` disables all transitions and animations

---

## Browser Support

Chrome 90+, Firefox 90+, Safari 15+. Uses standard CSS `@keyframes`, `transform`, and `opacity` — no experimental features.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#17550](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17550)