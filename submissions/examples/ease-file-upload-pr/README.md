# ease-file-upload-pr

Drag-and-drop file upload zone with hover states and file list.

## Features

- Dashed border zone with upload icon
- Border color change and scale on drag-over
- Icon lift animation on hover
- File list with name, size, progress bar, and remove button
- Compact variant for smaller spaces
- Pure CSS hover states; minimal JS for drag events

## Files

- `style.css` — the upload zone styles
- `demo.html` — working demo with empty, file list, and compact
- `README.md` — usage documentation

## Usage

```html
&lt;div class="upload-pr"&gt; &lt;svg class="upload-pr-icon"&gt;...&lt;/svg&gt;
&lt;div class="upload-pr-title"&gt;Drop files here&lt;/div&gt; &lt;div
class="upload-pr-subtitle"&gt;or click to browse&lt;/div&gt; &lt;span
class="upload-pr-btn"&gt;Choose Files&lt;/span&gt; &lt;/div&gt;
```
