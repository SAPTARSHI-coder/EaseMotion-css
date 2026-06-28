# Resize Property

## What does it do?
A pure-CSS demo showing the `resize` property for making elements user-resizable — no JavaScript required.

## Features
- **resize: both** — resize in both directions
- **resize: horizontal** — resize width only
- **resize: vertical** — resize height only
- **resize: none** — default, no resize handle
- Textarea demonstration (inherently resizable)

## Property Values
| Value | Description |
|-------|-------------|
| `both` | Resize in both horizontal and vertical directions |
| `horizontal` | Resize width only |
| `vertical` | Resize height only |
| `none` | Element is not resizable (default) |

## Usage
```css
.resizable-panel {
  resize: both;
  overflow: auto;
  min-width: 200px;
  min-height: 100px;
}
```

## Browser Support
- `resize` — Chrome 1+, Firefox 4+, Safari 3+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
