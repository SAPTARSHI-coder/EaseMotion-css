# Native Accent Color Form Styling (`ease-accent-color-forms`)

A demonstration of the modern CSS `accent-color` property, allowing developers to instantly theme native browser checkboxes, radio buttons, and range sliders without rebuilding them from scratch using complex `div` and `span` overlays.

## 🚀 Features & EaseMotion Showcase

- **Zero-Markup Theming**: Themes the actual native `<input type="checkbox">` elements, preserving all native accessibility and keyboard interactions.
- **Dynamic CSS Variables**: Uses `--ease-accent` allowing the entire form's theme to change via a single variable update.
- **Accessible Focus**: Includes enhanced `:focus-visible` styling tied dynamically to the accent color.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<form style="--ease-accent: #a855f7;">
  <!-- Instantly themed purple! -->
  <input type="checkbox" class="ease-accent" checked />
  <input type="radio" class="ease-accent" checked />
  <input type="range" class="ease-accent" />
</form>
```
