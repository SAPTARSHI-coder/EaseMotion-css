# Floating Label Input Utilities

Form inputs with animated floating labels. The label transitions above the field when focused or when content is present, providing clear affordance for text fields.

## Features

- **5 color variants**: primary, secondary, success, danger, warning
- **3 size variants**: sm, default, lg
- **Error state**: red border, red label, error helper text
- **Textarea support**: floating label for multi-line inputs
- **Helper text**: descriptive text below each field
- **Disabled state**: grayed out and non-interactive
- **Dark mode and reduced motion** support

## Usage

```html
<div class="floating-field">
  <input type="text" id="name" class="floating-input" placeholder=" ">
  <label for="name" class="floating-label">Full Name</label>
  <span class="floating-helper">Enter your name</span>
</div>
```

The `placeholder=" "` (single space) is intentional — it keeps the `:placeholder-shown` selector working without showing a visible placeholder.

## Files

- `style.css` — floating label utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
