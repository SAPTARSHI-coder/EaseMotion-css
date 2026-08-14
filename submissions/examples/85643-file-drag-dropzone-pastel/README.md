# Interactive File Drag Dropzone Component with Pastel Styling (`ease-pastel-dropzone`)

A pure HTML + Vanilla CSS Interactive File Drag Dropzone component featuring a soft pastel gradient aura backdrop (`linear-gradient(135deg, #fbcfe8, #e9d5ff, #bae6fd)`), dashed drop surface, hover lift transition (`transform: translateY(-4px)`), accessible native `<input type="file" class="sr-only">`, focus states (`:focus-within`), dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Pastel File Upload Dropzone UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Pastel Aesthetic**: Soft pastel pink, purple, and blue gradient aura backdrop behind a sleek card surface (`#ffffff`), dashed drop area border, and gradient action button graphic.
- **100% Accessible**: Wraps native `<input type="file" class="sr-only">` inside a semantic `<label class="ease-pastel-dropzone">`. Includes explicit focus rings (`:focus-within`) and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important; animation: none !important;`).
- **Theme Adaptability**: Supports light soft pastel default presentation and dark mode adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<label class="ease-pastel-dropzone" for="pastel-file-input">
  <input
    type="file"
    id="pastel-file-input"
    class="sr-only"
    multiple
    accept=".svg,.png,.jpg,.jpeg,.pdf"
  />
  <span class="dropzone-surface">
    <span class="upload-icon-badge">...</span>
    <span class="dropzone-heading">DRAG &amp; DROP YOUR FILES HERE</span>
    <span class="dropzone-subheading"
      >OR CLICK TO BROWSE FROM YOUR COMPUTER</span
    >
    <span class="pastel-button-graphic">CHOOSE FILES</span>
  </span>
</label>
```

### Customization Variables

```css
.ease-pastel-dropzone {
  --pastel-surface: #ffffff;
  --pastel-pink: #fbcfe8;
  --pastel-purple: #e9d5ff;
  --pastel-blue: #bae6fd;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85643-file-drag-dropzone-pastel/demo.html) directly in any modern web browser to view the Pastel File Dropzone UI offline.
