# OTP Code Input Boxes

## What does it do?
Individual single-character input boxes for OTP/verification screens.
Auto-advances to next box on input, supports backspace navigation,
paste, error/success states, and size variants.

## How is it used?
```html
<div class="ease-otp-group">
  <input class="ease-otp-input" maxlength="1" type="text" inputmode="numeric">
  <input class="ease-otp-input" maxlength="1" type="text" inputmode="numeric">
  <input class="ease-otp-input" maxlength="1" type="text" inputmode="numeric">
  <input class="ease-otp-input" maxlength="1" type="text" inputmode="numeric">
  <input class="ease-otp-input" maxlength="1" type="text" inputmode="numeric">
  <input class="ease-otp-input" maxlength="1" type="text" inputmode="numeric">
</div>
```

## States
```html
<div class="ease-otp-group is-error">...</div>
<div class="ease-otp-group is-success">...</div>
```

## Size Variants
```html
<div class="ease-otp-group ease-otp-sm">...</div>
<div class="ease-otp-group ease-otp-lg">...</div>
```

## Classes
- `.ease-otp-group` — flex wrapper
- `.ease-otp-input` — individual character box
- `.ease-otp-sep` — visual separator
- `.is-filled` — filled state (auto-applied by JS)
- `.is-error` — red error state with shake animation
- `.is-success` — green success state
- `.ease-otp-sm` — small size variant
- `.ease-otp-lg` — large size variant

## Features
- Auto-advance to next input on entry
- Backspace returns to previous input
- Paste support — fills all boxes at once
- Pop animation when digit entered
- Shake animation on error
- Respects prefers-reduced-motion

## Preview
Open `demo.html` directly in browser.