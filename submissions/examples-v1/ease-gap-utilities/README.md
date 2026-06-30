# Gap Utilities (`ease-gap-utilities`)

A demonstration of CSS `gap` utilities for cleanly spacing child elements inside Flexbox and CSS Grid layouts.

## 🚀 Features & EaseMotion Showcase

- **Clean Spacing**: Historically, developers had to use `.item { margin-right: 16px; }` and `.item:last-child { margin-right: 0; }` to space items out. The `gap` property applies spacing _between_ items automatically without needing messy pseudo-selectors.
- **Universal Application**: The same `.ease-gap-md` utility works identically on both `display: flex` and `display: grid` containers.
- **Axis Control**: You can control horizontal spacing (`column-gap`) independently from vertical spacing (`row-gap`) using specific utilities.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To add a 1rem gap between flex items:

```html
<div style="display: flex;" class="ease-gap-md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```
