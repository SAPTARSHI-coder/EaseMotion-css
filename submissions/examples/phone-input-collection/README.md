# Animated Phone Number Input with Country Flag

A pure-CSS animated international phone input with a flag-prefixed country-code dropdown. Styles the input chrome and all interaction states — focus glow, dropdown entrance/exit, sliding keyboard highlight, and format flash — independent of whatever phone validation or masking library the consuming app uses.

---

## Preview

| State | Behaviour |
|-------|-----------|
| Focus | Wrapper border glows with a purple ring |
| Flag click | Country dropdown scales + fades in |
| Hover | Country row background transitions |
| Active | Purple bg + sliding left accent bar on keyboard highlight |
| Select | Chevron rotates; flag + dial code update instantly |
| Format | Brief blue background flash on input when digits are typed |
| Close | Dropdown scales + fades out |

---

## Files

```
submissions/examples/phone-input-collection/
├── demo.html    ← self-contained live demo (20 countries, no API key)
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class | Description |
|-------|-------------|
| `ease-phone-wrapper` | Flex container; focus-within border-glow |
| `ease-phone-flag-btn` | Flag + dial-code trigger; chevron rotates when open |
| `ease-phone-input` | Phone number field; sits flush inside the wrapper |
| `ease-phone-country-dropdown` | Country list; scale + fade entrance via `@keyframes ease-phone-dropdown-enter` |
| `ease-phone-country-item` | Country row; hover bg transition |
| `ease-phone-format-flash` | Add/remove on input to trigger `@keyframes ease-phone-flash` |

---

## Usage

```html
<div class="ease-phone-wrapper">
  <button
    class="ease-phone-flag-btn"
    aria-haspopup="listbox"
    aria-expanded="false"
    aria-controls="countryDropdown"
  >
    <span class="ease-phone-flag">🇮🇳</span>
    <span class="ease-phone-code">+91</span>
    <span class="ease-phone-chevron" aria-hidden="true">▾</span>
  </button>

  <input
    class="ease-phone-input"
    type="tel"
    placeholder="98765 43210"
    aria-label="Phone number"
  />

  <ul
    class="ease-phone-country-dropdown"
    id="countryDropdown"
    role="listbox"
    hidden
  >
    <li class="ease-phone-country-item" role="option">
      <span class="ease-phone-country-flag">🇮🇳</span>
      <span class="ease-phone-country-name">India</span>
      <span class="ease-phone-country-code">+91</span>
    </li>
    <!-- more items… -->
  </ul>
</div>
```

### Open / close with exit animation

```js
function closeDropdown() {
  dropdown.classList.add('is-closing');
  flagBtn.setAttribute('aria-expanded', 'false');
  setTimeout(() => {
    dropdown.setAttribute('hidden', '');
    dropdown.classList.remove('is-closing');
  }, 200); // matches --ease-phone-duration
}
```

### Format flash on input

```js
input.addEventListener('input', () => {
  input.classList.remove('ease-phone-format-flash');
  void input.offsetWidth; // force reflow to restart animation
  input.classList.add('ease-phone-format-flash');
});
```

### Chevron rotation

The chevron rotates automatically via CSS when `aria-expanded="true"` is set on the button:

```css
.ease-phone-flag-btn[aria-expanded="true"] .ease-phone-chevron {
  transform: rotate(180deg);
}
```

---

## Animation Details

### Dropdown entrance — `ease-phone-dropdown-enter`
```css
@keyframes ease-phone-dropdown-enter {
  from { opacity: 0; transform: scale(0.93) translateY(-6px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
}
```

### Dropdown exit — `ease-phone-dropdown-leave`
```css
@keyframes ease-phone-dropdown-leave {
  from { opacity: 1; transform: scale(1)    translateY(0); }
  to   { opacity: 0; transform: scale(0.93) translateY(-6px); }
}
```

### Format flash — `ease-phone-flash`
```css
@keyframes ease-phone-flash {
  0%   { background: transparent; }
  40%  { background: var(--ease-phone-flash-bg); }
  100% { background: transparent; }
}
```

### Active accent bar — `ease-phone-bar-in`
```css
.ease-phone-country-item.is-active::before {
  content: "";
  position: absolute;
  left: 0; top: 15%; height: 70%; width: 3px;
  background: var(--ease-phone-item-active-bar);
  animation: ease-phone-bar-in 160ms ease forwards;
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-phone-border-focus:    #6366f1;
  --ease-phone-shadow-focus:    0 0 0 3px rgba(99,102,241,0.15);
  --ease-phone-item-active:     #ede9fe;
  --ease-phone-item-active-bar: #7c3aed;
  --ease-phone-flash-bg:        rgba(99,102,241,0.08);
}
```

---

## Accessibility

- `aria-haspopup="listbox"` + `aria-expanded` on the flag button
- `aria-controls` links button to the dropdown panel
- `role="listbox"` on dropdown, `role="option"` + `aria-selected` on each item
- Keyboard: `↑` `↓` navigate · `Enter` selects · `Escape` closes
- `focus-within` on wrapper keeps the glow while either child has focus
- `prefers-reduced-motion` disables all transitions and animations

---

## Browser Support

Chrome 90+, Firefox 90+, Safari 15+. Uses standard CSS `@keyframes`, `transform`, `opacity`, and CSS custom properties.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#17619](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17619)