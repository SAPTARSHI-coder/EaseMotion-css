# Interactive File Drag Dropzone Documentation

An accessible, customizable drag-and-drop file upload component built using semantic ARIA roles, CSS variables, screen reader live regions, and full keyboard integration.

## Table of Contents
- [HTML Markup Example](#html-markup-example)
- [CSS Custom Properties & Design Tokens](#css-custom-properties--design-tokens)
- [Modifier Classes](#modifier-classes)
- [Accessibility Guidance (a11y)](#accessibility-guidance-a11y)
- [Keyboard Navigation](#keyboard-navigation)

---

## HTML Markup Example

```html
<!-- Hidden Native File Input -->
<input 
  type="file" 
  id="file-input" 
  class="visually-hidden" 
  multiple 
  accept=".png,.jpg,.jpeg,.pdf" 
  tabindex="-1"
/>

<!-- Accessible Interactive Dropzone -->
<div 
  id="dropzone" 
  class="dropzone" 
  role="button" 
  tabindex="0" 
  aria-controls="file-input" 
  aria-describedby="dropzone-instructions"
>
  <div class="dropzone__content">
    <span class="dropzone__icon" aria-hidden="true">📁</span>
    <p id="dropzone-instructions" class="dropzone__text">
      <strong class="dropzone__highlight">Click to upload</strong> or drag and drop files here
    </p>
    <span class="dropzone__hint">PNG, JPG, or PDF (max 10MB)</span>
  </div>
</div>

<!-- Screen Reader Live Announcements -->
<div id="status-announcer" class="visually-hidden" aria-live="polite" aria-atomic="true"></div>
