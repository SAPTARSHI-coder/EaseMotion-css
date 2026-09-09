# Animated Rich-Text Toolbar Collection

A pure-CSS animated toolbar for rich-text editors and comment boxes. Styles the toolbar chrome and all interactive states — button hover lift, active/toggled highlight with pulse, divider fade-in on mount, and tooltip pop — independent of whatever editor or `execCommand` logic drives it.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Mount | Toolbar fades in with a subtle `translateY` slide |
| Hover | Button lifts with `translateY(-1px)` + soft shadow |
| Active | Purple bg + border + pulse scale animation |
| Tooltip | Label pops up on hover via CSS `::after` + `data-tooltip` |
| Divider | Vertical separator fades + scales in on toolbar mount |

---

## Files

```
submissions/examples/richtext-toolbar-collection/
├── demo.html    ← live contenteditable demo
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-toolbar` | Container row; entrance fade + slide via `@keyframes ease-toolbar-mount` |
| `ease-toolbar-btn` | Format button; hover lift, active scale, focus-visible ring |
| `ease-toolbar-btn-active` | Toggled state; purple bg/border + `@keyframes ease-btn-activate` pulse |
| `ease-toolbar-btn-wide` | Wider variant for dropdowns / colour pickers |
| `ease-toolbar-divider` | Vertical separator; fades in via `@keyframes ease-divider-fade` |
| `ease-toolbar-tooltip-pop` | Tooltip trigger alias — pairs with `data-tooltip` for CSS-only tooltip |

---

## Usage

```html
<div class="ease-toolbar" role="toolbar" aria-label="Text formatting">

  <button class="ease-toolbar-btn ease-toolbar-tooltip-pop"
          data-tooltip="Bold (Ctrl+B)"
          data-cmd="bold"
          aria-pressed="false">
    <b>B</b>
  </button>

  <button class="ease-toolbar-btn ease-toolbar-tooltip-pop"
          data-tooltip="Italic (Ctrl+I)"
          data-cmd="italic"
          aria-pressed="false">
    <i>I</i>
  </button>

  <button class="ease-toolbar-btn ease-toolbar-tooltip-pop"
          data-tooltip="Underline (Ctrl+U)"
          data-cmd="underline"
          aria-pressed="false">
    <u>U</u>
  </button>

  <span class="ease-toolbar-divider" aria-hidden="true"></span>

  <button class="ease-toolbar-btn ease-toolbar-tooltip-pop"
          data-tooltip="Insert link"
          data-cmd="createLink"
          aria-pressed="false">
    🔗
  </button>

</div>
```

### Toggling active state (consuming app's responsibility)

```js
button.addEventListener('mousedown', e => {
  e.preventDefault(); // keep editor focus
  document.execCommand('bold');
  button.classList.toggle(
    'ease-toolbar-btn-active',
    document.queryCommandState('bold')
  );
  button.setAttribute('aria-pressed', button.classList.contains('ease-toolbar-btn-active'));
});
```

The component only renders the state — it does not own editor logic.

---

## Animation Details

### Toolbar mount — `ease-toolbar-mount`
```css
@keyframes ease-toolbar-mount {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Button activate pulse — `ease-btn-activate`
```css
@keyframes ease-btn-activate {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}
```

### Divider fade — `ease-divider-fade`
```css
@keyframes ease-divider-fade {
  from { opacity: 0; transform: scaleY(0.4); }
  to   { opacity: 1; transform: scaleY(1); }
}
```

### Tooltip pop — pure CSS via `::after` + `data-tooltip`
```css
.ease-toolbar-btn[data-tooltip]::after {
  content: attr(data-tooltip);
  /* positioned above the button */
  opacity: 0;
  transform: translateX(-50%) translateY(4px) scale(0.9);
  transition: opacity 160ms ease, transform 160ms ease;
}
.ease-toolbar-btn[data-tooltip]:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}
```

No JavaScript required for tooltips.

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-toolbar-bg:              #ffffff;
  --ease-toolbar-btn-active:      #ede9fe;
  --ease-toolbar-btn-active-text: #5b21b6;
  --ease-toolbar-btn-active-border:#c4b5fd;
  --ease-toolbar-tooltip-bg:      #1e293b;
}
```

---

## Accessibility

- `role="toolbar"` on the container, `aria-label` describing it
- `aria-pressed` on each toggle button, updated in JS
- `focus-visible` ring on keyboard focus
- `mousedown` + `e.preventDefault()` keeps editor focus while clicking toolbar
- `prefers-reduced-motion` disables all transitions and animations

---

## Browser Support

Chrome 90+, Firefox 90+, Safari 15+. Uses standard CSS `@keyframes`, `transform`, `opacity`, and `::after` pseudo-elements.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#17556](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17556)