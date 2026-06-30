# Password Strength Meter

A CSS-first password strength meter with animated strength bars, requirement indicators, and validation states.

## Features
- Four strength levels: weak, fair, good, strong
- Animated fill bars with color transitions
- Password requirement checklist
- Uses expected class names: `.ease-password-strength`, `.ease-password-bar`, `.ease-password-bar-track`, `.ease-password-header`, `.ease-password-label`, `.ease-password-score`, `.ease-password-requirements`, `.ease-password-req`

## Usage
```html
<div class="ease-password-strength">
  <div class="ease-password-header">
    <span class="ease-password-label">Password Strength</span>
    <span class="ease-password-score strong">Strong</span>
  </div>
  <div class="ease-password-bar-track">
    <div class="ease-password-bar strong"></div>
  </div>
  <ul class="ease-password-requirements">
    <li class="ease-password-req met">✓ At least 8 characters</li>
  </ul>
</div>
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript
