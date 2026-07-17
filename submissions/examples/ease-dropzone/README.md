# ease-dropzone

A drag-and-drop file upload zone component for EaseMotion CSS.

## Usage

```html
<div class="ease-dropzone">
  <div class="ease-dropzone-icon">📁</div>
  <div class="ease-dropzone-text">Drag & drop files here</div>
  <div class="ease-dropzone-hint">or click to browse</div>
</div>
```

## States

```html
<!-- Idle (default) -->
<div class="ease-dropzone">...</div>

<!-- Active / dragover -->
<div class="ease-dropzone ease-dropzone-active">...</div>

<!-- Accepted -->
<div class="ease-dropzone ease-dropzone-accepted">...</div>

<!-- Rejected / Error -->
<div class="ease-dropzone ease-dropzone-rejected">...</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-dropzone` | Base idle state with dashed border |
| `ease-dropzone-active` | Dragover highlighted state |
| `ease-dropzone-accepted` | File accepted success state |
| `ease-dropzone-rejected` | File rejected error state |
| `ease-dropzone-icon` | Icon area |
| `ease-dropzone-text` | Main label text |
| `ease-dropzone-hint` | Secondary hint text |

## Features
- 4 visual states: idle, active, accepted, rejected
- Smooth transitions between states
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens