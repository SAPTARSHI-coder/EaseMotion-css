# Clipboard Copy Feedback

Copy-to-clipboard buttons with animated success feedback. Click copies text and shows a "Copied!" checkmark animation.

## Features

- Copies arbitrary text to clipboard via `navigator.clipboard` (falls back to `execCommand`)
- Animated transition from "Copy" to "Copied!" with checkmark icon
- Automatically resets after 2 seconds
- Multiple code-snippet cards in a clean layout

## Usage

Add the `copy-btn` class to a button and store the target text in `data-copy`:

```html
<button class="copy-btn" data-copy="Text to copy" type="button">
  <span class="copy-label">Copy</span>
  <span class="copy-success">
    <svg>…checkmark…</svg>
    Copied!
  </span>
</button>
```

## Custom Properties

| Property                | Default   | Description                |
|-------------------------|-----------|----------------------------|
| `--copy-duration`       | `0.35s`   | Feedback transition speed  |
| `--copy-btn-bg`         | `#1e293b` | Default button background  |
| `--copy-btn-color`      | `#ffffff` | Button text colour         |
| `--copy-success-color`  | `#22c55e` | Success state background   |
| `--copy-radius`         | `6px`     | Button border radius       |
