# File Upload Dropzone

### What does this do?

It shows a file upload dropzone with a dashed border, an upload icon, and instructions, that highlights on hover and opens the file picker when clicked.

### How is it used?

```html
<label class="dropzone">
  <input type="file" class="dropzone-input" aria-label="Upload a file" />
  <span class="dropzone-icon" aria-hidden="true"><!-- svg --></span>
  <strong>Drag and drop or browse</strong>
  <span>PNG, JPG or PDF up to 10MB</span>
</label>
```

The dropzone is a `label` wrapping a real `input type="file"`, so clicking anywhere opens the picker and the control stays keyboard accessible.

### Why is it useful?

Upload areas appear in forms, media managers, and import flows. This styles a dropzone around a native file input with a clear hover and focus state, using only CSS with an inline SVG icon. The hover lift is reduced under `prefers-reduced-motion: reduce`.
