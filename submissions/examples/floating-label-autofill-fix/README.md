# Floating Label Autofill Fix

## Description

This example fixes the issue where floating labels overlap autofilled input text. The label automatically moves above the field whenever the browser fills the input.

## Features

- Floating labels
- Browser autofill support
- Responsive design
- Pure HTML & CSS
- Smooth label transition

## Usage

```html
<div class="input-group">
    <input type="email" placeholder=" ">
    <label>Email Address</label>
</div>
```

## Fix Applied

- Added support for `:-webkit-autofill`.
- Floats the label when the browser autofills the input.
- Preserves smooth transitions.
- Keeps autofilled text readable.

## Files

- demo.html
- style.css
- README.md