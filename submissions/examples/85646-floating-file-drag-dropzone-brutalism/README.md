# Floating File Drag Dropzone Component with Brutalism Styling (`ease-floating-dropzone`)

A pure HTML + Vanilla CSS Floating File Drag Dropzone component featuring a bold Neo-Brutalist design (4px solid borders, 8px hard offset black drop-shadows, high-contrast `#ffde59` accent fill), floating hover lift transition (`transform: translate(-4px, -4px)`), accessible native `<input type="file">`, focus states (`:focus-within`), dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Brutalist File Upload Dropzone UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Neo-Brutalist Aesthetic**: Chunky 4px solid borders with hard offset 8px drop-shadows, high contrast typography, dashed drop area border, and floating hover lift transition.
- **100% Accessible**: Wraps native `<input type="file" class="sr-only">` inside a semantic `<label class="ease-floating-dropzone">`. Includes explicit focus rings (`:focus-within`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports light Neo-Brutalist yellow default presentation (`#ffde59`) and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<label class="ease-floating-dropzone" for="brutalist-file-input">
  <input
    type="file"
    id="brutalist-file-input"
    class="sr-only"
    multiple
    accept=".svg,.png,.jpg,.jpeg,.pdf"
  />
  <span class="dropzone-surface">
    <span class="upload-icon-badge">...</span>
    <span class="dropzone-heading">DRAG &amp; DROP FILES HERE</span>
    <span class="dropzone-subheading">OR CLICK TO BROWSE LOCAL FILES</span>
    <span class="brutal-button-graphic">CHOOSE FILES</span>
  </span>
</label>
```

### Customization Variables

```css
.ease-floating-dropzone {
  --brutal-surface: #ffffff;
  --brutal-accent: #ffde59;
  --brutal-border: #000000;
  --brutal-shadow: #000000;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85646-floating-file-drag-dropzone-brutalism/demo.html) directly in any modern web browser to view the Brutalism Floating File Dropzone UI offline.
