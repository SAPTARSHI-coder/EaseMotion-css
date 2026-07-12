# Floating Label Input

Material-design inspired floating label form inputs with focus, filled, error, and success states — pure CSS.

## Features
- Label floats above on focus/input via :focus and :placeholder-shown
- Three variants: default, error, success
- Filled state persistence (ease-floating-input-filled)
- Custom accent color via `--ease-floating-accent` CSS property
- Smooth label transition animation

## Expected Classes
- `.ease-floating-input` — input wrapper
- `.ease-floating-label` — label that floats on focus
- `.ease-floating-input-filled` — persistent float when value present
- `.ease-floating-input-error` / `.ease-floating-input-success` — validation states
- `.ease-floating-msg` — validation message

## Usage
```html
<div class="ease-floating-input">
  <input type="text" id="field" placeholder=" ">
  <label class="ease-floating-label" for="field">Label</label>
</div>
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript
