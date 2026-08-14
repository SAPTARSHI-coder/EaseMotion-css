# Floating Label Input Component

**Issue:** [#71836](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/71836)

Input field with floating label that animates on focus using pure CSS `:placeholder-shown`.

## Design Tokens

| Token | Default |
|-------|---------|
| `--fli-border-focus` | `#6366f1` |
| `--fli-radius` | `10px` |
| `--fli-transition` | `0.3s` |
| `--fli-label` | `#6366f1` |

## Usage

- `.fli-field` — field wrapper with position context
- `.fli-input` — input with `placeholder=" "` (single space)
- `.fli-label` — label that floats on focus/filled

The `placeholder=" "` trick keeps the label positioned above without JS.
