# Interactive Drag & Drop File Upload Target with Ripple Progress

> A highly interactive file dropzone component featuring animated dashed border marching ants, drag-over highlight states, and simulated file upload progress ripples.

## Features

- **Drag-and-Drop API** — Fully utilizes HTML5 native `dragenter`, `dragleave`, `dragover`, and `drop` events to capture files.
- **Marching Ants Animation** — Smooth SVG dashed border animation (`stroke-dasharray`) during the `is-dragover` active state.
- **Fallback Support** — Includes a visually hidden but keyboard-accessible `<input type="file">` overlay.
- **Simulated Upload Progress** — Dropped files render into an animated list, with a dynamic background progress fill simulating network activity.
- **Clean State Transitions** — Transitions seamlessly from idle to drag-over, uploading, and completed states.

## Files

```
submissions/examples/file-upload-dropzone-em/
├── demo.html    — HTML markup mapping out the dropzone region, hidden input, and file list target
├── style.css    — SVG background image data URIs for borders, flex layouts, and keyframe animations
├── script.js    — Event delegation, file reading, and simulated setInterval progress timers
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--bg-panel` | `#1e293b` | Dropzone container background |
| `--primary` | `#3b82f6` | Brand blue for drag-over state |
| `--border-color` | `#334155` | Default inactive dashed border |
| `--success` | `#10b981` | Checkmark color when upload completes |

## Usage

```html
<div class="dropzone" id="dropzone" role="button" tabindex="0">
  <input type="file" id="file-input" class="dropzone__input" multiple />
  <!-- UI Content inside -->
</div>
<div class="file-list" id="file-list"></div>
```

## Acceptance Criteria ✅

- [x] Border styling animates seamlessly when dragging a file over the target area (using SVG `background-image` animations).
- [x] Dropping a file triggers an animated upload progress bar (`.file-item__progress-bg`).
- [x] File pill item displays file name, converted size (KB/MB), and an interactive remove action.
- [x] Keyboard accessible fallback file input button provided (using `tabindex="0"` and transparent overlay).
- [x] Conforms to the repository structure and required file names (`demo.html`, `style.css`, etc).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
