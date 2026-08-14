# CSS File Dropzone: Glowing Pastel Styling

An interactive, zero-JS pure CSS file dropzone component featuring glowing pastel gradients, dashed border hover animation hints, and frosted glassmorphism styling for the EaseMotion library, fully addressing feature request issue `#81505`.

## 🚀 Features

- **Zero External JavaScript Dependencies:** Built entirely using native HTML `<label>` and `<input type="file">` elements with pure CSS styling.
- **Glowing Pastel Aesthetic:** Frosted glass background with soft pink and purple glowing pastel gradient borders.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark roles (`role="region"` / `role="button"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-dropzone-card" role="region" aria-label="Glowing Pastel Dropzone Showcase" tabindex="0">
    <div class="em-dropzone-wrapper">
        <label class="em-pastel-dropzone" role="button" aria-label="File Upload Dropzone">
            <input type="file" class="em-file-input" aria-hidden="true">
            <div class="em-dropzone-content">
                <span class="em-dropzone-icon">📁</span>
                <h3 class="em-dropzone-title">Drop your files here</h3>
                <p class="em-dropzone-text">or <span class="em-highlight-text">browse files</span> from your device</p>
            </div>
        </label>
    </div>
</header>
