# Appearance None Utility (`ease-appearance-none`)

A demonstration of the `appearance: none` CSS property, an absolutely critical utility for building custom-branded form controls.

## 🚀 Features & EaseMotion Showcase

- **Strip OS Styling**: Browsers apply heavy, native Operating System styles to elements like `<select>`, `<input type="checkbox">`, and `<input type="radio">`. These look drastically different on Windows, macOS, iOS, and Android. Applying `appearance: none` wipes the slate clean, removing native dropdown arrows, native checkbox ticks, and native borders.
- **The Blank Canvas**: Once the native styling is stripped, you treat the element like a normal `<div>`. You can apply your own borders, border-radii, custom background SVG arrows, and even CSS `clip-path` checkmarks for completely bespoke UI components.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To wipe the default styles off a form element:
```html
<select class="ease-appearance-none custom-select">
  <option>Option</option>
</select>
