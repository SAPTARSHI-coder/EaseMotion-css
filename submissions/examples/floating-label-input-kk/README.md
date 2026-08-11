# Floating Label Input

## What it does

This submission creates a CSS-only floating label input pattern where the label lifts upward when the field is focused or contains text. It provides a cleaner form layout while keeping the label visible and readable.

## How to use it

Wrap the input and label text in a single container:

```html
<label class="floating-input">
  <input type="text" placeholder=" " required />
  <span>Full Name</span>
</label>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, animation-first, and composable. The interaction is easy to understand, practical for real forms, and reusable across login pages, contact forms, settings panels, and dashboard inputs.

## Included features

- Floating label transition on focus
- Persistent lifted label when the field contains text
- Focus highlight styling
- Responsive form layout
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained demo that opens directly in a browser
- `style.css` - raw CSS for the floating label pattern
- `README.md` - usage and contribution context
