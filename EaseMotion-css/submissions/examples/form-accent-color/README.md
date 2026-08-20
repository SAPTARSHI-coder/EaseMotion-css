# Form Accent Colors

## What does it do?
A pure-CSS demo showing how to customize the appearance of native HTML form controls using `accent-color`, `caret-color`, `color-scheme`, and `::file-selector-button`.

## Features
- **Accent Color** — apply to checkboxes, radio buttons, range sliders, and progress bars
- **Caret Color** — customize the text input blinking cursor color
- **Color Scheme** — switch between `light` and `dark` native form control appearance
- **File Selector Button** — style the file upload button with `::file-selector-button`

## Usage
```html
<input type="checkbox" class="accent-purple">
<input type="text" class="caret-teal" placeholder="Teal cursor">
<div class="scheme-dark">...</div>
<input type="file" class="custom-file">
```

```css
.accent-purple { accent-color: #8b5cf6; }
.caret-teal    { caret-color: #14b8a6; }
.scheme-dark   { color-scheme: dark; }
.custom-file::file-selector-button { background: #6366f1; }
```

## CSS Variables
None — all styles use built-in CSS properties directly.

## Classes
- `.accent-purple`, `.accent-teal`, `.accent-pink`, `.accent-orange` — accent-color variants
- `.caret-purple`, `.caret-teal`, `.caret-pink` — caret-color variants
- `.scheme-light`, `.scheme-dark` — color-scheme containers
- `.custom-file` — styled file input

## Browser Support
- `accent-color` — Chrome 93+, Firefox 92+, Safari 15.4+
- `caret-color` — Chrome 57+, Firefox 53+, Safari 11.1+
- `color-scheme` — Chrome 81+, Firefox 96+, Safari 13+
- `::file-selector-button` — Chrome 89+, Firefox 82+, Safari 14.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
