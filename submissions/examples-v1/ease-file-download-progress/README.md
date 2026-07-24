# Ease File Download Progress

## Description
A file download progress card showing filename, a live animated progress bar with shimmer effect, percentage, and a status label. Transitions to a completion state with a checkmark pop animation once finished.

## Features
- Animated fill using `transform: scaleX()` (GPU-accelerated, no layout thrashing)
- Shimmer sweep animation while actively downloading
- Automatic transition to a "complete" state — icon color, fill color, and checkmark all update
- `role="status"` + `aria-live="polite"` so screen readers announce progress updates
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-download" role="status" aria-live="polite">
  <div class="download-header">
    <div class="file-icon">📄</div>
    <div class="file-info">
      <div class="file-name">your-file.zip</div>
      <div class="file-status">Downloading… 0%</div>
    </div>
    <span class="download-percent">0%</span>
    <svg class="complete-check" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
  <div class="download-track">
    <div class="download-fill"></div>
  </div>
</div>
<script src="download-progress.js"></script>
```
In a real integration, replace the demo's simulated `setInterval` progress with your actual download event listener (e.g. XHR `progress` event or Fetch API `ReadableStream` reader), updating `fill.style.transform` and toggling `.is-complete` the same way.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--download-accent` | `#38bdf8` | In-progress fill/accent color |
| `--download-success` | `#22c55e` | Completion state color |
| `--download-track-bg` | `#23273a` | Empty track background |
| `--download-duration` | `0.4s` | State-change transition speed |

## Files
- `demo.html` — live working example (simulated download for demo purposes)
- `style.css` — component styles and animations
- `download-progress.js` — demo progress simulation logic
- `README.md` — this file