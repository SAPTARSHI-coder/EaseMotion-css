# Animated Address Autocomplete Dropdown

A pure-CSS animated suggestion dropdown for address/location inputs. Styles the suggestion list and all interaction states — scale + fade entrance, sliding keyboard highlight, shimmer loading skeleton, empty-state shake, and focus glow — independent of whatever geocoding API supplies the actual suggestions.

---

## Preview

| State   | Behaviour                                                 |
| ------- | --------------------------------------------------------- |
| Focus   | Input border glows with a purple ring                     |
| Open    | Dropdown scales + fades in below the input                |
| Hover   | Row background transitions smoothly                       |
| Active  | Purple bg + sliding left accent bar on keyboard highlight |
| Loading | Shimmer skeleton rows while fetching                      |
| Empty   | Dropdown shakes briefly to signal no matches              |
| Close   | Scale + fade exit animation                               |

---

## Files

```
submissions/examples/address-autocomplete-collection/
├── demo.html    ← self-contained live demo (mock data, no API key needed)
├── style.css    ← all animation classes
└── README.md
```

---

## Classes

| Class                      | Description                                                             |
| -------------------------- | ----------------------------------------------------------------------- |
| `ease-address-wrapper`     | Relative-positioned container for input + dropdown                      |
| `ease-address-input`       | Input field; border-glow on focus via `box-shadow`                      |
| `ease-address-dropdown`    | Suggestion list; scale + fade entrance via `@keyframes ease-addr-enter` |
| `ease-address-item`        | Suggestion row; hover background transition                             |
| `ease-address-item-active` | Keyboard-highlighted row; purple bg + sliding left accent bar           |
| `ease-address-empty-shake` | Add to dropdown when no results; plays `@keyframes ease-addr-shake`     |

---

## Usage

```html
<div class="ease-address-wrapper">
  <input
    class="ease-address-input"
    type="text"
    placeholder="Start typing an address…"
    role="combobox"
    aria-autocomplete="list"
    aria-expanded="false"
    aria-controls="addressDropdown"
  />

  <ul class="ease-address-dropdown" id="addressDropdown" role="listbox" hidden>
    <li class="ease-address-item ease-address-item-active" role="option">
      <span class="ease-address-item-icon">📍</span>
      <span class="ease-address-item-body">
        <span class="ease-address-item-main">221B Baker Street</span>
        <span class="ease-address-item-sub">London, NW1 6XE, UK</span>
      </span>
    </li>
    <li class="ease-address-item" role="option">
      <span class="ease-address-item-icon">📍</span>
      <span class="ease-address-item-body">
        <span class="ease-address-item-main">221 Baker Avenue</span>
        <span class="ease-address-item-sub">Manchester, M14 5TH, UK</span>
      </span>
    </li>
  </ul>
</div>
```

### Close with exit animation

```js
function hideDropdown() {
  dropdown.classList.add("is-closing");
  setTimeout(() => {
    dropdown.setAttribute("hidden", "");
    dropdown.classList.remove("is-closing");
  }, 200); // matches --ease-addr-duration
}
```

### Empty-state shake

```js
dropdown.classList.remove("ease-address-empty-shake");
void dropdown.offsetWidth; // force reflow to restart animation
dropdown.classList.add("ease-address-empty-shake");
```

---

## Animation Details

### Dropdown entrance — `ease-addr-enter`

```css
@keyframes ease-addr-enter {
  from {
    opacity: 0;
    transform: scaleY(0.92) translateY(-6px);
  }
  to {
    opacity: 1;
    transform: scaleY(1) translateY(0);
  }
}
```

### Dropdown exit — `ease-addr-leave`

```css
@keyframes ease-addr-leave {
  from {
    opacity: 1;
    transform: scaleY(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scaleY(0.92) translateY(-6px);
  }
}
```

### Active accent bar — `ease-addr-bar-in`

```css
.ease-address-item-active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 15%;
  height: 70%;
  width: 3px;
  background: var(--ease-addr-item-active-bar);
  animation: ease-addr-bar-in 160ms ease forwards;
}
```

### Empty shake — `ease-addr-shake`

```css
@keyframes ease-addr-shake {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-6px);
  }
  40% {
    transform: translateX(6px);
  }
  60% {
    transform: translateX(-4px);
  }
  80% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0);
  }
}
```

### Shimmer skeleton

```css
@keyframes ease-addr-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

---

## Theming

All colours are CSS custom properties on `:root`:

```css
:root {
  --ease-addr-border-focus: #6366f1;
  --ease-addr-shadow-focus: 0 0 0 3px rgba(99, 102, 241, 0.15);
  --ease-addr-item-active: #ede9fe;
  --ease-addr-item-active-bar: #7c3aed;
  --ease-addr-match-color: #6366f1;
}
```

---

## Accessibility

- `role="combobox"` on input, `aria-autocomplete="list"`, `aria-expanded` toggled
- `role="listbox"` on dropdown, `role="option"` on each item
- `aria-selected` updated on keyboard navigation
- `aria-activedescendant` links input to the active item
- `mousedown` + `e.preventDefault()` keeps input focused on item click
- `Escape` closes the dropdown
- `prefers-reduced-motion` disables all transitions and animations

---

## Browser Support

Chrome 90+, Firefox 90+, Safari 15+. Uses standard CSS `@keyframes`, `transform`, `opacity`, and CSS custom properties.

---

## Contributor

**@thakurakanksha288** — GSSoC 2026 participant  
Issue: [#17604](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17604)
