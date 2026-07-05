# Email Verification Input

**Issue:** [#36639](https://github.com/easemotion/easemotion-css/issues/36639)

Animated email verification input component. As the user types, the input validates format, domain, and length rules in real time with a smooth progress animation, color transitions, and per-rule pass/fail indicators.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--input-bg` | `#181825` | Background of the input field |
| `--valid-color` | `#4ade80` | Color used when validation passes |
| `--invalid-color` | `#f87171` | Color used when validation fails |
| `--check-duration` | `600ms` | Duration of the validation check animation |

## Features

- Real-time email validation on input (format, domain, length)
- Animated progress bar during check
- Color transitions for valid/invalid states on the input border
- Per-rule visual feedback with colored dots
- Verify button that disables until all rules pass
- Animated sending state on verify
- Adjustable check duration via slider
- Dark theme
