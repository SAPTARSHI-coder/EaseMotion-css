# File Export Animation

A file export animation component with download progress indicator — CSS + JS.

## Features
- Animated file icon with progress fill
- Smooth progress bar from 0% to 100%
- Completion state with success feedback
- Fully customizable via CSS custom properties

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--file-color` | #6366f1 | Color of the file icon |
| `--progress-color` | #22c55e | Color of the progress bar |
| `--export-duration` | 2.5s | Duration of the export animation |
| `--icon-color` | #d1d5db | Color of the icon inside the file |

## Usage
```html
<button class="export-btn" style="--file-color: #6366f1; --progress-color: #22c55e; --export-duration: 2.5s; --icon-color: #d1d5db;">
  Export Data
</button>
```

## Browser Support
- Chrome 49+, Firefox 31+, Safari 9+

## Tech Stack
- HTML + CSS + JavaScript
