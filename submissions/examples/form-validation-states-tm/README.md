# Form Validation States — Issue #5323

## Overview

This submission adds `.ease-input-error`, `.ease-input-success`, and `.ease-input-warning`
state classes with corresponding helper text components to EaseMotion CSS.

## Features

- **Error State** — Red border, error icon, ARIA role=alert for screen readers
- **Success State** — Green border, checkmark icon, ARIA role=status
- **Warning State** — Amber border for soft validation signals
- **Select variants** — `.ease-select-error`, `.ease-select-success`
- **Dark mode** — Full dark theme support via `prefers-color-scheme`
- **Reduced motion** — Transitions disabled when `prefers-reduced-motion: reduce`

## Usage

```html
<div class="field-group">
  <input class="ease-input ease-input-error"
         aria-describedby="err-msg"
         aria-invalid="true">
  <span id="err-msg" class="field-error-msg" role="alert">
    Please enter a valid email address.
  </span>
</div>
```

## Tokens Used

- `--ease-color-danger`, `--ease-color-danger-alpha`
- `--ease-color-success`, `--ease-color-success-alpha`
- `--ease-color-warning`
- `--ease-speed-fast`, `--ease-ease-out`
- `--ease-radius-md`, `--ease-space-*` scale