# OTP Code Input

### What does this do?

It shows a one time passcode input made of separate single character boxes that highlight with an accent border and glow on focus.

### How is it used?

```html
<div class="otp">
  <input class="otp-box" inputmode="numeric" maxlength="1" aria-label="Digit 1" />
  <input class="otp-box" inputmode="numeric" maxlength="1" aria-label="Digit 2" />
</div>
```

Each box is a real input with `maxlength="1"` and `inputmode="numeric"` for a numeric keypad on mobile. The focus state gets an accent border and glow.

### Why is it useful?

Verification code inputs appear in sign in and two factor flows. This styles a row of single character boxes with clear focus states, using only CSS. Each box has an accessible label, and advancing between boxes as the user types can be added by the host app.
