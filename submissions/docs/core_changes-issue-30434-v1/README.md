# Image Zoom / Lightbox — Issue #30434

CSS-only lightbox/image zoom component with fullscreen overlay. Two activation methods: `:target` and checkbox `:checked`.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-lightbox` | Anchor wrapper for :target method |
| `.ease-lightbox-trigger` | Label wrapper for checkbox method |
| `.ease-lightbox-toggle` | Hidden checkbox (checked → show) |
| `.ease-lightbox-overlay` | Fullscreen dark overlay |
| `.ease-lightbox-img` | Expanded image (centered) |
| `.ease-lightbox-close` | Close button (&times;) |
| `.ease-lightbox-caption` | Bottom caption text |

## CSS Variables

- `--ease-lb-overlay` (default: rgba(0,0,0,0.85))
- `--ease-lb-transition` (default: 0.3s ease)
- `--ease-lb-max-size` (default: 90vw)
