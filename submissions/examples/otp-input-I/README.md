 
# OTP/PIN Code Entry Component (ease-otp-input)

OTP/PIN code entry with auto-advance, paste support, and smooth animations.

## Files

- demo.html - Interactive demo
- style.css - OTP input styles
- README.md - Documentation

## Features

- 📱 Individual styled boxes per digit
- ✨ Active box: scale up + border glow
- ✅ Filled box: subtle check animation
- ➡️ Auto-advance to next box on input
- 📋 Paste support for full code
- ⚠️ Shake animation on wrong code
- ⌨️ Numeric keyboard on mobile

## Usage

```html
<div class="ease-otp-input" data-length="6">
    <input type="text" maxlength="1" class="otp-box">
    <input type="text" maxlength="1" class="otp-box">
    <input type="text" maxlength="1" class="otp-box">
    <input type="text" maxlength="1" class="otp-box">
    <input type="text" maxlength="1" class="otp-box">
    <input type="text" maxlength="1" class="otp-box">
</div>

<script>
    document.querySelectorAll('.ease-otp-input').forEach(initOTP);
</script>