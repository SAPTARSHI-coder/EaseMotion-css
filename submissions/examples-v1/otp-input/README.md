# OTP Input Component

A row of 6 individual digit input boxes for entering one-time passwords or verification codes. Features auto-focus to next box on input, backspace to go back, paste support, and animated states (pulse on empty, pop on fill, shake on error, staggered success reveal). Includes inline JavaScript for input handling.

## Classes

| Class | Description |
|---|---|
| `ease-otp-input` | Flex container for the digit boxes |
| `ease-otp-box` | Individual digit input |
| `ease-otp-box--active` | Currently focused box |
| `ease-otp-box--filled` | Box with a digit entered |
| `ease-otp-input--error` | Error state (red shake on all boxes) |
| `ease-otp-input--success` | Success state (staggered green pop) |

## Usage

```html
<div class="ease-otp-input" data-ease-otp-length="6">
  <input class="ease-otp-box" type="text" inputmode="numeric" maxlength="1" autocomplete="one-time-code" />
  <!-- repeat for 6 boxes -->
</div>
```

See `demo.html` for the full JS setup (auto-focus, backspace, paste, Enter to validate).

## Why it fits EaseMotion CSS

Four animated states with `ease-` prefixed keyframes: `ease-kf-otp-pulse` (empty waiting), `ease-kf-otp-pop` (digit entry), `ease-kf-otp-shake` (error), and `ease-kf-otp-success-pop` (staggered success). Smooth border and transform transitions. Respects `prefers-reduced-motion`.
