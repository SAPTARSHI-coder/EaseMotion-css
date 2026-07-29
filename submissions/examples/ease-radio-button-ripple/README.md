# Component: Ease Radio Button Ripple

**EaseMotion CSS** · `submissions/examples/ease-radio-button-ripple/`

A custom-styled radio button component featuring a smooth inner circle scale animation and an outward ripple effect upon selection.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ease-radio-button-ripple/demo.html
```

---

## Usage

Wrap a native `<input type="radio">` inside a `<label>` and use the `.ease-radio-custom` span to render the visual UI.

```html
<label class="ease-radio-label">
  <!-- Hidden native input for accessibility and state -->
  <input type="radio" name="example" class="ease-radio-input" value="1">
  
  <!-- Custom UI element -->
  <span class="ease-radio-custom"></span>
  
  Label Text
</label>
```

---

## CSS Techniques

### 1. Custom UI with Native Accessibility
The native `<input type="radio">` is visually hidden (`opacity: 0`, `width: 0`, `height: 0`) but remains in the DOM for keyboard navigation and screen readers. We style the adjacent `.ease-radio-custom` span using the `:checked` and `:focus-visible` pseudo-classes on the hidden input.

### 2. Inner Circle Scale Animation
The filled center of the radio button is created using the `::after` pseudo-element on `.ease-radio-custom`. It transitions `transform: scale(0)` to `scale(1)` when the parent input is `:checked`.

```css
.ease-radio-input:checked + .ease-radio-custom::after {
  transform: scale(1);
}
```

### 3. Selection Ripple Effect
When a radio button is selected, the `::before` pseudo-element fires a one-time CSS animation (`ease-radio-ripple`). The animation rapidly scales up a translucent background while fading its opacity to zero.

```css
.ease-radio-input:checked + .ease-radio-custom::before {
  animation: ease-radio-ripple 0.6s cubic-bezier(0.0, 0.0, 0.2, 1);
}

@keyframes ease-radio-ripple {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}
```

---

## File Structure

```
ease-radio-button-ripple/
├── demo.html   — Pre-configured interactive demo
├── style.css   — Component styles and animations
└── README.md   — This documentation
```
