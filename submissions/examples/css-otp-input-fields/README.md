# CSS OTP Input Fields

A responsive six-digit OTP input component with animated focus states, automatic focus advancement, keyboard navigation, and complete OTP paste support.

## Features

- Six separate OTP input fields
- Automatic focus advancement
- Backspace navigation
- Left and right arrow navigation
- Paste support for complete OTP codes
- Numeric input optimization for mobile devices
- Accessible labels and form structure
- Responsive layout
- Light and dark color-scheme support
- CSS custom properties for easy customization
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` — Standalone demo with OTP behavior
- `style.css` — Component styling and responsive design
- `README.md` — Documentation

## Usage

Add the OTP input structure to your page:

```html
<div class="otp-inputs" role="group" aria-label="One-time password">
  <input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 1 of 6">
  <input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2 of 6">
  <input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3 of 6">
  <input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4 of 6">
  <input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 5 of 6">
  <input class="otp-input" type="text" inputmode="numeric" maxlength="1" aria-label="Digit 6 of 6">
</div>