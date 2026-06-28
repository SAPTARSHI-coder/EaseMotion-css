# Caret Color Utility (`ease-caret-color`)

A demonstration of the `caret-color` CSS property, which allows developers to independently style the color of the blinking text-insertion cursor in `input` and `textarea` elements.

## 🚀 Features & EaseMotion Showcase

- **Micro-Interactions**: Brand consistency lives in the details. The blinking cursor is one of the most interacted-with elements on a page. Coloring it to match your primary brand color (or an error state color) creates a highly premium, custom-built feel.
- **Independent from Text**: `caret-color` is completely independent of the `color` property. This means you can have standard dark grey text, but a vibrant blue blinking cursor.
- **The "Ghost Text" Trick**: Because it is independent, you can even set `color: transparent` but keep `caret-color: purple`. This is a fun hack for creating custom visual terminal inputs or hidden password fields where you want a custom cursor but hidden text.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To apply a custom caret color:
```html
<input type="text" class="ease-caret-brand">
