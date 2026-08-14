# Lock Screen Pattern

Phone-style lock screen pattern unlock with a 3x3 dot grid. Draw a pattern by clicking and connecting dots. Wrong attempts trigger a shake animation.

## Features

- 3x3 interactive dot grid
- Lines drawn between connected dots
- Visual feedback on dot activation (scale + glow)
- Shake animation on incorrect pattern
- Success state with green highlight
- Configurable correct pattern in JavaScript

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lsp-duration` | `0.3s` | Transition duration for dot states |
| `--lsp-dot-color` | `#475569` | Inactive dot colour |
| `--lsp-dot-active` | `#3b82f6` | Active dot colour |
| `--lsp-line-color` | `#3b82f6` | Connection line colour |
| `--lsp-error-color` | `#ef4444` | Error accent colour |
| `--lsp-bg` | `#0f172a` | Page background |

## Usage

Include `style.css`. The JavaScript in `demo.html` handles dot connection logic and line rendering. The default correct pattern is `0,1,4,7,8` (top row left-to-right, then down centre).
