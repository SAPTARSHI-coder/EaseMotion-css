# Dark Mode File Dropzone — basic usage

Documentation guide for the **Dark Mode File Dropzone** component, focused on **basic usage**.

## Overview
A dark-mode file dropzone with a dashed border that highlights on dragover and a focus-visible outline for keyboard users.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<label class="ease-dropzone">
  <input type="file" class="ease-dropzone__input" />
  <span class="ease-dropzone__label">Drop files here or click to browse</span>
</label>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-dropzone-bg: #6366f1;
  --ease-dropzone-border: #6366f1;
  --ease-dropzone-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81547
