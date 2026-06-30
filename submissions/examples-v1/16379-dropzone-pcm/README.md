# File Upload / Drag-and-Drop Zone Component

## What does this submission do?

Adds a fully-interactive **File Upload / Dropzone** component for forms, profile pictures, document uploads, and file management interfaces. Supports drag-and-drop, click-to-browse, paste from clipboard, file previews with thumbnails, and 6 visual states (idle, drag-over, uploading, success, error, disabled).

## How was it implemented?

- **CSS** (`style.css`): Defines the `.dropzone` component with a dashed border, centered icon/text/hint layout, and smooth transitions. States are applied via modifier classes: `.drag-over` (solid blue border + blue glow), `.uploading` (dimmed with progress bar), `.success` (green border + checkmark), `.error` (red border + error message), and `.disabled` (dimmed, no pointer events). File previews are rendered as `.dz-preview` cards with thumbnail (image or file-type icon), filename, file size, and a remove button. Preview items animate in with a scale+fade keyframe. The progress bar uses a gradient fill with CSS transition.
- **HTML/JS** (`demo.html`): The interactive dropzone listens for `dragenter`/`dragover`/`dragleave`/`drop` events, and `click` to trigger the hidden `<input type="file">`. On file drop/select, it validates each file against the 5MB size limit and `image/*` accept type — invalid files show an error state with the specific file name and reason. Valid files are immediately added as previews (image files render a real object URL thumbnail; other types show a file-type emoji icon), then a simulated upload runs with an animated progress bar (incrementing every 200ms). Control buttons allow resetting the dropzone, simulating an error, and toggling the disabled state. A second section showcases all 6 states side-by-side with labeled examples.

## Why these choices?

- **6 visual states** match the issue specification exactly and cover every real-world dropzone interaction.
- **Real file validation** (size + type) before upload gives immediate feedback rather than failing server-side.
- **Object URL thumbnails** for images provide instant preview without uploading, then are revoked on remove to prevent memory leaks.
- **Progress bar simulation** demonstrates the uploading state convincingly for demo purposes; in production this would connect to `XMLHttpRequest.upload.onprogress`.
- **Paste support** allows power users to paste screenshots directly from clipboard.
- **Keyboard accessible**: focus-visible ring, ARIA label, and click-to-browse work without a mouse.

## Files

| File        | Purpose                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| `demo.html` | Interactive dropzone with file validation, previews, progress bar, state controls, and all-states showcase |
| `style.css` | Dropzone styles: states, preview cards, progress bar, animations                                           |
| `README.md` | This documentation                                                                                         |
