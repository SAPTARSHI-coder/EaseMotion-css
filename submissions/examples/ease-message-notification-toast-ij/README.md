# Message Notification Toast

A toast notification system that slides in from the top-right corner. Supports multiple toast types (success, error, info, warning) with a queue system and auto-dismiss.

## Features

- Slide-in from top-right with translateX + opacity animation
- Auto-dismiss after 3.5 seconds with slide-out animation
- Queue system processes toasts sequentially
- Four preset types with distinct colors and icons
- Close button for manual dismissal

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="mnt-container" id="mntContainer"></div>

<script>
  showToast('success', 'Operation completed!');
</script>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mnt-duration` | `0.3s` | Slide animation duration |
| `--mnt-toast-bg` | `#fff` | Toast background color |
| `--mnt-shadow` | `0 4px 20px rgba(0,0,0,0.15)` | Toast box shadow |
| `--mnt-radius` | `10px` | Toast border radius |
| `--mnt-success` | `#27ae60` | Success accent color |
| `--mnt-error` | `#e74c3c` | Error accent color |
| `--mnt-info` | `#3498db` | Info accent color |
| `--mnt-warning` | `#f39c12` | Warning accent color |
