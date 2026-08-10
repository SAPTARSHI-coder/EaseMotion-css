# Floating Labels

## Issue

#57926

## Description

A reusable floating-label form component where the label smoothly moves above the input when the field is focused or contains text.

## Features

- Smooth floating label animation
- Works with text, email, and password inputs
- Pure HTML and CSS
- No JavaScript required
- Responsive design
- Supports reduced-motion preferences

## Files

- `demo.html` - Demonstration page
- `style.css` - Floating-label styles and animations

## Usage

```html
<div class="form-group">
  <input type="text" id="name" placeholder=" " required>
  <label for="name">Your Name</label>
</div>