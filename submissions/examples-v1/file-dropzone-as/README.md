# File Upload Dropzone

### What does this do?

It shows a styled file upload dropzone with a dashed border, an upload icon, and a two line prompt. The whole area is a label wrapping a native file input, so clicking anywhere opens the file picker and the border highlights on hover and focus.

### How is it used?

```html
<label class="dropzone">
  <input type="file" accept=".png,.jpg,.pdf" />
  <svg class="dz-icon">...</svg>
  <span class="dz-title">Drop files here or <b>browse</b></span>
  <span class="dz-hint">PNG, JPG or PDF up to 10MB</span>
</label>
```

Because the input is inside the label, the entire panel is the click target, and `:focus-within` shows the highlight when the input is focused by keyboard.

### Why is it useful?

Upload areas appear in forms for avatars, documents, and images. This turns a plain file input into a large, inviting dropzone with clear affordance and a focus state, using only CSS and inline SVG. The highlight transition is removed under reduced motion.
