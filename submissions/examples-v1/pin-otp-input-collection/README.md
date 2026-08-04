# Animated PIN / OTP Input Collection

**EaseMotion CSS — Issue #15831**
`submissions/examples/pin-otp-input-collection/`

A segmented PIN / OTP entry component with smooth CSS animations.

## Files

| File | Purpose |
|---|---|
| `style.css` | All component styles and keyframes |
| `demo.html` | Live demo with all variants |
| `README.md` | This file |

## Classes

| Class | Element | Behaviour |
|---|---|---|
| `ease-otp-row` | `div` | Flex row container |
| `ease-otp-cell` | `span` | Relative wrapper per digit |
| `ease-otp-box` | `input` | Single digit cell |
| `ease-otp-fill-pop` | `input` | Scale pop on digit entry |
| `ease-otp-caret` | `span` | Blinking caret in empty focused cell |
| `is-invalid` | `ease-otp-row` | Shake + red flash on wrong code |
| `is-complete` | `ease-otp-row` | Green glow on correct code |

## Themes

| Class | Look |
|---|---|
| *(none)* | Default indigo on white |
| `ease-otp-theme-dark` | Deep navy, violet accent |
| `ease-otp-theme-neon` | Black, cyan accent |
| `ease-otp-theme-soft` | Lavender, pill-shaped cells |

## Usage

```html
<div class="ease-otp-row">
  <span class="ease-otp-cell">
    <input class="ease-otp-box ease-otp-fill-pop"
           type="text" inputmode="numeric" maxlength="1" />
    <span class="ease-otp-caret"></span>
  </span>
</div>
```

## Contributor

**Akanksha Thakur** (`@thakurakanksha288`) — GSSoC 2026