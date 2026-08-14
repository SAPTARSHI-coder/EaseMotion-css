# File Upload Status

Simulated file upload with drag‑and‑drop zone, animated progress bar, and completion feedback.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fu-duration` | `0.4s` | Base transition duration |
| `--fu-zone-bg` | `#f8faff` | Upload zone background |
| `--fu-zone-border` | `2px dashed #c5cdd9` | Default zone border |
| `--fu-zone-hover-border` | `2px dashed #6366f1` | Drag‑over zone border |
| `--fu-progress-color` | `#6366f1` | Progress bar colour |
| `--fu-success-color` | `#22c55e` | Success check colour |
| `--fu-radius` | `12px` | Border‑radius |

## Behaviour

- Drag a file over the zone to see the border highlight.
- Click the zone or drop a file to select / register a file.
- Press **Upload** to simulate a 2‑second progress animation.
- A checkmark appears on completion; **Reset** clears the state.
