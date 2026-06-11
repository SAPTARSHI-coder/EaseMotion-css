# EaseMotion — `ease-toggle`

A CSS-only toggle switch component with color variants. Hidden checkbox drives the toggle via `:checked` — no JavaScript required.

---

## Features

- **CSS-only** — no JavaScript required
- **Four color variants** — default (blue), success (green), danger (red), warning (amber)
- **Smooth animation** — knob slides with `0.3s ease` transition
- **Accessible** — uses native `<input type="checkbox">` under the hood

---

## Usage

```html
<input type="checkbox" id="my-toggle" class="ease-toggle">
<label for="my-toggle"></label>
```

### Variants

```html
<input type="checkbox" id="toggle-1" class="ease-toggle success">
<label for="toggle-1"></label>

<input type="checkbox" id="toggle-2" class="ease-toggle danger">
<label for="toggle-2"></label>

<input type="checkbox" id="toggle-3" class="ease-toggle warning">
<label for="toggle-3"></label>
```

---

## Files

1. **`style.css`** — toggle component styles and variants
2. **`demo.html`** — interactive demo showcasing all variants
3. **`README.md`** — documentation and usage examples
