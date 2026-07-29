# Interactive File Upload Dropzone

An interactive, animation-rich, and accessibility-optimized Drag-and-Drop File Upload Dropzone component.

---

### 1. What does this component do?

This component provides a premium, responsive drag-and-drop area for file uploads. It utilizes custom micro-interactions to visually guide users through dragging files, browsing directories, showing hover pulses, and rendering successful drop animations with checkmark draw indicators.

---

### 2. How is it used?

Structure your HTML as follows:

```html
<label for="file-upload" class="em-upload-dropzone" id="drop-zone" tabindex="0" aria-describedby="upload-description">
  <input type="file" id="file-upload" class="em-upload-input" multiple>
  <div class="em-upload-icon-container" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path class="em-upload-icon-cloud" d="..." />
      <path class="em-upload-icon-arrow" d="..." />
    </svg>
  </div>
  <div class="em-upload-text-group">
    <h2 class="em-upload-title" id="upload-description">
      Drag & drop files here or <span class="em-browse-link">browse</span>
    </h2>
    <p class="em-upload-subtitle">Supports PDF, PNG, JPG, or SVG (Max 10MB)</p>
  </div>
</label>
```

---

### 3. Why is it useful?

It replaces the basic, unappealing native browser file inputs with a sleek SaaS-style file drop area. Key benefits include:
- **Instant Visual Feedback:** Smooth transitions make drop zones feel extremely premium.
- **Drag-Over State:** The layout pulses and darkens elements during active file drags to signify readiness.
- **Complete Self-Containment:** Built without external libraries or CDNs.

---

### 4. Why it fits EaseMotion CSS

EaseMotion CSS focuses on expressive, readable design helpers. This component mirrors that philosophy by:
- Staging layout properties using CSS variables (allowing standard `.ease-*` framework configurations).
- Implementing micro-animations (the hovering arrow, pulsing borders, and checkmark drawing) to add dynamic motion without layout shifts.
- Wrapping everything in modern, zero-dependency CSS layout grids.

---

### 5. Features

- **Large Upload Canvas:** Designed to work cleanly on desktop and mobile layout profiles.
- **Interactive Drag-Over:** The zone turns primary color and switches to a solid pulsing border when a file is dragged over.
- **Dynamic File Preview Card:** Fades and slides in with file statistics and a checkmark drawing SVG animation upon successful load.
- **Pulsing Arrow Animation:** Floating micro-interaction indicates action direction.
- **Standard Reset Action:** Clicking the close button clears files, animations, and returns active keyboard focus.

---

### 6. Accessibility considerations

- **Keyboard Navigation:** Fully focusable with clear focus indicators. Pressing `Space` or `Enter` triggers file dialog selector.
- **Semantic Structure:** Native file input is kept in DOM to handle standard screen reader announcements.
- **ARIA Integration:** Explicitly uses `aria-describedby` and `aria-live="polite"` on active preview blocks to announce modifications.
- **Prefers Reduced Motion:** Disables keyframe shifts, pulsing borders, translations, and rotation styles when system preferences require reduced motion.
