# File Upload Component

A drag-and-drop file upload zone with distinct animated states: idle, drag-over, uploading (indeterminate progress bar), success (checkmark pop), and error (shake). Includes file type validation and size checking with inline JavaScript.

## Classes

| Class | Description |
|---|---|
| `ease-file-upload` | Main container (click to browse, drag target) |
| `ease-file-upload--drag-over` | File hovering over the drop zone |
| `ease-file-upload--uploading` | Upload in progress |
| `ease-file-upload--success` | Upload completed successfully |
| `ease-file-upload--error` | Upload failed |
| `ease-upload-icon` | State icon (upload arrow / check / error) |
| `ease-upload-text` | State description text |
| `ease-upload-hint` | Supported file types hint |
| `ease-upload-progress` | Progress bar track |
| `ease-upload-progress-bar` | Animated indeterminate progress fill |

## Usage

```html
<div class="ease-file-upload" role="button" tabindex="0">
  <svg class="ease-upload-icon" ...>...</svg>
  <span class="ease-upload-text">Drag & drop files here or click to browse</span>
  <span class="ease-upload-hint">Supports PNG, JPG, WebP, PDF (max 5MB)</span>
  <div class="ease-upload-progress">
    <div class="ease-upload-progress-bar"></div>
  </div>
</div>
```

A minimal JS setup handles drag events, file validation, and state transitions (see `demo.html`).

## Why it fits EaseMotion CSS

Five animated visual states with smooth transitions, floating icon animation, indeterminate progress bar, pop-in checkmark, and error shake — all using `ease-` prefixed keyframes. Respects `prefers-reduced-motion`.
