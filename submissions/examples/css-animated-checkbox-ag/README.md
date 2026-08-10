# CSS Animated Checkbox

A lightweight, accessible, pure **CSS animated checkbox** featuring a smooth checkmark stroke-drawing and scale pop transition. Built using native HTML semantics and CSS animations with zero JavaScript required.

---

## ✨ Features

- 🎨 **Pure HTML & CSS**: Zero JavaScript required.
- ⚡ **Animated Checkmark**: Smooth SVG checkmark stroke-drawing and pop scale effect.
- ♿ **Native Accessibility**: Built around `<input type="checkbox">` with native keyboard controls (Spacebar toggle) and `:focus-visible` ring.
- 🌈 **Color Variants**: Includes `Primary`, `Success`, `Danger`, and `Warning` color options.
- 📏 **Size Variants**: Supports `Small` (`.ease-checkbox-sm`), `Medium` (default), and `Large` (`.ease-checkbox-lg`).
- 🚫 **Disabled State**: Accessible styling for disabled unchecked and checked controls.
- 📱 **Responsive & Dark Mode**: Adapts seamlessly to light and dark color schemes across screen sizes.
- ⚡ **Reduced Motion Support**: Respects `@media (prefers-reduced-motion: reduce)`.

---

## 📂 File Structure

```text
submissions/examples/css-animated-checkbox-ag/
├── demo.html
├── style.css
└── README.md
```

---

## 🚀 Usage

### HTML Structure

```html
<label class="ease-checkbox" for="my-checkbox">
  <input type="checkbox" id="my-checkbox" class="ease-checkbox-input">
  <span class="ease-checkbox-box">
    <svg class="ease-checkbox-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  </span>
  <span class="ease-checkbox-label">Checkbox Label</span>
</label>
```

### Color Variants

```html
<!-- Success Variant -->
<label class="ease-checkbox ease-checkbox-success" for="cb-success">
  <input type="checkbox" id="cb-success" class="ease-checkbox-input">
  <span class="ease-checkbox-box">
    <svg class="ease-checkbox-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  </span>
  <span class="ease-checkbox-label">Success Checkbox</span>
</label>
```

### Size Variants

```html
<!-- Small Size -->
<label class="ease-checkbox ease-checkbox-sm" for="cb-sm"> ... </label>

<!-- Large Size -->
<label class="ease-checkbox ease-checkbox-lg" for="cb-lg"> ... </label>
```

---

## 🎨 Customization

The component integrates with EaseMotion CSS variables:

```css
:root {
  --ease-checkbox-primary: var(--ease-color-primary, #6c63ff);
  --ease-checkbox-success: var(--ease-color-success, #22c55e);
  --ease-checkbox-danger: var(--ease-color-danger, #ef4444);
  --ease-checkbox-warning: var(--ease-color-warning, #f59e0b);
  --ease-checkbox-border: #cbd5e1;
  --ease-checkbox-bg: #ffffff;
  --ease-checkbox-radius: var(--ease-radius-md, 0.375rem);
}
```

---

## ♿ Accessibility & Motion

- **Keyboard Operation**: Works natively via native checkbox element; toggle using <kbd>Space</kbd>.
- **Focus Rings**: Uses `:focus-visible` for keyboard navigation without distracting mouse-click rings.
- **Screen Readers**: Input element retains native `type="checkbox"` role and state for full compatibility.
- **Reduced Motion**: Gracefully falls back to instant state changes when reduced motion is preferred.

---

## 🌐 Browser Support

| Browser | Supported |
| --- | --- |
| Chrome / Edge | ✅ |
| Firefox | ✅ |
| Safari | ✅ |

---

## 📜 License

Provided as part of the **EaseMotion CSS** project (MIT License).
