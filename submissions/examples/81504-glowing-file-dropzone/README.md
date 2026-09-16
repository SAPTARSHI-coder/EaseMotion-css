# Glowing File Dropzone

Glowing File Dropzone is a pure CSS dark-mode upload surface designed for modern forms and dashboards. It provides a clear interactive boundary, visible keyboard focus, responsive sizing, and a restrained glow on hover and focus.

## Features

- Native `<input type="file">` behavior with no JavaScript dependency.
- Explicit label association so the complete dropzone acts as the file control.
- Dark-mode styling with a glowing border and surface treatment.
- Smooth hover and focus transitions using configurable EaseMotion variables.
- Responsive sizing for mobile, tablet, and desktop layouts.
- `:focus-visible` support for keyboard navigation.
- `prefers-reduced-motion` support.

## Usage

```html
<label class="dropzone" for="file-input">
  <input id="file-input" type="file" />
  <span class="dropzone-content">Choose a file</span>
</label>
```

The native file input remains responsible for file selection while CSS handles the visual presentation.

## Demo

Open `demo.html` directly in a modern browser. No JavaScript or build tooling is required.
