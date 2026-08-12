# Print Preview Simulator

A print preview simulation that transforms page content between screen view and print preview mode. The page scales down in screen view and expands with print margin indicators in print preview.

## Features

- Toggle between Screen View and Print Preview
- Page scale-down animation with transform-origin top
- Animated print margin lines on print view
- Paper texture background in print mode
- Content reflows responsively

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pps-duration` | `0.5s` | Transition duration |
| `--pps-page-bg` | `#ffffff` | Page background color |
| `--pps-shadow` | `0 8px 32px rgba(0,0,0,0.12)` | Page box shadow |
| `--pps-margin-color` | `#dc2626` | Print margin line color |
| `--pps-radius` | `4px` | Page border radius |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include demo.html markup -->
<script src="script.js"></script>
```

Customize via CSS custom properties:
```css
:root {
  --pps-margin-color: #2563eb;
  --pps-duration: 0.7s;
}
```
