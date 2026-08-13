# Animated File Upload Dropzone

A styled file upload dropzone with hover lift, a bouncing icon, and a "file selected" state — all driven purely by CSS, including the file-selected styling via `:has()`. No JavaScript required.

## Features

- 🖱️ Hover lift with a bouncing upload icon
- ✅ Automatically switches to a "file selected" green state once a file is chosen, using `:has(input:valid)` — no JavaScript needed
- ⌨️ Visible keyboard focus ring for accessibility
- 📱 Responsive — padding scales down on small screens
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies for any visual state

## Usage

```html
<label class="dropzone" for="file-input">
  <input class="dropzone-input" type="file" id="file-input" />
  <span class="dropzone-icon">📤</span>
  <p class="dropzone-title">Drop files here or click to upload</p>
  <p class="dropzone-hint">SVG, PNG, JPG or GIF (max. 5MB)</p>
</label>
```

The `<label>` wrapping the hidden file `<input>` makes the entire dropzone clickable natively — no click handler needed. Drag-and-drop file handling (actually processing dropped files) does require JavaScript in a real app; this component provides the clickable, fully-styled shell with all three visual states (idle, hover, file-selected) built in CSS.

## Browser support note

The "file selected" green state relies on the CSS `:has()` selector, supported in all current major browsers (Chrome, Edge, Safari, Firefox 121+). In older browsers, the dropzone still works for clicking/selecting files — it just won't show the green confirmation styling.

## Why it fits EaseMotion CSS

Every visual state — hover, focus, and file-selected — is handled with CSS pseudo-classes and `:has()`, with no JavaScript needed to drive the styling. Class names are simple and readable (`dropzone`, `dropzone-icon`, `dropzone-input`).

## Files

- `demo.html` — a working dropzone you can click to select a file and see the state change
- `style.css` — all styles and animations
- `README.md` — this file

## Notes

To support actual drag-and-drop (dragging a file from the desktop onto the zone), you'd add `dragover`/`drop` event listeners in JavaScript that assign the dropped file to the hidden input — the CSS styling here already covers the resulting "file selected" state automatically.