# Dark Mode File Dropzone — accessibility integration

Documentation guide for the **Dark Mode File Dropzone** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the dark mode file dropzone: drag announcements, aria-dropeffect, and focusable browse fallback.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<label class="ease-dropzone" tabindex="0">
  <input type="file" class="ease-dropzone__input" aria-label="Choose files" />
  <span class="ease-dropzone__label">Drop files here or click to browse</span>
</label>
```

## CSS class naming conventions
- `.ease-dark-mode-file-dropzone-a11y` — root container
- `.ease-dark-mode-file-dropzone-a11y__<element>` — BEM-style child elements
- `.ease-dark-mode-file-dropzone-a11y--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-dropzone-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `role`, `aria-modal`, `aria-pressed`, and `aria-describedby` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81549
