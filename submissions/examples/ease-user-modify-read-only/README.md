# User Modify Utilities (`ease-user-modify-read-only`)

A demonstration of using the CSS `user-modify` (and `-webkit-user-modify`) property to control the editability of elements entirely via CSS, rather than relying on the HTML `contenteditable` attribute.

## 🚀 Features & EaseMotion Showcase

- **CSS-Driven Editability**: Instead of adding `contenteditable="true"` to your HTML markup, you can apply `.ease-user-modify-read-write` to turn any `div` or `span` into a rich text editor strictly through styling.
- **Selective Locking**: The true power of this property is locking down specific children. If you have a large editable area, you can apply `.ease-user-modify-read-only` to specific child badges or components inside it to prevent the user from accidentally deleting or modifying them!

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To make a div editable:
```html
<div class="ease-user-modify-read-write">
  Type here!
</div>
