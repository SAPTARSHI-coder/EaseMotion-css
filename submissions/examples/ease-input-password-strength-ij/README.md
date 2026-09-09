# Password Strength Meter

Animated password strength indicator with a filling bar that transitions from red to yellow to green based on password complexity.

## Usage

Include `style.css` and the demo markup. The JavaScript calculates strength from five criteria (length, lowercase, uppercase, number, symbol).

```html
<input type="password" class="ips-input" id="my-input">
<div class="ips-bar" id="my-bar"></div>
```

## CSS Custom Properties

| Property          | Default   | Description                        |
|-------------------|-----------|------------------------------------|
| `--ips-duration`  | `0.4s`    | Transition duration                |
| `--ips-weak`      | `#ef4444` | Color for weak password            |
| `--ips-medium`    | `#f59e0b` | Color for medium password          |
| `--ips-strong`    | `#22c55e` | Color for strong password          |
| `--ips-bar-bg`    | `#e5e7eb` | Background of the bar track        |
| `--ips-radius`    | `8px`     | Input border-radius                |

## JavaScript API

Listen for `input` events and call `updateStrength()` to recalculate bar width, color, and tip status.

## Browser Support

All modern browsers with CSS custom properties and transitions.
