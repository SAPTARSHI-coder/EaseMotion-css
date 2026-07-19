# Animated PIN / OTP Input Collection

## Overview

A production-quality collection of animated PIN and OTP input interactions built with pure CSS micro-animations and minimal JavaScript for focus management.

The component recreates the segmented verification code pattern commonly used for:

- Two-factor authentication (2FA)
- One-time passwords (OTP)
- Verification codes
- Coupon redemption codes
- Secure PIN entry

Each interaction is enhanced with motion to provide clear visual feedback during typing, validation, and completion.

---

## Features

### ✨ Animated States

- **ease-otp-box**
  - Idle, focused, and filled states

- **ease-otp-fill-pop**
  - Scale-pop animation when a digit is entered

- **ease-otp-caret-blink**
  - Animated blinking caret for the active input

- **ease-otp-error-shake**
  - Entire input row shakes and flashes red on invalid state

- **ease-otp-success-glow**
  - Success glow animation when verification completes

---

## UX Features

- Auto-advance to the next input
- Auto-backspace navigation
- Full OTP paste support
- Numeric-only input
- Arrow key navigation
- Mobile-friendly numeric keyboard
- Responsive layout
- Accessible labels
- Keyboard-first experience

---

## Usage

### HTML

```html
<div class="ease-otp-row">
  <input class="ease-otp-box" maxlength="1" inputmode="numeric" />
  <input class="ease-otp-box" maxlength="1" inputmode="numeric" />
  <input class="ease-otp-box" maxlength="1" inputmode="numeric" />
  <input class="ease-otp-box" maxlength="1" inputmode="numeric" />
</div>
```

---

### Success State

```html
<div class="ease-otp-row is-complete">
  ...
</div>
```

---

### Error State

```html
<div class="ease-otp-row is-invalid">
  ...
</div>
```

---

## JavaScript Example

```js
inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    if (input.value && inputs[i + 1]) {
      inputs[i + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (
      e.key === "Backspace" &&
      !input.value &&
      inputs[i - 1]
    ) {
      inputs[i - 1].focus();
    }
  });
});
```

---

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-otp-row` | OTP container |
| `.ease-otp-box` | Single digit cell |
| `.ease-otp-fill-pop` | Pop animation on entry |
| `.ease-otp-caret-blink` | Blinking caret animation |
| `.ease-otp-error-shake` | Error state animation |
| `.ease-otp-success-glow` | Success state animation |
| `.is-invalid` | Invalid verification state |
| `.is-complete` | Successful verification state |

---

## Why It Fits EaseMotion CSS

- Animation-first interaction design
- Pure CSS micro-animations
- Lightweight and dependency-free
- Production-ready OTP pattern
- Highly reusable in forms and authentication flows
- Demonstrates both utility and animation techniques

---

## Demo

Open:

```text
demo.html
```

directly in your browser.

Demo code:

```text
123456
```

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge

---

## Future Enhancements

Possible additions:

- Masked PIN mode
- Alphanumeric OTP support
- Countdown timer integration
- Resend code pattern
- Loading verification state
- Variable OTP length examples